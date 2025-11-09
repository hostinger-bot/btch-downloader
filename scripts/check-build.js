const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, '..', 'dist')

if (fs.existsSync(distDir)) {
  console.log('dist/ already exists, skipping build')
  process.exit(0)
}

console.log('Building library...')
require('child_process').execSync('npm run build', { stdio: 'inherit' })