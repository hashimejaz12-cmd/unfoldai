const fs = require('fs');

const tools = JSON.parse(fs.readFileSync('ai-tools-flat.json'));

// CSV header
let csv = 'Name,Description,URL,Category,Pricing,Source\n';

tools.forEach(tool => {
  const escape = (str) => `"${(str || '').replace(/"/g, '""')}"`;
  csv += [
    escape(tool.name),
    escape(tool.description),
    escape(tool.url),
    escape(tool.category),
    escape(tool.pricing),
    escape(tool.source)
  ].join(',') + '\n';
});

fs.writeFileSync('ai-tools.csv', csv);
console.log('Exported to ai-tools.csv');
