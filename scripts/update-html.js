const fs = require('fs');
const path = require('path');

// Read the public directory
const publicDir = path.join(__dirname, '../public');
const files = fs.readdirSync(publicDir);

// Find the bundle file
const bundleFile = files.find(file => file.startsWith('bundle.') && file.endsWith('.js'));

if (!bundleFile) {
  console.error('No bundle file found!');
  process.exit(1);
}

// Read the HTML file
let html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

// Replace the bundle.js reference with the new filename
html = html.replace(
  /<script src="\/bundle\.js"/,
  `<script src="/${bundleFile}"`
);

// Write the updated HTML file to the public directory
fs.writeFileSync(path.join(publicDir, 'index.html'), html); 