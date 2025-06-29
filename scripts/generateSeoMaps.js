// scripts/generateSeoMaps.js
const fs = require('fs');
const path = require('path');

// Paths
const DATA_DIR = path.resolve(__dirname, '../src/data');
const KEYWORD_MAP = path.join(DATA_DIR, 'keywordMap.json');
const RELATED_OUT = path.join(DATA_DIR, 'relatedMap.json');
const FAQ_OUT     = path.join(DATA_DIR, 'faqMap.json');

// Load your keywordMap
const keywordMap = JSON.parse(fs.readFileSync(KEYWORD_MAP, 'utf-8'));
const routes = Object.keys(keywordMap);

// Group routes by category (second segment after "/Converters")
const groups = {};
routes.forEach((route) => {
  const parts = route.split('/');
  const category = parts[2] || '_root';
  groups[category] = groups[category] || [];
  groups[category].push(route);
});

// Build relatedMap: siblings in same category
const relatedMap = {};
routes.forEach(route => {
  const parts = route.split('/');
  const category = parts[2] || '_root';
  relatedMap[route] = groups[category].filter(r => r !== route);
});

// Build faqMap: generic Q&A based on converter name
const faqMap = {};
routes.forEach(route => {
  const parts = route.split('/');
  const converter = parts[parts.length - 1];  // e.g. "AcresToHectare"

  const [fromRaw, toRaw] = converter.split('To');

  // Skip invalid names that don't contain "To"
  if (!fromRaw || !toRaw) {
    console.warn(`⚠️ Skipping invalid converter name: "${converter}" from route "${route}"`);
    return;
  }

  const from = fromRaw.replace(/([A-Z])/g, ' $1').trim();
  const to = toRaw.replace(/([A-Z])/g, ' $1').trim();

  faqMap[route] = [
    {
      "@type": "Question",
      "name": `How do I convert ${from} to ${to}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Enter a value in ${from.toLowerCase()} and this converter will output the equivalent in ${to.toLowerCase()}.`
      }
    },
    {
      "@type": "Question",
      "name": `What is the formula for ${from} to ${to}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `The formula is: ${to} = ${from} × conversion factor. Use our converter to handle the math automatically.`
      }
    }
  ];
});

// Ensure data directory exists
fs.mkdirSync(DATA_DIR, { recursive: true });

// Write out the files
fs.writeFileSync(RELATED_OUT, JSON.stringify(relatedMap, null, 2));
fs.writeFileSync(FAQ_OUT,     JSON.stringify(faqMap,     null, 2));

console.log(`✅ Generated ${Object.keys(relatedMap).length} entries in relatedMap.json and ${Object.keys(faqMap).length} in faqMap.json`);
