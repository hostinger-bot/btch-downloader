// Updates version-pinned CDN URLs in README.md to the current package.json
// version. Runs as @semantic-release/exec prepareCmd — package.json has
// already been bumped by @semantic-release/npm at that point.
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const { version } = require(path.join(root, "package.json")); // eslint-disable-line n/global-require
const readmePath = path.join(root, "README.md");
const readme = fs.readFileSync(readmePath, "utf8");

const updated = readme.replace(
  /btch-downloader@\d+\.\d+\.\d+/g,
  `btch-downloader@${version}`,
);

if (updated === readme) {
  console.log("update-readme-version: no pinned versions found, nothing to update");
} else {
  fs.writeFileSync(readmePath, updated);
  console.log(`update-readme-version: README pins updated to ${version}`);
}