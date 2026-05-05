// Quick scraper for AI tool directories
// We'll use axios + cheerio since most sites are SSR or have APIs

const axios = require('axios');
const fs = require('fs');

const sources = [
  'https://theresanaiforthat.com/api/tools',
  'https://www.futurepedia.io/api/tools'
];

async function scrape() {
  const tools = [];
  
  // Try direct API endpoints first
  for (const url of sources) {
    try {
      const response = await axios.get(url);
      console.log(`Fetched ${url}: ${response.status}`);
      if (response.data) {
        tools.push({ source: url, data: response.data });
      }
    } catch (err) {
      console.log(`Failed ${url}: ${err.message}`);
    }
  }
  
  fs.writeFileSync('raw-data.json', JSON.stringify(tools, null, 2));
  console.log(`Saved ${tools.length} responses`);
}

scrape();
