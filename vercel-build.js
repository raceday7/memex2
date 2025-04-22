const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create necessary directories
const dirs = ['/tmp', '/tmp/ssr'];
dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Install dependencies and build
try {
    console.log('Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
    
    console.log('Building assets...');
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('Build completed successfully!');
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
} 