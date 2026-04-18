const fs = require('fs');
const path = require('path');

const browserDir = path.join(__dirname, 'docs', 'browser');
const docsDir = path.join(__dirname, 'docs');

if (fs.existsSync(browserDir)) {
  // Leer todos los archivos de docs/browser/
  const files = fs.readdirSync(browserDir);
  
  // Mover cada archivo a docs/
  files.forEach(file => {
    const sourcePath = path.join(browserDir, file);
    const targetPath = path.join(docsDir, file);
    
    // Si el archivo ya existe en docs, eliminarlo
    if (fs.existsSync(targetPath)) {
      fs.unlinkSync(targetPath);
    }
    
    // Mover el archivo
    fs.renameSync(sourcePath, targetPath);
  });
  
  // Eliminar la carpeta browser vacía
  fs.rmdirSync(browserDir);
  
  console.log('✓ Archivos movidos de docs/browser/ a docs/');
} else {
  console.log('⚠ No se encontró la carpeta docs/browser/');
}

// Copiar index.html como 404.html para GitHub Pages routing
const indexPath = path.join(docsDir, 'index.html');
const notFoundPath = path.join(docsDir, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✓ Archivo 404.html creado para GitHub Pages routing');
}
