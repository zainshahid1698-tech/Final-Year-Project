const fs = require('fs');
const path = require('path');

const distIndex = path.resolve(__dirname, '..', 'dist', 'index.html');
const dist404 = path.resolve(__dirname, '..', 'dist', '404.html');

try {
  if (fs.existsSync(distIndex)) {
    fs.copyFileSync(distIndex, dist404);
    console.log('Created dist/404.html');
  } else {
    console.error('dist/index.html not found — run the build first');
    process.exit(1);
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}
