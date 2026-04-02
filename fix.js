const fs = require('fs');
const path = require('path');

function getFiles(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const title = path.join(dir, file);
        if (fs.statSync(title).isDirectory()) {
            getFiles(title, filesList);
        } else {
            if (title.endsWith('.js') || title.endsWith('.jsx')) {
                filesList.push(title);
            }
        }
    }
    return filesList;
}

const allFiles = getFiles(path.join(process.cwd(), 'app'));

allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let replaced = false;

    // Specifically target things going out to root via relative paths
    // e.g. from "../../components/..."
    const newContent = content.replace(/from\s+['"](?:\.\.\/)+(components|lib|utils|hooks|projects\.json|articles\.json|prompts\.json)([^'"]*)['"]/g, (match, baseName, suffix) => {
        replaced = true;
        return `from "@/${baseName}${suffix}"`;
    });

    if (replaced) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Fixed:', file);
    }
});
