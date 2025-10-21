// This Node.js version check is adapted from the Baileys engine-requirements script.
// Source: https://github.com/WhiskeySockets/Baileys/blob/4599ff84bbdef332c6f0a01b24376f868254ed89/engine-requirements.js#L1

const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n❌ This package requires Node.js 20+ to run reliably.\n` +
    `   You are using Node.js ${process.versions.node}.\n` +
    `   Please upgrade to Node.js 20+ to proceed.\n`
  );
  process.exit(1);
}
