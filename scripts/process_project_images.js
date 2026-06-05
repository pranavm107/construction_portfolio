const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_DIR = 'C:\\Users\\prana\\.gemini\\antigravity-ide\\brain\\2c576210-ac46-448d-9d7d-54c79a8486c3';
const TARGET_DIR = path.join(__dirname, '..', 'public', 'projects');

// Ensure target directory exists
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

const filesToProcess = [
  {
    prefix: 'obsidian_pavilion',
    target: 'obsidian.webp'
  },
  {
    prefix: 'helix_tower',
    target: 'helix.webp'
  },
  {
    prefix: 'nexus_logistics',
    target: 'nexus.webp'
  },
  {
    prefix: 'vanguard_viaduct',
    target: 'vanguard.webp'
  }
];

async function main() {
  console.log('Processing generated project images...');
  
  // Read all files in the source directory
  const files = fs.readdirSync(SOURCE_DIR);
  
  for (const item of filesToProcess) {
    // Find the latest file matching the prefix
    const matchingFile = files
      .filter(f => f.startsWith(item.prefix) && f.endsWith('.png'))
      .sort()
      .pop();
      
    if (matchingFile) {
      const srcPath = path.join(SOURCE_DIR, matchingFile);
      const destPath = path.join(TARGET_DIR, item.target);
      
      console.log(`Processing: ${matchingFile} -> ${item.target}`);
      
      await sharp(srcPath)
        .webp({ quality: 85 })
        .toFile(destPath);
        
      console.log(`Saved: ${destPath}`);
    } else {
      console.error(`Error: Could not find generated image for ${item.prefix}`);
    }
  }
  
  console.log('Finished converting all project images successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
