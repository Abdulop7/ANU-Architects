const fs = require('fs');

let data = fs.readFileSync('g:/Practice JS/New Web/articles.json', 'utf8');
let lines = data.split('\n');
let fixed = 0;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let prefixMatch = line.match(/^(\s*"content"\s*:\s*")(.*)$/);
    if (prefixMatch) {
        let prefix = prefixMatch[1];
        let rest = prefixMatch[2];
        
        let suffixMatch = rest.match(/("\s*,?\s*\r?)$/);
        if (suffixMatch) {
            let suffix = suffixMatch[1];
            let content = rest.substring(0, rest.length - suffix.length);
            
            let originalContent = content;
            let fixedContent = content.replace(/(?<!\\)"/g, '\\"');
            
            if (originalContent !== fixedContent) {
                lines[i] = prefix + fixedContent + suffix;
                fixed++;
            }
        }
    }
}

fs.writeFileSync('g:/Practice JS/New Web/articles.json', lines.join('\n'));
console.log(`Quotes fixed robustly in ${fixed} lines!`);
