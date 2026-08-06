# NRG Bloom: Website Revamp Project
## CLAUDE.md: Read this at the start of every session.

---

## Project Overview

This is the local development environment for **nrgbloom.com**.
Stack: plain HTML5, CSS3, vanilla JS. No framework. No build step.
Files are edited locally and pushed live directly.

**Goal:** Complete identity and design revamp. We are not patching the old
site, we are rebuilding it to reflect NRG Bloom's evolved brand as a
cleantech compute infrastructure company.

---

## The Identity Shift: This Is Critical

The old site positioned NRG Bloom as "Off-Grid AI & Bitcoin Infrastructure."
That identity is DEAD. Do not carry it forward anywhere, not in titles,
meta tags, headlines, body copy, or image alt text.

**New identity:**
NRG Bloom is a **cleantech compute infrastructure company** that deploys
modular data centers at stranded and wasted energy sources, turning flare
gas, curtailed renewables, and off-grid power into productive compute revenue.

**Bitcoin mining** is still part of our model (as a load-balancing and
validation tool), but it is NOT our identity. It is one output of NEXUS
orchestration, a technical mechanism, not a brand pillar.

**Key taglines:**
- "We're not hyperscalers, we're modular off-grid enablers."
- "Turning wasted energy into productive compute."
- "Where the grid ends, we begin."

---

## Company Facts (Use These Accurately)

**These are the ONLY operating figures that may be published.** They were
corrected site-wide on 2026-08-06 against founder-verified data. Everything
in this block was previously wrong on the live site. Do not restore an old
figure from an older file, a cached draft, or another page.

- **Incorporated:** Quebec, Canada
- **First deployment:** Ogboinbiri, Bayelsa State, Nigeria. Operational
  since February 2025.
- **Energized capacity:** 1 MW (of 1.5 MW developed)
- **Pipeline:** 5 MW under development. This is pipeline, never describe
  it as operational or energized.
- **Uptime:** 94%
- **Energy cost:** $0.03/kWh under a community-based power purchase
  agreement
- **Carbon impact:** 300+ tonnes CO2e mitigated
- **Local jobs:** 5 at Ogboinbiri
- **PUE:** below 1.2 is a TARGET, never report it as a result
- **Active markets:** Nigeria (operational), Kenya and Colombia (pipeline)
- **Do NOT mention:** Tunisia, Congo (no longer pursued)

### Never write these again

- "1.5 MW operational" (it is 1 MW energized, 1.5 MW developed)
- "95% uptime" (it is 94%)
- "$0.02/kWh" or "$0.02-$0.032/kWh" (it is $0.03/kWh)
- Any hardcoded month count such as "13+ months". It goes stale the moment
  it is written. Always write "operational since February 2025".
- "Carbon-negative". Nothing is third-party verified and no credits have
  been issued. Use "300+ tonnes CO2e mitigated".
- "Verra VCS AM0009" or "Verra VCS VM0029". AM0009 is a **UNFCCC CDM**
  methodology (recovery and utilization of gas from oil fields that would
  otherwise be flared or vented) and it is the correct one. VM0029 is
  Verra's *Avoided Forest Degradation through Fire Management* methodology,
  is unrelated to gas, and was cited in error on /facts-and-numbers until
  2026-08-06. Correct phrasing: "aligned with UNFCCC CDM methodology
  AM0009", always paired with the note that no credits have been issued.

### Open questions for the founder (do NOT guess)

- **Founding year.** `data/impact.json`, `.well-known/ai-agent.json` and
  the homepage Organization schema all say 2023. An earlier version of this
  file said 2024. The published 2023 is left in place pending confirmation.
- **Energy partner name.** The partner is not named anywhere public. Do not
  name them, and do not publish an attributed quote, without written
  consent.
- **NEXUS and "patent pending".** Commit 8977f1 deliberately stripped
  NEXUS, Pathfinder and patent-pending claims from investor-relations. An
  earlier version of this file instructed the opposite. Do not reintroduce
  either without a founder decision.

---

## Core Technology: NEXUS

**NEXUS** is NRG Bloom's proprietary hybrid compute orchestration system.
It dynamically routes available stranded power between workloads, AI
inference and Bitcoin mining, based on real-time economic signals.

