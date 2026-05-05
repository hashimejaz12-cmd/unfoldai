'use client';

import { useState, useMemo } from 'react';
import { Search, ExternalLink, Filter } from 'lucide-react';

// Import your JSON data
// import aiTools from './ai-tools-flat.json';

interface AITool {
  name: string;
  description: string;
  url: string;
  category: string;
  pricing: string;
  source: string;
}

export default function AIDirectory({ tools }: { tools: AITool[] }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [pricing, setPricing] = useState('All');

  const categories = ['All', ...new Set(tools.map(t => t.category))];
  const pricingOptions = ['All', 'Free', 'Paid', 'Unknown'];

  const filtered = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = 
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || tool.category === category;
      const matchesPricing = pricing === 'All' || tool.pricing === pricing;
      
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [tools, search, category, pricing]);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">AI Tools Directory</h1>
        <p className="text-gray-600">
          Discover {tools.length}+ AI tools to supercharge your workflow
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Pricing Filter */}
        <select
          value={pricing}
          onChange={(e) => setPricing(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {pricingOptions.map(price => (
            <option key={price} value={price}>{price}</option>
          ))}
        </select>
      </div>

      {/* Results Count */}
      <div className="mb-4 text-sm text-gray-600">
        Showing {filtered.length} of {tools.length} tools
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((tool, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-5 hover:shadow-lg transition-shadow bg-white"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-lg">{tool.name}</h3>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {tool.description}
            </p>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                {tool.category}
              </span>
              {tool.pricing !== 'Unknown' && (
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
                  {tool.pricing}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No tools found matching your filters.</p>
          <button
            onClick={() => {
              setSearch('');
              setCategory('All');
              setPricing('All');
            }}
            className="mt-4 text-blue-500 hover:text-blue-700"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
