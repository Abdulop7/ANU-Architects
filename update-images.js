const fs = require('fs');
const path = require('path');

const files = [
    'app/projects/[slug]/page.js',
    'app/journal/[slug]/page.js',
    'app/about/page.js',
    'components/searchBar.jsx',
    'components/projectModal.jsx',
    'components/projectCard.jsx',
    'components/Navbar.js',
    'components/journal-client.jsx',
    'components/Footer.js',
    'components/BentoHero.js'
];

files.forEach(filePaths => {
    const fullPath = path.join(process.cwd(), filePaths);
    if (!fs.existsSync(fullPath)) {
        console.log("Missing:", fullPath);
        return;
    }
    let content = fs.readFileSync(fullPath, 'utf8');

    // Add import if it has <img and no Image import
    if (content.includes('<img') && !content.includes('import Image from')) {
        // Find the first import and add it after, or at top
        const lastImportIndex = content.lastIndexOf('import ');
        if (lastImportIndex !== -1) {
            const endOfImport = content.indexOf('\n', lastImportIndex);
            content = content.slice(0, endOfImport + 1) + "import Image from 'next/image';\n" + content.slice(endOfImport + 1);
        } else {
            content = "import Image from 'next/image';\n" + content;
        }
    }

    // Process Navbar/Footer with width/height explicitly, others with fill
    let regex = /<img\s([^>]*?)src=(['"])(.*?)\2([^>]*?)\/?>/g;
    
    let newContent = content.replace(regex, (match, before, quote, src, after) => {
        if (filePaths.includes('Navbar.js') || filePaths.includes('Footer.js')) {
            // Logos
            return `<Image ${before}src=${quote}${src}${quote} width={200} height={100} ${after}/>`;
        }
        // General UI images
        return `<Image ${before}src=${quote}${src}${quote} fill sizes="(max-width: 768px) 100vw, 50vw" ${after}/>`;
    });

    if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log("Updated:", fullPath);
    }
});
