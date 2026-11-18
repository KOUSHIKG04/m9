# Portfolio surface brief

The separate `/portfolio` page presents nine projects in M9's layered editorial deck, preserving Inter, charcoal, yellow controls, and rounded panels. The responsive "Built to be used." heading stays on one line (`white-space: nowrap`), with introductory copy beneath it. The Meet the team link, outgoing project buttons, bottom pagination, header divider, and bespoke portfolio footer are removed. The shared landing-page `ContactFooter footerOnly` renders after the padded `.portfolio-page` wrapper. Portfolio keeps only its social links, wordmark, and copyright, without contact CTA or testimonials. The prop defaults to false, preserving the homepage footer. The header team-up action targets `/#contact` on the homepage.

The supplied references establish the composition: [layered 3D cards on black](https://www.pinterest.com/pin/926052742136476425/) and [overlapping editorial panels](https://www.pinterest.com/pin/1012535928755561613/). Shallow rotation, translation, scale, and stacking frame the active image with adjacent panels. Visible panels stay fully opaque, without perspective, rotateY, or blur. A base hidden pose prevents distant cards from entering from an unpositioned origin. This is an existing-world extension; `DESIGN.md` and `.impeccable/design.json` remain unchanged.

## Projects and provenance

`features/agency/portfolio/portfolio-content.ts` owns nine entries: GitLoud, Vaastu, KGCraft UI, SafePlate, On Emit, AI CSV Importer, Convo, SafeDrive, and DevShelf. The five added entries use `D:/PROTFOLIO/src/features/portfolio/data/projects.ts` as their source; On Emit remains explicitly in progress. No client engagements or invented outcomes are claimed. Destination URLs remain in the registry but are no longer rendered as outgoing deck actions.

| Project | Project destination | Source |
| --- | --- | --- |
| GitLoud | [Website](https://gitloud-web.vercel.app) | [GitHub](https://github.com/KOUSHIKG04/GitLoud) |
| Vaastu | [Website](https://get-vaastu.vercel.app/) | [GitHub](https://github.com/KOUSHIKG04/scalable-architecture-skill) |
| KGCraft UI | [Website](https://kgcraft-ui-web.vercel.app) | [GitHub](https://github.com/KOUSHIKG04/kgcraft-UI) |
| SafePlate | [Website](https://wexa-ai-sepia.vercel.app) | [GitHub](https://github.com/KOUSHIKG04/wexa-ai) |
| On Emit | [Repository](https://github.com/KOUSHIKG04/on-emit) | [GitHub](https://github.com/KOUSHIKG04/on-emit) |
| AI CSV Importer | [Website](https://ai-powered-csv-importer-xi.vercel.app) | [GitHub](https://github.com/KOUSHIKG04/AI-powered-CSV-importer) |
| Convo | [Website](https://convo-chat-application.onrender.com) | [GitHub](https://github.com/KOUSHIKG04/Convo-Chat-Application) |
| SafeDrive | [Repository](https://github.com/KOUSHIKG04/safeDrive) | [GitHub](https://github.com/KOUSHIKG04/safeDrive) |
| DevShelf | [Repository](https://github.com/KOUSHIKG04/DevSnippets-AI) | [GitHub](https://github.com/KOUSHIKG04/DevSnippets-AI) |

All nine local PNGs in `public/portfolio/` embed an `impeccable:prompt` provenance record with source and copy date (2026-11-16):

| Local file | Source |
| --- | --- |
| `gitloud.png` | `D:/PROTFOLIO/public/projects/git-loud-card.png` |
| `vaastu.png` | `D:/PROTFOLIO/public/projects/vaastu-card.png` |
| `kgcraft.png` | [GitHub repository OG image](https://opengraph.githubassets.com/1/KOUSHIKG04/kgcraft-UI) |
| `safeplate.png` | `D:/PROTFOLIO/public/projects/safe-plate-card.png` |
| `on-emit.png` | `D:/PROTFOLIO/public/projects/on-emit-card.png` |
| `csv-importer.png` | `D:/PROTFOLIO/public/projects/csv-importer-card.png` |
| `convo.png` | `D:/PROTFOLIO/public/projects/convo-card.png` |
| `safedrive.png` | `D:/PROTFOLIO/public/projects/safedrive.png` |
| `devshelf.png` | `D:/PROTFOLIO/public/projects/devshelf.png` |

These existing project assets supersede earlier direct OG downloads and typographic covers; they are not claimed to be fresh browser screenshots.

## Layout, images, and interaction

The image-only deck is centered in a single-column gallery, with its visual area capped at 720px. Project descriptions are removed entirely. One short centered name/category caption sits below the cards, truncating with an ellipsis when needed. The deck has a 1.65 aspect ratio and 240px minimum height; panels are 70% wide with a 16:10 ratio (about 504px at the desktop maximum). Images use `object-fit: cover` to remove letterbox bands. Card overlays and the studio attribution line are absent.

`ProjectPreview` exposes loading status, fades in a loaded preview, and replaces errors with the name and "Preview unavailable. Browse another project." Only the active preview and its two neighbors on either side mount (five total). Responsive `sizes` values use 70vw up to 760px and 520px above it; the first project preview receives priority.

The homepage header's "Explore projects" leads here; the duplicate showcase CTA is removed. Back to M9 remains. Exposed side panels, wrapping previous/next arrows, left/right keys, Home/End, and horizontal touch swipes select projects. Swipes must exceed 40px and be more horizontal than vertical; `touch-action: pan-y` preserves page scrolling. Keyboard navigation from a panel moves focus to the selected panel. Only the active panel is tabbable; distant panels are hidden. Pause/play and previous/next arrows remain above the deck; the numeric count and bottom indicators are removed.

Automatic rotation advances every 4500ms with one interval, only while the gallery is at least 30% visible and the document is visible. The observer checks `entry.isIntersecting && entry.intersectionRatio >= 0.3`. Hover/focus pauses rotation; explicit pause/play controls rotation, and pressing play clears the hover/focus pause flags. Cleanup disconnects the observer, clears the timer, and removes the visibility listener. The caption is polite during paused or focused/hovered interaction and otherwise has live announcements off.

Reduced motion uses `useSyncExternalStore` with a conservative server snapshot. It disables autoplay and its control; CSS removes panel/image transitions and spinner animation. Panel movement uses a transform-only 480ms transition with shallow rotations of 5 degrees for adjacent cards and 2 degrees for rear cards. Preview loading retains its opacity transition; no animation dependency is added.


A charcoal footer-transition wrapper adds 64px top padding (48px on mobile), then reuses `SectionFade` from dark to yellow before the same footer-only component. The page no longer reserves `100svh` minimum height. Gallery bottom spacing is 48px, becoming 44px on mobile, so the footer follows the content without an artificial viewport gap.

## Applied design guidance

This polish applies Unslop's spacing, material, and motion restraint, with credit to Damir Sokolovsky: [Unslop](https://heydamir.design/unslop), CC BY 4.0. Stageshow framing and choreography principles informed the smaller image stage and controlled card movement. This is a real project-image carousel; no Stageshow kit or animation dependency was added. Attribution stays in developer documentation.

## Verification boundary

Reviewed final page, carousel, preview component, and CSS, alongside previously reviewed content, metadata, source registry, and PNG provenance. Source review supports the requested cleanup, shared footer reuse, centered single-column deck and short caption, guarded rotation, and image states. TypeScript and architecture checks passed as reported by the implementation agent; targeted lint also passed for this revision.

Browser/runtime verification was unavailable; the current computer-use inventory had no browser surfaces. Single-line heading fit, image cropping, overlap, footer-only appearance, responsive composition, autoplay/pause behavior, touch/focus behavior, announcements, and image failure recovery remain unverified in a live browser.





