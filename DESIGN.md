---
name: MOTIVE 9
description: Independent creative agency following the supplied MOTIVE 9 desktop reference.
colors:
  yellow: "#fff21a"
  charcoal: "#171717"
  white: "#fff"
  gray: "#9a9a9a"
  rule: "#0000000d"
  border: "#dedede"
  ring: "#797100"
  muted: "#f1f1f1"
  muted-foreground: "#626262"
  dark-secondary: "#b9b9b9"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(130px, 23.5vw, 370px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-.075em"
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(52px, 7.7vw, 108px)"
    fontWeight: 750
    lineHeight: 1.04
    letterSpacing: "-.055em"
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "23px"
    fontWeight: 550
    letterSpacing: "-.04em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "13px"
    lineHeight: 1.7
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "10px"
    fontWeight: 650
    letterSpacing: ".09em"
rounded:
  card: "16px"
  card-mobile: "12px"
  hero: "20px"
  hero-mobile: "14px"
  control: "999px"
  icon-control: "50%"
  badge: "99px"
  circle: "50%"
spacing:
  gutter: "clamp(24px, 4.5vw, 72px)"
  section: "92px"
  section-tablet: "72px"
  section-mobile: "64px"
  grid-gap: "24px"
  grid-gap-mobile: "16px"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.charcoal}"
  arrow:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.icon-control}"
    width: "40px"
    height: "40px"
  card-art:
    rounded: "{rounded.card}"
  service-open:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.charcoal}"
---

# Design System: MOTIVE 9

## Overview

The supplied MOTIVE 9 desktop PDF is the visual authority. Its oversized yellow wordmark, white grid-lined hero, radial burst, yellow discipline ribbon, and alternating charcoal and white sections define the implemented world. The closing contact panel returns to full yellow. This refresh preserves the existing direction contract and records the implemented values; it introduces no new aesthetic direction.

The system is editorial and geometric: tightly tracked display type, small section labels, generous section space, rule-separated service rows, and authored geometric artwork. Small labels and the subtle hero grid are reference-pinned exceptions to generic size and contrast heuristics. Work covers and discipline tiles remain deliberately graphic.

**Key Characteristics:**

- Reference-pinned yellow, charcoal, and white contrast.
- Oversized Inter typography with tight tracking.
- Flat sections, fine rules, rounded image containers, and rounded rectangular controls.
- Geometric vector artwork rather than invented client or team photography.

## Colors

### Primary

Electric yellow supplies the hero wordmark, ribbon, selected service surface, arrows, emphasis on charcoal, and contact panel. It can fill a section because that behavior is established by the supplied reference.

### Neutral

Charcoal anchors dark sections and text on light surfaces. White supplies the hero and alternating content sections. Gray is a brand token; supporting text on dark sections uses the brighter dark-secondary token, while light surfaces use muted-foreground. Border and rule tokens separate controls and hero columns. Muted and ring remain the existing utility tokens.

**The Reference Palette Rule.** Preserve the yellow/charcoal/white section rhythm and derive geometric artwork from those colors. Incidental darker grays in artwork and lighter secondary text do not create new brand accents.

## Typography

Inter is loaded through Next.js and used for display, body, and labels, with a sans-serif fallback. The frontmatter records the hero display, common section headline, project title, agency body, and section-label roles. These roles describe observed use rather than imposing a single body size across every context.

Section headlines have compact leading and negative tracking. The hero wordmark is a distinct oversized composition behind the radial linework and foreground statement. Contact headlines use a separate fluid scale (clamp(64px, 9vw, 132px), weight 750, line-height .97). Long-form detail copy uses a larger reading size (16px, line-height 1.85), reducing to 15px on mobile, with article text constrained to 720px.

**The Oversized Type Rule.** Preserve the reference's large wordmark and compact headline tracking; responsive changes must retain the same hierarchy instead of shrinking every role uniformly.

## Layout

Content containers cap at 1280px. Full-width section backgrounds use the fluid gutter token, not a fixed desktop gutter. Section padding starts at the section token, becomes section-tablet at 1000px, and section-mobile at 760px. Some sections retain intentional local padding, such as the contact panel's shallower bottom edge and the service list's full-width rules.

The desktop hero has a 24px charcoal outer frame, a 760px nominal height, viewport-sensitive minimum height, and vertical grid columns spaced at 9.09%. At 1600px and above its height is 860px. At 1000px and below it becomes 680px with a 580px minimum. At 760px and below the frame is 12px, the grid uses 20% columns, and hero height is calc(88svh - 24px), bounded by 580px and 790px. The mobile wordmark uses 24.5vw; the burst grows to 91vw, capped at 520px.

Projects use two columns; disciplines use four; journal uses three. Below 760px, disciplines become two columns and journal becomes one. Projects remain two columns until 370px, where they become one. Detail-page body columns become one below 760px. At 1000px service tags disappear and disclosure descriptions stack; below 760px section heading rows and contact actions stack. Below 370px agency facts also stack.

The header contains only the M9 logo, Book a discovery call, and Start a project at every viewport. There are no navigation links or mobile menu.

## Elevation & Depth

