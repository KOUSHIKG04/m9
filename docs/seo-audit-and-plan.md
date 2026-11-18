# MOTIVE 9 SEO audit and implementation notes

Audit date: 10 November 2026

## Business and site facts checked

- Brand: MOTIVE 9, an independent freelance creative agency. The homepage, current service copy, contact flow, and project/journal data were reviewed.
- Actual service groups: web and app development; UI/UX design; creative design and campaigns; AI and workflow automation; consulting and ongoing support.
- Audience: prospective clients evaluating creative, web, app, and automation help. No specific industry or geographic market is confirmed in the project facts.
- Contact routes: `motive9media@gmail.com`, the existing Cal.com booking URL, and the existing Formspree form endpoint.
- Social profiles confirmed by the owner: Instagram, Facebook, and LinkedIn. The X/Twitter profile is still pending.
- Portfolio entries are self-initiated concepts, not commissioned client case studies. The illustrated automation flow is an example, not a live client integration.
- No verified office address, phone number, service area, business hours, awards, or genuine testimonial source is recorded.

## Initial audit findings

1. The root page had a generic title and a broad description; there were no canonical URLs or site-wide crawler directives.
2. The site had no generated `robots.txt` or XML sitemap.
3. Only work and journal detail routes existed. The five real service groups were collapsed into the homepage accordion, leaving no dedicated search landing pages.
4. Dynamic project and journal routes had short metadata, but not a full canonical/social metadata set. Unknown slugs rely on the app 404.
5. The site facts do not establish a real location or public office. LocalBusiness/ProfessionalService address and map markup would therefore be unsupported.
6. The displayed testimonial names, portraits, quotes, and verification badges have no verified source in the project record. They must not be represented to crawlers as authentic reviews or given review/rating schema. Replace them with approved customer statements before claiming client proof.
7. Google Search Console ownership, Analytics 4, production HTTPS, crawl status, index coverage, redirects, and real-user Core Web Vitals cannot be confirmed from this local code checkout.
8. The production domain is not present in the local checkout. Canonicals and absolute sitemap URLs intentionally stay unset in local builds until `SITE_URL` is configured. Vercel builds can use its stable `VERCEL_PROJECT_PRODUCTION_URL` fallback; preview URLs are never inferred.

## Keyword approach

This is an intent-led starting set based on the actual service offer and visible result language. Phrases are hypotheses for Search Console/Keyword Planner validation; no search-volume, CPC, or competition scores are claimed. Avoid superlatives such as “best,” “top-rated,” and “cheapest” because the site has no evidence for those claims.

| Page                            | Primary keyword                            | Supporting and long-tail phrases                                                                                                                                     | Search intent                           |
| ------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Homepage                        | freelance creative agency                  | independent creative agency; freelance web design and development; web, app, and AI automation studio                                                                | Commercial investigation / navigational |
| `/services/web-app-development` | freelance website and app development      | responsive business website development; custom web application development; SaaS MVP development; React and Next.js website developer; Figma to website development | Transactional / commercial              |
| `/services/ui-ux-design`        | freelance UI/UX design services            | Figma website design; mobile app UI/UX design; user flow and wireframe design; clickable Figma prototype; responsive design system                                   | Transactional / commercial              |
| `/services/creative-campaigns`  | freelance creative design and ad campaigns | social media ad creative design; event poster and banner design; Meta ad campaign creative; ad creative A/B testing                                                  | Transactional / commercial              |
| `/services/ai-automation`       | AI workflow automation services            | n8n workflow automation; AI agent development; RAG knowledge-base system; WhatsApp workflow automation; AI voice support agent                                       | Transactional / commercial              |
| `/services/consulting-support`  | freelance product development consulting   | MVP planning consultant; technical consultation for a web product; frontend bug fixing; website maintenance; Figma to code support                                   | Transactional / commercial              |
| `/work/[slug]`                  | project name + concept category            | brand identity concept; web design concept; self-initiated design exploration                                                                                        | Navigational / informational            |
| `/journal/[slug]`               | article-specific topic                     | touch-first web design; website section planning; brand color system                                                                                                 | Informational                           |
| `/#contact`                     | MOTIVE 9 contact / project enquiry         | book a creative or development call; freelance agency enquiry                                                                                                        | Navigational / transactional            |

### Per-service keyword clusters