NEXUS is **source-agnostic**: it works with any power input:
Flare gas → Curtailed renewables → Hydroelectric → SMR/nuclear

Current status: see the founder open-question above before publishing any
patent-pending claim. A prior commit deliberately removed it from the live
site.

NEXUS was called "Dynamic Load Orchestration" on the old strategy page.
Do NOT roll NEXUS branding back onto the live site without a founder
decision; see the open question above.

**Second technology pillar:** NRG Bloom Flare Intelligence, a
satellite-based platform that detects and scores global flare gas sites
for commercial viability. Built on NOAA VIIRS nightfire data. Bridges the
gap between flare detection and compute deployment.

---

## Team (Current: Use These Exact Details)

| Name | Title | Contact |
|------|-------|---------|
| Makir Volcy | Founder & CEO | makir@nrgbloom.com |
| Julie Peeters | Co-Founder & Director of Operations | julie@nrgbloom.com |
| Gus Anyim | Head of Commercial | gus@nrgbloom.com |
| Jordane Volcy | Head of Engineering | n/a |

---

## What Needs to Change from the Old Site

### Immediate fixes:
1. **Page `<title>` tags**: Remove "Bitcoin" from every page title
2. **Meta descriptions**: Rewrite for cleantech positioning
3. **Hero headline**: "Unlocking the Value of Stranded Energy for AI" is
   okay but can be stronger. Explore alternatives.
4. **Strategy page**: Rename "Dynamic Load Orchestration" to NEXUS
   throughout. Reframe the 3-stage model in cleantech language.
5. **About page**: Update Julie's title to "Co-Founder & Director of
   Operations"
6. **Broken image URLs**: Some images load from
   `cdn.prod.website-files.com` (old Webflow CDN). These must be
   replaced with local `/images/` references or they will break.
7. **Blog posts**: All 3 existing posts are Bitcoin-focused. Flag these
   for content strategy review. Do not delete, just note they need
   eventual replacement.

### New pages to build:
- `technology.html`: NEXUS deep dive plus Flare Intelligence
- `markets.html`: Nigeria / Kenya / Colombia with operational detail
- `impact.html`: Cleantech ESG, carbon credits, UNFCCC CDM AM0009 (NOT Verra)

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
infrastructure, not crypto, not a startup blog. Think: where a credible
energy company meets a deep-tech firm.

**Color system (build as CSS custom properties in `styles/global.css`):**
```css
:root {
  --color-bg:          #0A0E1A;   /* deep navy base */
  --color-surface:     #111827;   /* card/section surface */
  --color-border:      #1F2937;   /* subtle borders */
  --color-accent:      #00C896;   /* electric teal: primary accent */
  --color-accent-warm: #F59E0B;   /* amber: energy/heat references */
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
- Data metrics shown prominently, using ONLY the verified figures above
  (1 MW energized, 94% uptime, 300t CO2e, $0.03/kWh)
- Operational photo of Ogboinbiri site can be used, it's real proof

---

## Netlify redirect shadowing (read before touching `_redirects`)

Netlify serves a matching static file **before** it evaluates a non-forced
redirect rule. A rule whose source path has a corresponding `.html` file in
this repo will never fire unless it is forced with `301!`.

This cost months. `/team` and `/partnership` had correct 301 rules sitting
in `_redirects` the whole time and both kept returning 200, because
`team.html` and `partnership.html` existed. Meanwhile `/energy`, `/faq`,
`/about` and `/for-investors` worked perfectly, because no file shadowed
them. An SEO audit read the 200s and concluded the rules were missing.

Before adding a rule, check whether `<source>.html` exists. If it does,
either delete the file or force the rule. Do not add a duplicate rule.

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
3. Propose structure/approach before writing, especially for new sections.
4. For major layout decisions, offer 2 options briefly before proceeding.
5. When touching any page, fix the Webflow CDN image references
   opportunistically.

**Priority order:**
1. `styles/global.css`, design system first
2. `styles/components.css`, nav + footer components
3. `index.html`, homepage revamp
4. `strategy.html`, NEXUS rename + cleantech reframe
5. `technology.html`, new page
6. `markets.html`, new page
7. `about-leadership.html`, team updates
8. `impact.html`, new page