Sections and artwork are flat; contrast, fine rules, cropping, concentric rings, and overlapping type supply depth. Cards do not use ambient shadows. The mobile navigation alone uses a soft separation shadow (0 20px 40px #00000026) over the light hero.

## Shapes

The hero uses the hero radius; geometric artwork, discipline tiles, and journal cards use the card radius, becoming card-mobile on smaller screens where implemented. Controls use pill corners; status badges use compact capsule corners; arrows and artwork rings are circular. Rules are 1px. Project artwork stays clipped inside its rounded wrapper.

## Components

### Buttons and arrows

Button and ButtonLink share the older Motive9 control treatment: 14px rounded rectangular corners, flat solid fills without shadows or gradients, 500-weight labels, and clear hover/press/focus states. Yellow/charcoal primary controls invert on yellow surfaces; secondary controls use a solid charcoal surface. Icon controls use 10px corners. components/ui/button.css owns the shared treatment.

All links, buttons, and service summaries receive a visible outline (3px currentColor, 6px offset). A focus-revealed skip link precedes navigation. Hover arrows rotate; open service arrows rotate to communicate disclosure. Text links use underlines where established.

### Service disclosures

Native details/summary rows are separated by charcoal rules. The first row has a persistent yellow surface; hovered or open rows also use yellow. Number, title, optional desktop tags, and round arrow form the summary. Expanded content supplies readable copy and an inquiry link without requiring client JavaScript.

### Work, discipline, and journal cards

Work cards place geometric concept artwork above title and category captions. Their badge labels identify concept work. Discipline tiles use initials, circles, and alternating charcoal/yellow fields instead of unverified people. Journal cards combine geometric covers with a charcoal copy panel. Hover changes titles to yellow; article arrows shift gently.

### Motion and responsive interaction

The hero has three explicit layers: radial spikes behind the yellow wordmark, then the agency statement. On mouse movement, hovered spikes grow radially outward along their existing direction, with up to 80 SVG units of extra length, a local falloff, and smooth interpolation. Every inner endpoint and the SVG circle position stay fixed. Spike tips return to their original positions on pointer leave. Touch and reduced-motion layouts remain static. Color transitions last .2s, arrow rotation .25s, and equalizer hover movement .5s. No animation is needed to reveal content. Under prefers-reduced-motion: reduce, scrolling becomes immediate and all animations and transitions are disabled, preserving the static composition and every interaction.

## Do's and Don'ts

- **Do** preserve the supplied PDF's hero composition and alternating section rhythm.
- **Do** use the actual fluid gutter and responsive grid behavior recorded above.
- **Do** keep keyboard focus visible and service disclosure operable without client JavaScript.
- **Do** maintain reduced-motion behavior when extending interactions.
- **Do** keep geometric concept work explicitly distinguishable from verified client engagements.
- **Don't** replace the reference with a new palette, type pairing, or generic card-based layout.
- **Don't** introduce fictitious metrics, clients, awards, people, or photographic team portraits.
- **Don't** add ambient card shadows or motion-dependent content reveals to this flat system.

## Contact integration and service preview

The footer has adjacent enquiry and booking controls plus the migrated email address. The enquiry opens a native modal dialog with labeled fields, focus entry and restoration, native validation, inline status, and a disabled pending state. Its responsive two-column field row stacks on mobile. The website-development disclosure includes a still Stageshow product shot; its compact design preserves the headline and main action.

The discovery-call link sits immediately before Start a project in the header action group. It uses the existing Cal.com destination and is no longer repeated at the foot of the hero.

## Ribbon and agency details

The yellow discipline ribbon repeats two equal, non-shrinking groups and translates the track by exactly one group width over a 26-second linear loop. Reduced-motion users receive a static ribbon. Hero text is not selectable so pointer interaction with the spikes does not highlight text. The agency details row has three equal centered columns; its former description is removed. The existing narrow-screen stacking remains centered.

## Service alignment and shared controls

Service summaries and expanded bodies share the same four-column grid. The description starts exactly beneath the title, with the action aligned in the remaining columns; mobile content and actions stack from the same title edge. A down chevron marks a closed disclosure and an up chevron marks an open disclosure. The development preview is inside that aligned content grid.

## Current landing-page refinements

All controls are flat and filled, without 3D shadows or gradients. The header contains exactly the logo and two actions, including on mobile. The hero statement scales to clamp(40px, 4.8vw, 72px) on desktop and clamp(32px, 7.6vw, 46px) on mobile. Service summaries show their number, title, and chevron only; descriptions and illustrative previews remain in the expanded content, without tags or a second action button. AI & Automation uses the older Motive9 service copy and an explicitly illustrative WhatsApp → n8n → Google Sheets flow, styled in the existing flat yellow/charcoal system.

## Current button shape and labels

All text buttons use a full pill radius (999px); icon controls, including service chevrons, are circular. Controls remain flat, filled, and shadow-free. Secondary/ghost buttons are white with charcoal text and a subtle neutral border. Diagonal arrow icons are removed from action buttons and the illustrative button; decorative arrow-only project markers are removed while the whole project card remains a link. Header actions read Book a call and Explore; Explore leads to the service section.

## Enquiry and service interaction refinements

The enquiry fields use the recessed inset shadows from the older Motive9 form. Validation appears beside each field, and failed requests show inline recovery guidance plus a Sonner toast within the native dialog. The form has one Send action with a horizontal send icon. The close icon remains available outside the pending state.

Hero spikes react to mouse movement anywhere in the hero shell, extending radially toward the pointer and resetting on exit. Touch and reduced-motion users receive the static artwork. Service descriptions are 2px larger at each breakpoint; inline tool logos, including n8n, have dimensional shadows and the footer social icons' hover movement. The footer wordmark reads motive9 in lowercase.

Service description logos use dedicated brand-color SVG variants, retaining their depth and hover movement. The right-hand chevron circles measure 32px on desktop and 28px on mobile; the full service summary remains clickable.
