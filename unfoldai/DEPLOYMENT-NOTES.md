# Deployment Notes — AICalc.tools

## Build Status ✅

```
npm run build — SUCCESS
```

**Static Pages Generated:**
- `/` — Homepage (91.3 kB)
- `/directory` — AI Tools Directory (98.7 kB, 1,524 tools)
- `/tools/token-calculator` — Token Calculator (101 kB)
- `/sitemap.xml` — Auto-generated
- `/robots.txt` — Auto-generated

**API Routes:**
- `/api/chat` — Dynamic
- `/api/leads` — Dynamic

## Changes Made

### 1. Directory Integration
- Added `/src/data/ai-tools-flat.json` (1,524 tools)
- Created `/src/components/AIDirectory.tsx`
- Created `/src/app/directory/page.tsx`
- Full search + filter functionality

### 2. SEO Optimizations
- Updated `/src/app/layout.tsx` with:
  - New metadata (AICalc.tools branding)
  - JSON-LD structured data
  - Canonical URLs
  - Open Graph + Twitter cards
- Created `/src/app/sitemap.ts`
- Created `/src/app/robots.ts`
- Added `/src/app/tools/token-calculator/layout.tsx` for SEO metadata

### 3. Navigation
- Created `/src/components/Navbar.tsx`
- Added to directory page
- Added to token calculator page

### 4. Dependencies
- Installed `lucide-react` (for icons)

## Vercel Deployment

### Environment Variables (if any)
Check `.env.local` for:
- API keys
- Database URLs
- External service credentials

### Vercel Settings
- **Framework**: Next.js
- **Root Directory**: `.` (root, not `/unfoldai`)
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (auto)
- **Node Version**: 18.x or higher

### Deployment Steps

1. **Push to GitHub:**
   ```bash
   cd /data/.openclaw/workspace/unfoldai
   git add .
   git commit -m "Add AI directory + SEO optimizations"
   git push origin main
   ```

2. **Vercel Auto-Deploy:**
   - Should trigger automatically on push
   - Watch build logs in Vercel dashboard

3. **Manual Deploy (if needed):**
   - Vercel Dashboard → Project → Deploy
   - Or: `vercel --prod` (Vercel CLI)

### Post-Deployment Checklist

- [ ] Visit https://aicalc.tools and verify homepage loads
- [ ] Visit `/directory` and test search/filters
- [ ] Visit `/tools/token-calculator` and test all 3 tabs
- [ ] Check `/sitemap.xml` renders
- [ ] Check `/robots.txt` renders
- [ ] Test navbar links on all pages
- [ ] Mobile responsiveness check
- [ ] Run Lighthouse audit (target 90+)
- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph preview (opengraph.xyz)
- [ ] Verify structured data (Google Rich Results Test)

## SEO Setup

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `aicalc.tools`
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://aicalc.tools/sitemap.xml`

### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add site: `aicalc.tools`
3. Verify ownership
4. Submit sitemap

### Analytics
- Vercel Analytics: Already integrated via `<Analytics />`
- Google Analytics: Add if needed

## Known Issues

None — build successful, all tests passing.

## Next Steps (Optional)

1. **Individual Tool Pages** (High Impact)
   - Create `/directory/[slug]/page.tsx`
   - 1,500+ indexed pages
   - Massive SEO boost

2. **Category Pages**
   - Create `/directory/category/[category]/page.tsx`
   - 11 additional pages

3. **Blog Section**
   - Create `/blog` with SEO-optimized content
   - Target long-tail keywords

4. **Tool Submissions**
   - Add "Submit Your Tool" form
   - User-generated content + backlinks

5. **Newsletter**
   - Collect emails for updates
   - Build audience

6. **Comparison Pages**
   - `/compare/gpt-4-vs-claude`
   - Target comparison keywords

## Performance

**Current Bundle Sizes:**
- Shared JS: 87.3 kB
- Homepage: 91.3 kB First Load
- Directory: 98.7 kB First Load (includes 1,524 tools)
- Calculator: 101 kB First Load

**Optimization Opportunities:**
- Code splitting (dynamic imports for tabs)
- Image optimization (when adding tool logos)
- Lazy load directory on scroll
- Service worker / PWA

## Support

For issues or questions:
- Check build logs in Vercel dashboard
- Review SEO-GUIDE.md for strategy
- Test locally: `npm run dev`
