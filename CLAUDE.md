# NRG Bloom — Website Revamp Project
## CLAUDE.md — Read this at the start of every session.

---

## Project Overview

This is the local development environment for **nrgbloom.com**.
Stack: plain HTML5, CSS3, vanilla JS. No framework. No build step.
Files are edited locally and pushed live directly.

**Goal:** Complete identity and design revamp. We are not patching the old
site — we are rebuilding it to reflect NRG Bloom's evolved brand as a
cleantech compute infrastructure company.

---

## The Identity Shift — This Is Critical

The old site positioned NRG Bloom as "Off-Grid AI & Bitcoin Infrastructure."
That identity is DEAD. Do not carry it forward anywhere — not in titles,
meta tags, headlines, body copy, or image alt text.

**New identity:**
NRG Bloom is a **cleantech compute infrastructure company** that deploys
modular data centers at stranded and wasted energy sources — turning flare
gas, curtailed renewables, and off-grid power into productive compute revenue.

**Bitcoin mining** is still part of our model (as a load-balancing and
validation tool), but it is NOT our identity. It is one output of NEXUS
orchestration — a technical mechanism, not a brand pillar.

**Key taglines:**
- "We're not hyperscalers, we're modular off-grid enablers."
- "Turning wasted energy into productive compute."
- "Where the grid ends, we begin."

---

## Company Facts (Use These Accurately)

- **Incorporated:** Quebec, Canada
- **Founded:** 2024
- **First deployment:** Ogboinbiri, Bayelsa State, Nigeria — operational
  since February 2025 (13+ months)
- **Energy partner:** Oando Energy Resources (Gas Purchase Agreement)
- **Current capacity:** 1.5 MW operational, 5 MW under development
- **Energy cost:** ~$0.02–$0.032/kWh (approximately 1/3 of mining industry
  breakeven)
- **Carbon impact:** ~300 tonnes CO2e methane mitigated
- **Active markets:** Nigeria (operational) → Kenya → Colombia (pipeline)
- **Do NOT mention:** Tunisia, Congo (no longer pursued)

---

## Core Technology — NEXUS

**NEXUS** is NRG Bloom's proprietary hybrid compute orchestration system.
It dynamically routes available stranded power between workloads — AI
inference and Bitcoin mining — based on real-time economic signals.

NEXUS is **source-agnostic**: it works with any power input:
Flare gas → Curtailed renewables → Hydroelectric → SMR/nuclear

Current status: Patent pending (provisional filing in progress).

NEXUS was called "Dynamic Load Orchestration" on the old strategy page.
It must now be named NEXUS everywhere on the site.

**Second technology pillar:** NRG Bloom Flare Intelligence — a
satellite-based platform that detects and scores global flare gas sites
for commercial viability. Built on NOAA VIIRS nightfire data. Bridges the
gap between flare detection and compute deployment.

---

## Team (Current — Use These Exact Details)

| Name | Title | Contact |
|------|-------|---------|
| Makir Volcy | Founder & CEO | makir@nrgbloom.com |
| Julie Peeters | Co-Founder & Director of Operations | julie@nrgbloom.com |
| Gus Anyim | Head of Commercial | gus@nrgbloom.com |
| Jordane Volcy | Head of Engineering | — |

---

## What Needs to Change from the Old Site

### Immediate fixes:
1. **Page `<title>` tags** — Remove "Bitcoin" from every page title
2. **Meta descriptions** — Rewrite for cleantech positioning
3. **Hero headline** — "Unlocking the Value of Stranded Energy for AI" is
   okay but can be stronger. Explore alternatives.
4. **Strategy page** — Rename "Dynamic Load Orchestration" to NEXUS
   throughout. Reframe the 3-stage model in cleantech language.
5. **About page** — Update Julie's title to "Co-Founder & Director of
   Operations"
6. **Broken image URLs** — Some images load from
   `cdn.prod.website-files.com` (old Webflow CDN). These must be
   replaced with local `/images/` references or they will break.
7. **Blog posts** — All 3 existing posts are Bitcoin-focused. Flag these
   for content strategy review. Do not delete — just note they need
   eventual replacement.

### New pages to build:
- `technology.html` — NEXUS deep dive + Flare Intelligence
- `markets.html` — Nigeria / Kenya / Colombia with operational detail
- `impact.html` — Cleantech ESG, carbon credits, Verra VCS, AM0009

### Nav restructure (new):
- Home
- Technology (new)
- Markets (new)
- Impact (new)
- About & Team
- Investors
- Insights

---

## Design Direction

**Aesthetic:** Clean, credible, industrial-technical. Serious cleantech
infrastructure — not crypto, not a startup blog. Think: where a credible
energy company meets a deep-tech firm.

**Color system (build as CSS custom properties in `styles/global.css`):**
```css
:root {
  --color-bg:          #0A0E1A;   /* deep navy base */
  --color-surface:     #111827;   /* card/section surface */
  --color-border:      #1F2937;   /* subtle borders */
  --color-accent:      #00C896;   /* electric teal — primary accent */
  --color-accent-warm: #F59E0B;   /* amber — energy/heat references */
  --color-text:        #F9FAFB;   /* primary text */
  --color-text-muted:  #9CA3AF;   /* secondary text */
  --color-text-dim:    #6B7280;   /* labels, captions */
}
```

**Typography:** Space Grotesk (headers) + Inter (body). Both via Google
Fonts CDN.

**Visual language:**
- Abstract energy flow, grid topology, node graphs as backgrounds
- NO coin imagery, NO literal mining rig photos as hero elements
- Maps showing Nigeria/Kenya/Colombia deployment zones
- Data metrics shown prominently (1.5 MW, 300t CO2e, $0.02/kWh, etc.)
- Operational photo of Ogboinbiri site can be used — it's real proof

---

## Technical Rules

- HTML5, CSS3, vanilla JS only. No frameworks. No build tools.
- All CSS in `/styles/` directory. Never inline styles.
- All JS in `/js/` directory.
- Mobile-first. Test at 375px, 768px, 1280px, 1440px.
- CSS custom properties for ALL design tokens (colors, type, spacing).
- SVG for all icons and diagrams.
- Semantic HTML: `<main>`, `<section>`, `<nav>`, `<header>`, `<footer>`.
- Every page needs `<title>` and `<meta name="description">`.
- Replace ALL `cdn.prod.website-files.com` image URLs with local paths.

**File structure:**
```
/
├── index.html
├── strategy.html         ← rewrite from current /strategy
├── technology.html       ← NEW
├── markets.html          ← NEW
├── impact.html           ← NEW
├── about-leadership.html ← rewrite from current /about-leadership
├── energy-partners.html
├── investor-relations.html
├── insights.html
├── styles/
│   ├── global.css        ← CSS variables, reset, typography
│   ├── components.css    ← nav, footer, buttons, cards
│   └── [page].css
├── js/
│   └── main.js
├── images/               ← all images local (no Webflow CDN)
└── icons/
```

---

## Working Process

1. Start each session by reading this file.
2. Before writing code, audit the current file you're working on and
   summarize what exists.
3. Propose structure/approach before writing — especially for new sections.
4. For major layout decisions, offer 2 options briefly before proceeding.
5. When touching any page, fix the Webflow CDN image references
   opportunistically.

**Priority order:**
1. `styles/global.css` — design system first
2. `styles/components.css` — nav + footer components
3. `index.html` — homepage revamp
4. `strategy.html` — NEXUS rename + cleantech reframe
5. `technology.html` — new page
6. `markets.html` — new page
7. `about-leadership.html` — team updates
8. `impact.html` — new page
