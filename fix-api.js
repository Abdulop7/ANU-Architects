const fs = require('fs');
const path = require('path');

function getFiles(dir, filesList = []) {
    if (!fs.existsSync(dir)) return filesList;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getFiles(fullPath, filesList);
        } else {
            if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
                filesList.push(fullPath);
            }
        }
    }
    return filesList;
}

const libFiles = getFiles(path.join(process.cwd(), 'lib'));
const apiFiles = getFiles(path.join(process.cwd(), 'app', '(public)', 'api'));
const dashboardApiFiles = getFiles(path.join(process.cwd(), 'app', '(dashboard)', 'api'));

const allFiles = [...libFiles, ...apiFiles, ...dashboardApiFiles];

let filesToUpdate = [];

allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let replaced = false;

    // Fix imports that go up using relative paths like ../../../lib/prisma
    // to @/lib/prisma or similar
    const newContent = content.replace(/from\s+['"]((?:\.\.\/)+)(lib|utils|hooks|prisma)([^'"]*)['"]/g, (match, prefix, baseName, suffix) => {
        replaced = true;
        return `from "@/${baseName}${suffix}"`;
    });
    
    // Also, some files might use require('../../../lib/prisma')
    const newContentReq = newContent.replace(/require\(['"]((?:\.\.\/)+)(lib|utils|hooks|prisma)([^'"]*)['"]\)/g, (match, prefix, baseName, suffix) => {
        replaced = true;
        return `require("@/${baseName}${suffix}")`;
    });

    if (replaced) {
        filesToUpdate.push(file);
        fs.writeFileSync(file, newContentReq, 'utf8');
    }
});

console.log("Updated files:", filesToUpdate);
