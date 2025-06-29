// scripts/generateRelatedMap.js
const km = require('../src/data/keywordMap.json');
const out = Object.fromEntries(Object.keys(km).map(k => [k, []]));
require('fs').writeFileSync('src/data/relatedMap.json', JSON.stringify(out, null, 2));
console.log('relatedMap.json created');
