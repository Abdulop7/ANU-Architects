const fs = require('fs');
const path = require('path');

const articlesPath = path.join(__dirname, 'articles.json');
const articlesData = JSON.parse(fs.readFileSync(articlesPath, 'utf8'));

const newImages = [
  "/journal-img/brutalist_interior.png",
  "/journal-img/dark_facade.png",
  "/journal-img/biophilic_design.png",
  "/journal-img/luxury_living.png"
];

const keywordsToLinks = {
  "Multan": "<a href='/projects'>Multan</a>",
  "brutalist": "<a href='/services'>brutalist</a>",
  "sustainable": "<a href='/services'>sustainable</a>",
  "interior design": "<a href='/services'>interior design</a>",
  "modern house": "<a href='/projects'>modern house</a>",
  "architecture": "<a href='/services'>architecture</a>",
};

function enrichContent(html) {
  let enriched = html;
  for (const [key, link] of Object.entries(keywordsToLinks)) {
    // Only match if it is not already in an a tag
    const regex = new RegExp(`\\b${key}\\b(?![^<]*>|[^<]*<\\/a>)`, 'i');
    enriched = enriched.replace(regex, link);
  }
  return enriched;
}

articlesData.forEach(article => {
  article.content = enrichContent(article.content);
  const shuffledImages = [...newImages].sort(() => 0.5 - Math.random());
  article.images = [shuffledImages[0], shuffledImages[1], shuffledImages[2]];
});

fs.writeFileSync(articlesPath, JSON.stringify(articlesData, null, 2), 'utf8');
console.log("Updated all articles with peak information, images, and links.");
