# Portfolio Optimization and SEO Task List

## Goals
- [ ] Achieve initial page load under 3 seconds.
- [ ] Reach Lighthouse Performance score above 90.
- [ ] Reach full technical SEO baseline compliance.

## Phase 1: Asset Optimization
- [x] Convert heavy static images (e.g., `sk-background.png`) to WebP or AVIF.
- [x] Review all image components and ensure responsive delivery with correct `sizes` usage in `ProjectImage.tsx`.
- [ ] Compress background audio (`.mp3`) to lower bitrate (target 128kbps or 96kbps). (Skipped per request)
- [x] Ensure background audio uses `preload="metadata"` and does not fully load before user interaction.
- [x] Audit current large assets affecting LCP and TTI and replace/optimize where needed.

## Phase 1: Font Optimization
- [x] Migrate from `@fontsource/*` to `next/font/google`.
- [x] Configure font subsets and preload strategy via Next.js font utilities.
- [ ] Verify no layout shifts after font migration (CLS check).

## Phase 2: Advanced Splitting and Caching
- [ ] Verify route-level isolation so `/cv` and `/cli` do not bloat the landing page bundle.
- [x] Implement PWA support (choose `next-pwa` or custom service worker).
- [x] Cache static assets (images, fonts, CSS) and app shell through service worker.
- [x] Configure `Cache-Control` headers in `next.config.js` for immutable assets.

## Technical SEO: Core Files
- [x] Create `app/sitemap.ts` for `/`, `/cv`, and `/cli` routes.
- [x] Create `app/robots.ts` with crawler rules and sitemap location.
- [x] Create `app/manifest.ts` with app metadata and icons.
- [x] Confirm generated routes are accessible at `/sitemap.xml`, `/robots.txt`, and `/manifest.webmanifest` (or framework output equivalent).

## Metadata and Structured Data
- [x] Add/verify canonical URLs in metadata.
- [x] Add/verify Open Graph and Twitter Card metadata (including high-quality preview image).
- [x] Expand `JsonLd.tsx` to include `Person` schema.
- [x] Expand `JsonLd.tsx` to include `WebSite` schema.
- [x] Add `BreadcrumbList` schema for route structure.

## Content and Mobile SEO
- [x] Ensure primary keywords appear in key headings (`h1`), meta descriptions, and relevant alt text:
- [x] `Frontend Developer`
- [x] `React Developer`
- [x] `Minimalist Portfolio`
- [x] `COO UNLEFT`
- [x] Validate mobile tap targets are at least 44x44px.

## Testing and Validation
- [ ] Run production checks: `npm run build && npm start`. (`npm run build` completed)
- [ ] Run Lighthouse audits for Performance, SEO, and Accessibility.
- [ ] Record Core Web Vitals: LCP, CLS, and INP.
- [ ] After deployment, verify property in Google Search Console.
- [ ] Submit sitemap in Google Search Console.

## Ongoing Monitoring (Monthly)
- [ ] Track organic impressions.
- [ ] Track click-through rate (CTR).
- [ ] Track Core Web Vitals trend and regressions.
- [ ] Re-run Lighthouse and compare against previous report.
