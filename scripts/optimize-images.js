import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public/images';

async function optimizeImage(inputPath, outputPath) {
  try {
    const info = await sharp(inputPath)
      .rotate() // Auto-rotate based on EXIF orientation
      .resize(1920, 1080, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .jpeg({ 
        quality: 85,
        progressive: true 
      })
      .toFile(outputPath);
    
    const inputSize = fs.statSync(inputPath).size;
    const outputSize = info.size;
    const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
    
    console.log(`Optimized ${path.basename(inputPath)}: ${(inputSize/1024/1024).toFixed(1)}MB -> ${(outputSize/1024/1024).toFixed(1)}MB (${savings}% reduction)`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
  }
}

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist, skipping optimization.`);
    return;
  }

  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const tempPath = filePath + '.temp';
      await optimizeImage(filePath, tempPath);
      
      // Replace original with optimized version
      if (fs.existsSync(tempPath)) {
        fs.renameSync(tempPath, filePath);
      }
    }
  }
}

console.log('Starting image optimization...');
processDirectory(inputDir)
  .then(() => {
    console.log('Image optimization complete!');
  })
  .catch((error) => {
    console.error('Error during optimization:', error);
  });