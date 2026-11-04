# Architecture brief

## Requirements and topology

MOTIVE 9 is a public freelance agency website for prospective clients to explore services and work, then start a project conversation. One Next.js application is the deployment unit. The supplied PDF owns the composition; the existing Next/shadcn installation is retained.

## Ownership and dependencies

- `app/`: thin route adapters, metadata, root document, global brand tokens.
- `features/agency/`: thin home composition plus owning hero/about/expertise/projects/people/journal/contact/details folders. Section components, base CSS, and responsive CSS stay together. Shared presentation and reusable artwork/header/preview components have their own folders. `agency.css` supplies one explicit stylesheet import order; application global CSS only owns foundation rules.
- `components/ui/`: installed platform primitives, consumed by feature UI.
- `lib/`: existing generic class-name helper only.
- `public/`: brand assets.
- `scripts/`: boundary verification.

Dependency direction: routes → agency feature → shared UI. Content is feature owned. Features and shared UI never import routes; shared UI never imports features. No cross-feature dependencies or extra workspace packages are needed.

## Request and inquiry flows

GET `/` renders the public agency page. Work and journal links navigate to statically generated detail pages. Route parameters are matched against owned content, and unknown slugs invoke Next.js notFound and render the recovery page. With the retained Cache Components streaming configuration, these streamed responses may carry HTTP 200; the visual not-found state is verified. Primary project actions lead to the contact section. Its client-owned dialog validates name, email, and project details, then posts the legacy name/email/message/_subject payload to Formspree with Accept: application/json. Only a successful provider response shows success. Pending requests disable duplicate submissions; rate limits, network errors and timeouts preserve the draft for retry. Booking opens the existing Cal.com event. Direct email remains available.

## State, trust, and persistence

Content is the checked-in source of truth. Mobile navigation has local component state. Service expansions use native details elements. No global store, database, authentication, credentials or queues are required. Formspree is the trusted delivery boundary and owns server validation, spam controls and delivery; browser checks improve UX and are not a server security boundary. No contact data is persisted by this Next.js app. Booking is delegated to Cal.com. Public provider URLs and contact identity live in features/agency/contact/contact-config.ts.

## Deployment and configuration

Run `npm run build` and `npm start` on a Next-compatible host. Agency identity lives in feature-owned content; email, booking and enquiry endpoint live in the feature contact config. No environment secrets. Concepts remain explicitly labeled until actual case studies are supplied.

## Verification and growth

Lint, TypeScript, production build, route/interaction and responsive browser checks, plus an import boundary check. The first slice is home → work detail → email inquiry, followed by remaining sections and journal. Introduce a CMS when editorial workflows require it; add a backend only when lead capture needs persistence. This avoids speculative infrastructure while preserving a clear feature boundary.
