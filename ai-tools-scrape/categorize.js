const fs = require('fs');

const tools = JSON.parse(fs.readFileSync('ai-tools.json'));

// Category keywords
const categories = {
  'Writing & Content': ['write', 'content', 'copy', 'blog', 'article', 'seo', 'marketing'],
  'Code & Development': ['code', 'dev', 'program', 'api', 'github', 'debug', 'deploy'],
  'Image & Design': ['image', 'design', 'graphic', 'photo', 'art', 'logo', 'video'],
  'Productivity': ['productivity', 'workflow', 'automation', 'note', 'task', 'organize'],
  'Audio & Music': ['audio', 'music', 'voice', 'sound', 'podcast', 'transcribe'],
  'Video': ['video', 'movie', 'film', 'animation', 'edit'],
  'Chat & Assistant': ['chat', 'assistant', 'bot', 'conversation', 'support'],
  'Research & Data': ['research', 'data', 'analysis', 'search', 'knowledge'],
  'Business': ['business', 'sales', 'crm', 'analytics', 'customer'],
  'Education': ['learn', 'education', 'teach', 'tutor', 'course'],
  'Other': []
};

function categorize(tool) {
  const text = `${tool.name} ${tool.description}`.toLowerCase();
  
  for (const [category, keywords] of Object.entries(categories)) {
    if (category === 'Other') continue;
    if (keywords.some(kw => text.includes(kw))) {
      return category;
    }
  }
  return 'Other';
}

// Add categories and pricing hints
const enhanced = tools.map(tool => ({
  ...tool,
  category: categorize(tool),
  pricing: tool.description.toLowerCase().includes('free') ? 'Free' : 
           tool.description.toLowerCase().includes('paid') ? 'Paid' : 'Unknown'
}));

// Group by category
const grouped = enhanced.reduce((acc, tool) => {
  acc[tool.category] = acc[tool.category] || [];
  acc[tool.category].push(tool);
  return acc;
}, {});

fs.writeFileSync('ai-tools-categorized.json', JSON.stringify(grouped, null, 2));
fs.writeFileSync('ai-tools-flat.json', JSON.stringify(enhanced, null, 2));

console.log('\nTools by category:');
Object.entries(grouped)
  .sort((a, b) => b[1].length - a[1].length)
  .forEach(([cat, tools]) => {
    console.log(`${cat}: ${tools.length}`);
  });

console.log(`\nTotal: ${enhanced.length} tools`);
