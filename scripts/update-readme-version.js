// Updates version-pinned URLs in README.md (CDN pin + Socket badge) to the
// current package.json version. Runs as @semantic-release/exec prepareCmd —
// package.json has already been bumped by @semantic-release/npm at that point.
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const { version } = require(path.join(root, "package.json")); // eslint-disable-line n/global-require
const readmePath = path.join(root, "README.md");
const readme = fs.readFileSync(readmePath, "utf8");

// Matches both btch-downloader@6.0.38 (CDN) and btch-downloader/6.0.38 (Socket badge).
const updated = readme.replace(
  /(btch-downloader[@/])\d+\.\d+\.\d+/g,
  `$1${version}`,
);

if (updated === readme) {
  console.log("update-readme-version: no pinned versions found, nothing to update");
} else {
  fs.writeFileSync(readmePath, updated);
  console.log(`update-readme-version: README pins updated to ${version}`);
}