- **Web and app development:** custom website developer, freelance web developer, business website, responsive website, landing page development, e-commerce interface, React/Next.js development, dashboard and SaaS MVP development, API integration, mobile app development with React Native/Expo. Questions: “Can you build from Figma?”, “Can you improve my current site?”, “What should an MVP include?”
- **UI/UX design:** freelance UX/UI designer, Figma web design, app interface design, user flow, wireframe, clickable prototype, responsive design system, UX redesign. Questions: “What is included in a Figma handoff?”, “Can you redesign an existing app?”, “Can design and build be scoped together?”
- **Creative and campaigns:** social media design, digital ad creative, event poster, banner and thumbnail design, Meta campaign setup, AI-assisted ad content, creative A/B test. Questions: “What campaign assets do I need?”, “Can you make variations for testing?”, “Can you manage the creative and campaign setup?”
- **AI and automation:** business workflow automation, n8n automation, AI agents, RAG system, AI voice support, WhatsApp/Telegram/Instagram automation, tool/API integration. Questions: “Which business tasks can be automated?”, “Can AI answer from our documents?”, “How should a workflow hand work back to a person?”
- **Consulting and ongoing support:** MVP consultation, product prototyping, technical consultation, AI-assisted development, vibe coding, Figma-to-code, frontend fixes, website and UI maintenance. Questions: “How do I scope a first release?”, “Can you fix a frontend bug?”, “What support is available after launch?”

### Local SEO boundary

Location phrases are not mapped to pages yet because the owner has not confirmed the primary business location or real service area. Once confirmed, validate only relevant phrases such as `web development in [confirmed city]`, `freelance UI/UX designer in [confirmed city]`, and `AI workflow automation in [confirmed city]`. Add a service-area statement only if the agency genuinely serves it. Do not create neighbourhood/city doorway pages or claim a walk-in office without evidence.

## Implemented page structure and technical work

- Added five linked, statically generated service pages with unique H1s, page titles/descriptions, concise service copy, deliverables, useful FAQs, related-service links, and inquiry/book-a-call routes.
- Updated the homepage title and description to name the real services in plain language; added indexing directives, Open Graph and X/Twitter title/description metadata, and an optional Google site-verification value.
- Added `Organization` and `WebSite` JSON-LD using the known agency name, contact email, and three owner-provided social profiles. The URL is emitted when configured. No street address, telephone, hours, ratings, or `LocalBusiness` data is fabricated.
- Added `Service` and `BreadcrumbList` JSON-LD to service routes. Breadcrumb structured data is emitted only when the canonical origin is known, so it never contains relative URLs.
- Added unique canonical and social metadata to work/journal detail pages when the production origin is configured. Unknown slugs receive `noindex` metadata; the not-found route is also `noindex`.
- Added a generated `robots.txt` that allows crawling and advertises the sitemap when an origin is available, and a generated sitemap containing the homepage, five service pages, four concept pages, and three journal articles.
- The favicon remains removed because the owner explicitly requested its removal. No replacement icon or favicon metadata was added.
- Preserved existing route paths and did not add keyword meta tags, fake ratings, fake local addresses, analytics IDs, or unsupported performance claims.

## Content plan: 15 useful article ideas

Titles are drafts. Publish only after adding original examples, screenshots, useful steps, and review by the person who performed the work.

