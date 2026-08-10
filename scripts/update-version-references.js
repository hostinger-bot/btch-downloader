// Updates version/date references across the repo to the current package.json
// version. Runs as @semantic-release/exec prepareCmd — package.json has
// already been bumped by @semantic-release/npm at that point.
const fs = require("node:fs");
const crypto = require("node:crypto");
const path = require("node:path");

const root = path.join(__dirname, "..");
const { version } = require(path.join(root, "package.json")); // eslint-disable-line n/global-require

// Markdown/source files carrying version pins. lib/Browser/index.ts and the
// example.html files are hand-maintained sources whose pins must track the
// release version (docs/** itself is regenerated separately by npm run docs).
const FILES = [
  "README.md",
  "AGENTS.md",
  "SKILL.md",
  "lib/Browser/index.ts",
  "example.html",
  "docs/example.html",
];

function longDate() {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function isoDate() {
  return new Date().toISOString().slice(0, 10);
}

// sha384 of the locally built browser bundle — the exact bytes npm publish
// ships and jsDelivr serves, so the pinned integrity hash stays valid.
function sriBase64() {
  const distPath = path.join(root, "dist", "browser", "index.min.js");
  if (!fs.existsSync(distPath)) {
    console.log("update-version-references: dist/browser/index.min.js missing, SRI hashes left unchanged");
    return null;
  }
  return crypto.createHash("sha384").update(fs.readFileSync(distPath)).digest("base64");
}

function updateFile(relPath, transform) {
  const filePath = path.join(root, relPath);
  const original = fs.readFileSync(filePath, "utf8");
  const updated = transform(original);
  if (updated === original) {
    console.log(`${relPath}: no changes`);
    return;
  }
  fs.writeFileSync(filePath, updated);
  console.log(`${relPath}: updated`);
}

const sri = sriBase64();

for (const file of FILES) {
  updateFile(file, (content) =>
    content
      // CDN pins (btch-downloader@6.0.38) and Socket badge (btch-downloader/6.0.38) —
      // capture group preserves the separator.
      .replace(/(btch-downloader[@/])\d+\.\d+\.\d+/g, `$1${version}`)
      // example.html: SRI integrity hash must match the new bundle.
      .replace(/integrity="sha384-[A-Za-z0-9+/=]+"/g, `integrity="sha384-${sri}"`)
      // AGENTS.md: "<!-- Pinned to 6.0.38 -->"
      .replace(/Pinned to \d+\.\d+\.\d+/g, `Pinned to ${version}`)
      // AGENTS.md: "Latest stable version: **6.0.38**"
      .replace(/Latest stable version: \*\*\d+\.\d+\.\d+\*\*/g, `Latest stable version: **${version}**`)
      // AGENTS.md: "`6.0.38` (published ~July 29, 2026)" table cell
      .replace(/`\d+\.\d+\.\d+` \(published ~[A-Z][a-z]+ \d{1,2}, \d{4}\)/g, `\`${version}\` (published ~${longDate()})`)
      // AGENTS.md: "Last verified: **July 29, 2026**"
      .replace(/Last verified: \*\*[A-Z][a-z]+ \d{1,2}, \d{4}\*\*/g, `Last verified: **${longDate()}**`),
  );
}

// CHANGELOG.md: prepend "# <version> (<YYYY-MM-DD>)" heading, matching the
// existing entry style, only if this version is not already the top entry.
updateFile("CHANGELOG.md", (content) => {
  if (content.startsWith(`# ${version} (`)) {
    return content;
  }
  return `# ${version} (${isoDate()})\n` + content;
});