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
validation tool), but it is NOT our identity. It is one workload among
several, a technical mechanism, not a brand pillar.

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

### Founder decisions (settled, do not reopen)

- **Founding year is 2023.** Confirmed by the founder 2026-08-06. It is
  what `data/impact.json`, `.well-known/ai-agent.json` and the homepage
  Organization schema already publish. Any note claiming 2024 is wrong.
- **NEXUS, Pathfinder and "patent pending" are OUT.** Founder decision
  2026-08-06, verbatim: "leave nexus patent pending out, we don't talk
  about this at all." None of these appear anywhere on the site and none
  may be reintroduced, in copy, meta, schema, `llms.txt`, `llms-full.txt`
  or `ai-agent.json`. Describe capability in plain operational terms, never
  as a named proprietary product or an IP claim.
- **/facts-and-numbers is retired.** Founder decision 2026-08-06. It was an
  investor deck at a public URL: raise ladder, revenue projections, named
  counterparties and published commercial terms. The confidentiality pass
  stripped it, then the founder removed the page outright. It 301s to
  /investor-relations. Do not rebuild a public metrics or data-room page.
  Numbers go in the investor pack, which is requested through the form on
  /investor-relations and sent per conversation.
- **Third parties are never named.** No energy partner, no client, no
  counterparty, anywhere public, including attributed quotes, without
  written consent from that party. Removed site-wide 2026-08-06 after a
  third-party review flagged NDA exposure. Applies to future additions too,
  not just the ones that were removed.

---

## Technology: how to describe it (NEXUS is retired)

Founder decision 2026-08-06: **do not use the name NEXUS, do not use
Pathfinder, and do not make any patent-pending or IP claim.** They appear
nowhere on the site and must not return. An earlier version of this file
instructed the opposite; that instruction is void.

Describe the capability plainly, as an operating practice rather than a
named product:

- Good: "power is allocated across workloads in real time based on
  available energy and market pricing"
- Bad: "NEXUS, our proprietary orchestration platform (patent pending)"

The same applies to the satellite flare-scoring work. Describe what it does
if it is relevant, do not brand it and do not claim IP over it.

Why: a named proprietary platform invites the question "show me the
patent", and an IP claim you have to soften later costs more credibility
than the branding ever earned. The operating record is the differentiator,
not the product name.

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
4. **Strategy page**: DONE. Do not reintroduce a product name here; see
   the technology section above.
5. **About page**: Update Julie's title to "Co-Founder & Director of
   Operations"
6. **Broken image URLs**: Some images load from
   `cdn.prod.website-files.com` (old Webflow CDN). These must be
   replaced with local `/images/` references or they will break.
7. **Blog posts**: All 3 existing posts are Bitcoin-focused. Flag these
   for content strategy review. Do not delete, just note they need
   eventual replacement.

### New pages to build:
- `technology.html`: only if it can be written without a product name or
  an IP claim; otherwise do not build it
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

## The index policy (founder decision, 2026-08-06)

Every URL on this site is in exactly ONE of four states. There is no fifth
state and there is no "it just ended up that way". Before 2026-08-06 the
site had 48 HTML files and 16 indexed pages, and nobody had decided which
16. Now it has 38 files and 23 intentionally indexed pages.

| State | Rule | Count |
|---|---|---|
| **Indexed** | In `sitemap.xml`, no noindex tag, links to a pillar | 23 |
| **Noindex** | Has `noindex, follow`, NOT in sitemap, stays crawlable | 13 |
| **Redirected** | File deleted, 301 in `_redirects` to nearest live page | n/a |
| **Error** | `401.html`, `404.html`. Never indexed by design | 2 |

23 + 13 + 2 = 38 files. Run the reconciliation before every deploy. If the
arithmetic does not close, something shipped by accident.

### Invariants (a deploy is broken if any of these fail)

1. **No URL is both in the sitemap and noindexed.** That tells Google two
   opposite things. Twelve blog posts were in this state until 2026-08-06.
2. **No indexable page is missing from the sitemap.**
3. **No sitemap entry lacks a file on disk.**
4. **Never use `Disallow` to retire a page.** A disallowed URL cannot be
   crawled, so Google never sees the 301 and the URL lingers in the index
   forever. Retire with a 301; suppress with `noindex`.

### The rule for adding anything new

A page ships only if you can state, in one line each:
- the search query it targets, and
- which pillar it attaches to (`/strategy`, `/energy-partners`, or
  `/esg-impact`).

If you cannot name both, it does not get built. Volume does not grow
rankings; a tight cluster around one topic does. The 2026-08-06 Search
Console baseline is the proof: 19 blog posts produced 1 click in six months
because they pointed at five unrelated topics.

### Pillar and cluster structure

- **Pillars** (the topic hubs): `/strategy` = the stage-gated model,
  `/energy-partners` = the supply side, `/esg-impact` = the compliance and
  carbon angle.
- **Proof layer**: `/case-studies/*`, which feeds all three pillars.
- **Cluster**: each blog post attaches to exactly one pillar, links up to
  it, and is linked back down from it.

### Deferred, deliberately (next session)

Three indexed posts are on-thesis but Bitcoin-framed in title and slug:
`why-africa-is-the-future-of-bitcoin-mining`,
`bitcoin---helping-the-oil-industry-to-end-gas-flaring` (note the slug
typo, three hyphens), `stranded-energy-bitcoin-waste-recovery-explained`.
They are the only content ranking for flare-gas and Africa terms, so they
stay indexed and earning until they are rewritten flare-gas-first with
clean slugs and the old slugs 301'd. Do not noindex them before the
replacements rank.

## Google Search Console (it exists, use it)

The property is **already verified** and has data. Earlier audits wrongly
assumed it was not connected and prioritised everything qualitatively.

- Property: `sc-domain:nrgbloom.com` (Domain property, covers www and
  non-www, http and https)
- Owning account: **makir@nrgbloom.com**, NOT volcy@coldstorm.org. The
  Coldstorm account has zero properties. Never add nrgbloom.com under the
  Coldstorm account; that breaks company isolation at the account level.
- Site-wide verification meta tag:
  `google-site-verification=6tTalLzrBXBO4Gy9700TAbpg2QTKzGYEuZ_Ls69jle8`

Baseline captured 2026-08-06, covering 5 Feb to 4 Aug 2026:

- 143 clicks, 3,470 impressions, 4.1% CTR, average position 28.9
- **79 of 143 clicks come from the single query "nrg bloom"**. Every other
  query in the top ten is legacy retail-Bitcoin content with **zero**
  clicks: "bitcoin treasury management" (223 impressions, 0 clicks),
  "cryptocurrency carbon footprint" (102, 0), "bitcoin mining pool
  comparison" (48, 0).
- Not one query mentions data centers, stranded gas, flare gas, Nigeria or
  AI compute. The pivot is invisible to Google.
- 16 pages indexed, 62 not indexed.
- `/about-leadership`: 575 impressions, 5 clicks (0.87% CTR).
  `/facts-and-numbers`: 163 impressions, 1 click. Both are title and
  snippet problems, not ranking problems.
- Sitemap last read by Google on **23 Feb 2025**. Resubmit after any
  deploy.

Re-check these numbers before making any content-prune decision. Do not
prune on intuition when the data is one login away.

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
4. `strategy.html`, cleantech reframe (no product name)
5. `technology.html`, new page
6. `markets.html`, new page
7. `about-leadership.html`, team updates
8. `impact.html`, new page
