const fs = require('fs');
const path = require('path');

const TARGET_DIR = path.join(__dirname, '..', 'public', 'projects');

const renameMap = {
  // Obsidian -> Ananta
  'obsidian.webp': 'ananta.webp',
  'obsidian-blueprint.webp': 'ananta-blueprint.webp',
  'obsidian-progress-1.webp': 'ananta-progress-1.webp',
  'obsidian-progress-2.webp': 'ananta-progress-2.webp',
  'obsidian-progress-3.webp': 'ananta-progress-3.webp',

  // Helix -> Meridian
  'helix.webp': 'meridian.webp',
  'helix-blueprint.webp': 'meridian-blueprint.webp',
  'helix-progress-1.webp': 'meridian-progress-1.webp',
  'helix-progress-2.webp': 'meridian-progress-2.webp',
  'helix-progress-3.webp': 'meridian-progress-3.webp',

  // Nexus -> Southern Industrial
  'nexus.webp': 'southern-industrial.webp',
  'nexus-blueprint.webp': 'southern-industrial-blueprint.webp',
  'nexus-progress-1.webp': 'southern-industrial-progress-1.webp',
  'nexus-progress-2.webp': 'southern-industrial-progress-2.webp',
  'nexus-progress-3.webp': 'southern-industrial-progress-3.webp',

  // Vanguard -> Coimbatore Smart
  'vanguard.webp': 'coimbatore-smart.webp',
  'vanguard-blueprint.webp': 'coimbatore-smart-blueprint.webp',
  'vanguard-progress-1.webp': 'coimbatore-smart-progress-1.webp',
  'vanguard-progress-2.webp': 'coimbatore-smart-progress-2.webp',
  'vanguard-progress-3.webp': 'coimbatore-smart-progress-3.webp'
};

function main() {
  console.log('Renaming project files in public/projects...');
  
  for (const [oldName, newName] of Object.entries(renameMap)) {
    const oldPath = path.join(TARGET_DIR, oldName);
    const newPath = path.join(TARGET_DIR, newName);
    
    if (fs.existsSync(oldPath)) {
      console.log(`Renaming: ${oldName} -> ${newName}`);
      fs.renameSync(oldPath, newPath);
    } else {
      console.log(`Notice: Source file ${oldName} does not exist or has already been renamed.`);
    }
  }
  
  console.log('Renaming process completed!');
}

main();
