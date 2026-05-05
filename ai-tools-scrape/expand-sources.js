const axios = require('axios');
const fs = require('fs');

const sources = [
  'https://raw.githubusercontent.com/mahseema/awesome-ai-tools/main/README.md',
  'https://raw.githubusercontent.com/e2b-dev/awesome-ai-agents/main/README.md',
  'https://raw.githubusercontent.com/steven2358/awesome-generative-ai/main/README.md',
  'https://raw.githubusercontent.com/humanloop/awesome-chatgpt/main/README.md'
];

async function fetchAll() {
  const tools = [];
  const seen = new Set();
  
  for (const url of sources) {
    try {
      const { data } = await axios.get(url);
      const repo = url.split('/')[4];
      console.log(`Fetching ${repo}...`);
      
      // Parse markdown links with optional description
      const patterns = [
        /\[([^\]]+)\]\(([^)]+)\)\s*[-–—]\s*([^\n]+)/g,
        /\*\*\[([^\]]+)\]\(([^)]+)\)\*\*\s*[-–—]?\s*([^\n]*)/g,
        /\[([^\]]+)\]\(([^)]+)\)(?!\s*[-–—])/g
      ];
      
      for (const pattern of patterns) {
        const matches = data.matchAll(pattern);
        for (const match of matches) {
          const name = match[1].trim();
          const url = match[2].trim();
          const desc = match[3] ? match[3].trim() : '';
          
          // Skip if already seen or not a real URL
          if (!url.startsWith('http') || seen.has(url)) continue;
          
          seen.add(url);
          tools.push({
            name,
            url,
            description: desc || `AI tool from ${repo}`,
            source: repo
          });
        }
      }
    } catch (err) {
      console.log(`Failed ${url.split('/')[4]}: ${err.message}`);
    }
  }
  
  // Dedupe by URL
  const unique = Array.from(new Map(tools.map(t => [t.url, t])).values());
  
  fs.writeFileSync('ai-tools.json', JSON.stringify(unique, null, 2));
  console.log(`\nTotal: ${unique.length} unique tools saved`);
}

fetchAll();
