const fs = require('fs');

let data = fs.readFileSync('g:/Practice JS/New Web/articles.json', 'utf8');
let lines = data.split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('"content": "')) {
        let match = lines[i].match(/^(\s*"content"\s*:\s*")(.*)("\s*\r?)$/);
        if (match) {
            let content = match[2];
            // Escape any double quotes that are not already escaped
            content = content.replace(/(?<!\\)"/g, '\\"');
            lines[i] = match[1] + content + match[3];
        }
    }
}

fs.writeFileSync('g:/Practice JS/New Web/articles.json', lines.join('\n'));
console.log("Fixed quotes in articles.json!");
