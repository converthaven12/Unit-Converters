// scripts/generateKeywordMap.js

const fs = require('fs');
const path = require('path');

// 1. Adjust these to your folder:
const BASE_DIR = path.resolve(__dirname, '../src/app/(screens)/Converters');
const OUT_FILE = path.resolve(__dirname, '../src/data/keywordMap.json');

// 2. Utility: turn "KilogramToGram" into "Kilogram to Gram"
function humanize(str) {
  return str
    // insert space before capitals
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // fix common abbreviations
    .replace(/Kg\b/, 'kg')
    .replace(/Mm\b/, 'mm')
    .trim();
}

// 3. Recursively walk and collect any folder containing page.tsx
function walk(dir, collector) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((d) => {
    const full = path.join(dir, d.name);
    if (d.isDirectory()) {
      walk(full, collector);
    } else if (d.isFile() && d.name === 'page.tsx') {
      // derive the route from the folder structure
      const relative = path.relative(BASE_DIR, dir).split(path.sep).join('/');
      const route = `/Converters/${relative}`;
      const titleBase = humanize(relative.split('/').pop());
      collector[route] = {
        title: `${titleBase} Converter — Free & Instant`,
        description: `Convert ${titleBase.toLowerCase()} quickly and accurately with our free online converter.`,
      };
    }
  });
}

const entries = {};
walk(BASE_DIR, entries);

// 4. Also add any non-converter top‑level pages if you want:
// entries['/Home'] = {
//   title: 'Home — Unit Converters by ConvertHaven',
//   description: 'Browse our complete suite of free unit converters.',
// };

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(entries, null, 2));
console.log(`✔️ keywordMap.json generated with ${Object.keys(entries).length} entries`);
