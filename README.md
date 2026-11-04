# MOTIVE 9

A PDF-led freelance agency website built with Next.js App Router, React, TypeScript, Tailwind CSS, and the existing shadcn/Base UI installation.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```sh
npm run format
npm run format:check
npm run lint
npm run typecheck
npm run check:architecture
npm run build
```

## Edit content

`features/agency/content.ts` owns services, concept projects, original journal articles, while features/agency/contact/contact-config.ts owns the migrated email, Cal.com booking URL, and public Formspree endpoint. Work and journal detail routes are statically generated from that content. `app/globals.css` contains tokens, resets, and global accessibility rules. Each agency section/component owns its CSS and responsive CSS beside its TSX. `features/agency/agency.css` is the ordered stylesheet entry point imported by the root layout. The SVG artwork lives with the agency feature.

Portfolio entries are independent concepts, not claimed client engagements. Studio tiles represent disciplines, not named team members. The contact integrations match the older Motive9 project. The enquiry form submits name, email, message, and the existing subject to Formspree; it handles pending, success, network failure, and rate limiting. Booking opens the existing Cal.com event in a new tab. Contact data is sent to Formspree and is not stored by this Next.js app.

See `docs/architecture.md` for the Vaastu decisions, `PRODUCT.md` for product facts, and `DESIGN.md` for the reference-led visual system.

## Formatting

Prettier uses the same configuration as the older Motive9 project. Run `npm run format` to format maintained files and `npm run format:check` to verify them. Generated output, installed skills, lockfiles, and the copied upstream Stageshow runtime are excluded.
