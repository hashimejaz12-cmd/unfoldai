const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
};

async function scrapeThereIsAnAIForThat() {
  try {
    const { data } = await axios.get('https://theresanaiforthat.com/', { headers });
    const $ = cheerio.load(data);
    const tools = [];
    
    // Adjust selectors based on actual HTML structure
    $('.tool-card, .ai-tool, article').each((i, el) => {
      const $el = $(el);
      const name = $el.find('h2, h3, .title, .tool-name').first().text().trim();
      const desc = $el.find('p, .description, .tool-description').first().text().trim();
      const link = $el.find('a').first().attr('href');
      
      if (name && desc) {
        tools.push({ name, description: desc, url: link, source: 'theresanaiforthat' });
      }
    });
    
    console.log(`TheresAnAIForThat: ${tools.length} tools`);
    return tools;
  } catch (err) {
    console.log(`TAIAIFT error: ${err.message}`);
    return [];
  }
}

async function scrapeFuturepedia() {
  try {
    const { data } = await axios.get('https://www.futurepedia.io/', { headers });
    const $ = cheerio.load(data);
    const tools = [];
    
    $('article, .tool-item, .tool-card').each((i, el) => {
      const $el = $(el);
      const name = $el.find('h2, h3, .name').first().text().trim();
      const desc = $el.find('p, .description').first().text().trim();
      const link = $el.find('a').first().attr('href');
      
      if (name) {
        tools.push({ name, description: desc, url: link, source: 'futurepedia' });
      }
    });
    
    console.log(`Futurepedia: ${tools.length} tools`);
    return tools;
  } catch (err) {
    console.log(`Futurepedia error: ${err.message}`);
    return [];
  }
}

async function main() {
  const allTools = [
    ...await scrapeThereIsAnAIForThat(),
    ...await scrapeFuturepedia()
  ];
  
  fs.writeFileSync('ai-tools.json', JSON.stringify(allTools, null, 2));
  console.log(`\nTotal: ${allTools.length} tools saved to ai-tools.json`);
}

main();
