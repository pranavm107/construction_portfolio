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
    target: 'ananta.webp'
  },
  {
    prefix: 'helix_tower',
    target: 'meridian.webp'
  },
  {
    prefix: 'nexus_logistics',
    target: 'southern-industrial.webp'
  },
  {
    prefix: 'vanguard_viaduct',
    target: 'coimbatore-smart.webp'
  },
  // Blueprints
  {
    prefix: 'obsidian_blueprint',
    target: 'ananta-blueprint.webp'
  },
  {
    prefix: 'helix_blueprint',
    target: 'meridian-blueprint.webp'
  },
  {
    prefix: 'nexus_blueprint',
    target: 'southern-industrial-blueprint.webp'
  },
  {
    prefix: 'vanguard_blueprint',
    target: 'coimbatore-smart-blueprint.webp'
  },
  // Progress Images
  {
    prefix: 'obsidian_progress',
    target: 'ananta-progress-1.webp',
    extraTargets: ['ananta-progress-2.webp', 'ananta-progress-3.webp']
  },
  {
    prefix: 'helix_progress',
    target: 'meridian-progress-1.webp',
    extraTargets: ['meridian-progress-2.webp', 'meridian-progress-3.webp']
  },
  {
    prefix: 'nexus_progress',
    target: 'southern-industrial-progress-1.webp',
    extraTargets: ['southern-industrial-progress-2.webp', 'southern-industrial-progress-3.webp']
  },
  {
    prefix: 'vanguard_progress',
    target: 'coimbatore-smart-progress-1.webp',
    extraTargets: ['coimbatore-smart-progress-2.webp', 'coimbatore-smart-progress-3.webp']
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

      if (item.extraTargets) {
        for (const extra of item.extraTargets) {
          const extraDestPath = path.join(TARGET_DIR, extra);
          console.log(`Copying: ${item.target} -> ${extra}`);
          fs.copyFileSync(destPath, extraDestPath);
        }
      }
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
