# AI Tools Directory - UnfoldAI

Scraped **1,524 unique AI tools** from GitHub awesome lists.

## Files

- `ai-tools-flat.json` - All tools with categories (1524 items)
- `ai-tools-categorized.json` - Grouped by category
- `ai-tools.csv` - CSV export for databases
- `AIDirectoryComponent.tsx` - Ready-to-use Next.js React component

## Categories

| Category | Count |
|----------|-------|
| Other | 621 |
| Image & Design | 319 |
| Code & Development | 285 |
| Writing & Content | 90 |
| Chat & Assistant | 87 |
| Audio & Music | 38 |
| Research & Data | 37 |
| Productivity | 32 |
| Video | 6 |
| Education | 6 |
| Business | 3 |

## Integration

### Option 1: Static JSON (fast, simple)

1. Copy `ai-tools-flat.json` to `/unfoldai/src/data/`
2. Create `/unfoldai/src/app/directory/page.tsx`:

```tsx
import AIDirectory from '@/components/AIDirectoryComponent';
import aiTools from '@/data/ai-tools-flat.json';

export default function DirectoryPage() {
  return <AIDirectory tools={aiTools} />;
}
```

### Option 2: Database (scalable, allows user submissions)

Import `ai-tools.csv` into Supabase/PostgreSQL:

```sql
CREATE TABLE ai_tools (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  url TEXT NOT NULL,
  category TEXT,
  pricing TEXT,
  source TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Then import CSV via Supabase dashboard or COPY command
```

## SEO Tips

- Add individual tool pages: `/directory/[slug]` for each tool
- Generate sitemap with all 1524+ URLs
- Category pages: `/directory/category/[name]`
- Add schema.org markup for SoftwareApplication
- Target long-tail keywords: "best AI tools for [category]"

## Next Steps

1. **Enhance descriptions** - Many are short, consider using AI to expand them
2. **Add logos** - Scrape favicons or use a service like Clearbit
3. **Upvoting/Reviews** - Let users rate tools
4. **Submit tool form** - Allow community submissions
5. **Affiliate links** - Monetize with referral tracking
