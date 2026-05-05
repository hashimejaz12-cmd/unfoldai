const axios = require('axios');
const fs = require('fs');

// GitHub repos with curated AI tool lists
const sources = [
  'https://raw.githubusercontent.com/mahseema/awesome-ai-tools/main/README.md',
  'https://raw.githubusercontent.com/e2b-dev/awesome-ai-agents/main/README.md'
];

async function fetchMarkdownLists() {
  const tools = [];
  
  for (const url of sources) {
    try {
      const { data } = await axios.get(url);
      console.log(`Fetched ${url.split('/').slice(-2).join('/')}`);
      
      // Parse markdown links: [Name](url) - Description
      const matches = data.matchAll(/\[([^\]]+)\]\(([^)]+)\)\s*[-–—]\s*([^\n]+)/g);
      for (const match of matches) {
        tools.push({
          name: match[1].trim(),
          url: match[2].trim(),
          description: match[3].trim(),
          source: url.split('/')[4]
        });
      }
    } catch (err) {
      console.log(`Failed ${url}: ${err.message}`);
    }
  }
  
  fs.writeFileSync('ai-tools.json', JSON.stringify(tools, null, 2));
  console.log(`\nExtracted ${tools.length} tools`);
}

fetchMarkdownLists();