| SEO title                                                 | Primary keyword                 | Related terms                                  | Intent                     | Suggested URL                                   | Audience                      |
| --------------------------------------------------------- | ------------------------------- | ---------------------------------------------- | -------------------------- | ----------------------------------------------- | ----------------------------- |
| What to Prepare Before Hiring a Website Developer         | hire a website developer        | website brief, web development scope           | Commercial investigation   | `/journal/website-project-brief`                | Small business owners         |
| Website Redesign or Rebuild: How to Choose                | website redesign vs rebuild     | website migration, redesign planning           | Commercial investigation   | `/journal/website-redesign-or-rebuild`          | Owners with an existing site  |
| How to Turn a Figma Design Into a Responsive Website      | Figma to website development    | responsive layout, design handoff              | Informational / commercial | `/journal/figma-to-responsive-website`          | Designers and founders        |
| What Should a Small Business Website Include?             | small business website features | service pages, contact forms, mobile design    | Informational              | `/journal/small-business-website-features`      | Small businesses              |
| A Practical Checklist for Reviewing Website Usability     | website usability checklist     | navigation, readability, accessibility         | Informational              | `/journal/website-usability-checklist`          | Site owners and product teams |
| Landing Page vs Website: What Does Your Launch Need?      | landing page vs website         | campaign page, business website                | Commercial investigation   | `/journal/landing-page-vs-website`              | Early-stage businesses        |
| When Is a SaaS MVP Ready to Build?                        | SaaS MVP development            | product scope, MVP features                    | Commercial investigation   | `/journal/when-to-build-a-saas-mvp`             | Founders                      |
| Planning a Useful Client Portal: Features and First Steps | client portal development       | customer dashboard, portal MVP                 | Informational / commercial | `/journal/planning-a-client-portal`             | Service businesses            |
| How to Map a Business Workflow Before Automating It       | business workflow automation    | process mapping, automation scope              | Informational / commercial | `/journal/map-work-before-automation`           | Operations teams              |
| Is n8n Right for Your Business Automation?                | n8n workflow automation         | integrations, webhooks, workflow tools         | Commercial investigation   | `/journal/is-n8n-right-for-you`                 | Small teams                   |
| RAG Explained: Letting an AI Assistant Use Your Documents | RAG system for business         | retrieval augmented generation, knowledge base | Informational / commercial | `/journal/rag-for-business-documents`           | Teams with internal knowledge |
| Where Should an AI Support Agent Hand Off to a Person?    | AI customer support agent       | human handoff, support workflow                | Informational              | `/journal/ai-support-human-handoff`             | Customer support leads        |
| WhatsApp Automation: Start With the Customer Journey      | WhatsApp workflow automation    | messaging workflows, WhatsApp Business API     | Informational / commercial | `/journal/whatsapp-automation-customer-journey` | Businesses using WhatsApp     |
| How to Plan Ad Creative Variations for a Fair A/B Test    | ad creative A/B testing         | Meta ads, creative testing                     | Informational / commercial | `/journal/ad-creative-ab-testing`               | Campaign managers             |
| A Figma Handoff Checklist for Developers and Clients      | Figma developer handoff         | design system, responsive specs                | Informational              | `/journal/figma-handoff-checklist`              | Designers and clients         |

## Owner setup still required

### 1. Set the public production origin

Set `SITE_URL` in the production deployment environment to the one canonical HTTPS origin, such as `https://www.your-domain.example`, and redeploy. On Vercel the stable `VERCEL_PROJECT_PRODUCTION_URL` is used if `SITE_URL` is absent. Do not set a preview URL. The code intentionally omits absolute canonicals and leaves the sitemap without URLs in local builds until a public production origin is available, rather than publishing localhost or an unconfirmed domain.

### 2. Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Add a **Domain** property for the real domain; Google uses DNS TXT verification for this property type. If DNS changes are not available, use a URL-prefix property and one of Google's offered verification methods.
3. After verification and deployment, open `https://<your-domain>/robots.txt` and `https://<your-domain>/sitemap.xml`.
4. In **Indexing → Sitemaps**, submit `sitemap.xml`.
5. Use **URL inspection** for the homepage and each service page, confirm Google's live test can fetch it, then request indexing if appropriate.
6. Review **Performance → Search results** for impressions, clicks, CTR, queries, and landing pages. Review **Indexing → Pages** and **Core Web Vitals** regularly. Sitemap submission is a discovery hint, not an indexing guarantee.

Google's [property setup](https://support.google.com/webmasters/answer/34592), [site verification](https://support.google.com/webmasters/answer/9008080), and [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) describe these steps.

### 3. Google Analytics 4

No GA4 measurement ID or consent/privacy setup exists in this checkout. Create the property and web stream, decide on the site's consent notice and privacy disclosures, then provide the measurement ID before enabling analytics. No tracking was added without that owner configuration.

### 4. Complete business proof and location details

- Confirm the canonical domain and whether the agency serves clients remotely, locally, or both.
- If local, provide the genuine business/service-area location and any public contact details before adding local landing copy or LocalBusiness schema.
- The original testimonial cards are restored per the owner's latest design direction. Their names, portraits, and quotes are not verified in the current project record; confirm the source/permission before treating them as client proof. No review/rating structured data is added.
- Supply the X/Twitter profile URL if it should be included.
- Add project outcomes only when client permission and measurable evidence are available. Keep concept work labelled as concept work.

## Validation and remaining verification

- Run formatting, lint, typecheck, architecture checks, and a production build after implementation.
- Check generated HTML metadata and JSON-LD for the homepage, all service pages, work pages, journal pages, and not-found route.
- Check `/robots.txt`, `/sitemap.xml`, mobile layout, and internal service links in a browser.
- Once a public origin is deployed, validate JSON-LD with [Schema Markup Validator](https://validator.schema.org/) and Google's [Rich Results Test](https://search.google.com/test/rich-results). The code checkout alone cannot establish Search Console ownership, indexation, crawl status, or live Core Web Vitals.
- Google does not guarantee display of structured data or indexing. Follow the [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) and [structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies); never treat a sitemap or schema as a ranking guarantee.
