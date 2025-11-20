#!/usr/bin/env node

/**
 * File: check-build.js
 * Description: Build skipper script — skips building if dist/ already exists.
 * Creator: Tio Permana
 * Last Modified: 2025-11-20
 *
 */
 
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

// ANSI Color
const C = {
  R: "\x1b[0m",
  G: "\x1b[32m",
  Y: "\x1b[33m",
  C: "\x1b[36m",
  Red: "\x1b[31m",
};

// Spinner frames
const FRAMES = [
  "⠋",
  "⠙",
  "⠹",
  "⠸",
  "⠼",
  "⠴",
  "⠦",
  "⠧",
  "⠇",
  "⠏"
];

const distDir = path.join(__dirname, "..", "dist");

async function main() {
  if (fs.existsSync(distDir)) {
    console.log(C.Y + "⚠ dist/ already exists. Skipping build." + C.R);
    return;
  }

  let i = 0;
  let spinnerActive = true;

  // spinner interval
  const spinner = setInterval(() => {
    if (!spinnerActive) return;
    process.stdout.write("\r" + C.C + FRAMES[i++ % FRAMES.length] + " Building library..." + C.R);
  }, 70);

  // exec async
  const child = exec("npm run build");

  const pauseSpinner = () => {
    spinnerActive = false;
    process.stdout.write("\r");
  };

  const resumeSpinner = () => {
    spinnerActive = true;
  };
  
  child.stdout.on("data", d => {
    pauseSpinner();
    process.stdout.write(d);
    resumeSpinner();
  });

  child.stderr.on("data", d => {
    pauseSpinner();
    process.stdout.write(d);
    resumeSpinner();
  });

  child.on("close", code => {
    clearInterval(spinner);
    process.stdout.write("\r");

    if (code === 0) {
      console.log(C.G + "✔ Build complete!" + C.R);
      process.exit(0);
    } else {
      console.log(C.Red + "✖ Build failed!" + C.R);
      process.exit(1);
    }
  });
}

main();
