# NRG Bloom Website Upgrade Package

Oct 11, 2026 · @Makir

**Changelog**

- v4 Oct 11, 2026 (Claude, final for Claude Code): verified the NGFCP figures (Guardian Nigeria, BusinessDay) and the 2026 tracker figures beyond the World Bank page, so Sign-off items 6 and 7 are resolved and their rows now ship as Ready; tightened the NGFCP wording against the Guardian Nigeria article (minister's full title; NUPRC evaluates each award one year after it is granted); removed an unsupported "road access" criterion from the /energy-partners FAQ; marked C2 stories 2 to 4 verified; re-checked that every asset this brief references returns 200.
- v3 Oct 11, 2026: fresh crawl, per-page before/after copy, measurement and rollout, one-run execution plan.
- v2 Oct 11, 2026: aligned with X messaging pillars; see Message alignment section.

## Executive summary for Makir

1. A fresh crawl on Oct 11 (24 sitemap URLs, 12 noindexed posts, llms files, agent manifest) confirmed every v2 finding except one: www.nrgbloom.com now resolves and 301s correctly.
2. The 4 broken links on the climbing stranded-energy post are still live; a fifth 404 sits on a noindexed post, and a footer logo file 404s on 20 blog pages.
3. Noindexed posts leak in through three places, not one: the homepage cards, the /insights listing, and the related-posts block on 6 of 8 indexable posts.
4. Return-style language is wider than "3-5x": "returns from day one", "100% utilization", "triple revenue", "breakeven" and "high-margin" appear on 6 pages. Default: remove.
5. Kenya and Colombia appear on 9 surfaces, including Organization schema and ai-agent.json. Default: remove everywhere until you sign off.
6. Several facts disagree: uptime target 99.5%+ vs 99.9%, four labels for the 5 MW pipeline, stale "13+ Months", and post dates that differ across page, hub and schema.
7. The site has no analytics at all, so v3 adds lead and CTA events and a baseline you fill in before deploy.
8. v3 gives Claude Code exact before/after copy for all 24 indexable pages, so every page carries a pillar and ends with an owner CTA.
9. Anything that changes a public claim ships a safe default (keep verified wording, or remove the risky claim) and is tagged for your review.
10. v4 resolved items 6 and 7 by verifying the flaring and NGFCP figures against published sources. They ship as Ready.
11. Your part: answer the remaining sign-off items (1 to 5, 7 for the post only, 8 and 9) at the end, and capture the Semrush, Search Console and lead baseline before deploy.

## Purpose and how to use this package

This is the final, execute-in-one-go brief for Claude Code to upgrade nrgbloom.com. It is built from a live crawl on Oct 11, 2026; raw findings per URL are in `v3-audit-notes.md`. Content and copy come first. Task 5 (Insights hub restructure) stays deferred.

**What changed from v2 to v3:**

- Every indexable page now has exact BEFORE and AFTER copy for title, meta, H1, hero and CTA (Per-page change sheet).
- Items marked **Needs sign-off** no longer block the run. Claude Code ships the safe default, leaves `<!-- SIGNOFF: item N -->` in the HTML, and lists each one in its final report.
- The homepage hero no longer says "online in weeks". It reuses claims already on the site, so it is now Ready.
- New sections: One-run execution plan, Schema additions, Internal link plan, Measurement and rollout, and a short Sign-off list.
- Crawl corrections: www resolves; strategy says 99.9% uptime target (not 99.5%+); the gas flaring post (Oct 5, 2026) still cites 2024 CO₂e figures; analytics are absent.

**Status labels used in this package:**

- **Ready**: wording, structure, links or accuracy fixes that add no new public claim. Ship it.
- **Needs sign-off, item N**: changes or removes a public claim. Ship the stated safe default, tag it, report it. Makir's answer replaces the default later.
- **Closed**: decided. Do not touch (Ogboinbiri status wording, Task 3 item 7).

**Instructions for Claude Code:**

1. Read the repo's `CLAUDE.md` first. The sitemap names it as the policy source for indexing. Follow it where it conflicts with this brief, and list each conflict in the final report.
2. Follow the One-run execution plan in order. One commit per task, message prefixed with the task ID (for example `T1: fix broken blog links`).
3. Never invent statistics, sources, URLs, names or volumes. Every number must already be on the site, in the Fact Registry, or in this brief with a verified source.
4. For every **Needs sign-off** item: ship the safe default, add `<!-- SIGNOFF: item N -->` next to the changed element (HTML only; for JSON and txt files, list it in the report), and do not ship the alternative wording.
5. Run the verification commands at the end and paste their output in the final report.

**Definition of done:** zero internal 404s; no link from an indexable page (other than the /insights archive listing) to a noindexed page, except the `/discuss-partnership` form; every sitemap title 50 to 60 characters and meta 130 to 155; no banned strings in public copy; every indexable non-legal page carries at least one pillar and an owner CTA to `/energy-partners` (investor CTA on `/investor-relations`); conversion events firing; final report lists every SIGNOFF item and changed file.

## Message alignment with X (read first)

The site and the X account must say the same thing to the same people. The weekly X scoreboards show which messages earn impressions and replies; this section turns them into rules for every title, page section and post.

**Core message (one line):** "Your gas is stranded. Your compute doesn't have to wait for a grid."

**Message pillars:**

| # | Pillar | What it says | Evidence on X | Site wording it may reuse |
| --- | --- | --- | --- | --- |
| 1 | Speed to power | Power is the bottleneck, not chips. Grid hookups take years; associated gas on site plus modular generation gets online fast. | IQ-001: "Grid hookups take years. If you've got associated gas on site, modular gen can have you online in weeks. Weird how many people still wait in that queue." PB-001: "Chips aren't the scarce thing anymore. Power is." | "multi-year interconnection queues" and "three to five years to provision" (AI post); "From First Call to First Watt in Under 90 Days" (/energy-partners); "60-90 days" (strategy, case study). On the site, say "under 90 days", never "weeks". |
| 2 | NGFCP flare awards at risk | Nigeria Gas Flare Commercialisation Programme (NGFCP) awards are under pressure. Minister of State for Petroleum Resources (Gas) Ekperikpe Ekpo said about 20 of the 42 awardees had made significant progress, leaving roughly 22 yet to reach that level, based on a NUPRC report ([Guardian Nigeria, Oct 5, 2026](https://guardian.ng/news/gas-commercialisation-falters-as-22-of-42-awardees-struggle-to-develop-flare-sites/)). NUPRC evaluates each award one year after it is granted and can revoke awards without progress ([BusinessDay, Sep 2026](https://businessday.ng/energy/article/nuprc-to-revoke-gas-flare-permits-over-inaction/)). | NT-001, NGFCP-001: the only lane drawing replies. Posts end with a direct question to award holders. | Verified Oct 11 (v4). The site may state the two facts above with their sources. It never says or implies that NRG Bloom is a qualified or approved NGFCP investor. |
| 3 | Don't wait for midstream | Owners do not need a pipeline or midstream buyer to monetize associated gas. Lead with a sharp operator claim in line one. | OG-003: top post to date (about 600 impressions). | "No pipeline. No grid. No waste." (home); "no pipeline access" (/energy-partners); "no route-to-market capital required" (case study). |
| 4 | The owner's problem first | Speak to the energy owner's problem (flared gas, no route to market, lost revenue) first; investors second. Bitcoin validates, AI inference scales. | Scoreboards: stat repeats and abstract essays underperform. | "Revenue From Gas You Were Burning" (case study); "We Buy Your Gas. You Reduce Flaring." (/energy-partners). |

**Crawl gaps against the pillars (Oct 11):** pillar 1 appears only in the AI post; pillar 2 appears nowhere; 18 of the 21 other non-legal indexable pages have no in-body link to `/energy-partners`; `/insights`, `/contact`, leader pages and `/ai-agent` carry no pillar. The Per-page change sheet closes each gap.

**Audience order:**

1. Energy owners and operators, including NGFCP flare-award holders. Commercial pages and new posts are written for them.
2. Investors. Served by `/investor-relations` and the case study, using the same claims.
3. Bitcoin and crypto readers are not a target for commercial copy. Existing Bitcoin-era posts and the climbing stranded-energy post keep their topic.

**Voice rules:**

- Operator voice: write as people who build and run sites, not as commentators.
- Specifics first: the first line of a section or post carries the claim or the fact.
- Short sentences, under 25 words.
- End every commercial-page section and every X post with a question or CTA addressed to energy owners ("Have stranded or flared gas?", "Holding an NGFCP award with no capture plan yet?").
- One figure per page area. Do not repeat the same number in back-to-back sections or posts.
- No hype words: revolutionary, game-changing, the first, one of the first, unprecedented, perfect, instant, seamless, dramatic, cutting-edge, pioneer, world-class, highest standards.
- Public copy never mentions CapEx, IRR, WACC, fundraising, OEMs, LOIs or partner names.
- No en dashes or em dashes in any copy. Use a comma, colon, period or the word "to".

**Mapping rule:** every blog post and every commercial page maps to at least one pillar. The Per-page change sheet lists pillars now and after for each page; Task 7 lists them for each planned post. A draft that maps to no pillar is not published.

**Consistency and sign-off:** pillar language does not create new claims. "Online in weeks" stays on X only; the site says "under 90 days". The NGFCP figures must be fact-checked against the original article before any appear on the site.

## Context

The site's technical SEO is strong, but the content mix, broken links and a few overstated claims cap its rankings and its credibility with energy owners and investors.

**The signal that triggered this.** Semrush Position Tracking (Nigeria, mobile, English) flagged "bitcoin mining with stranded energy" jumping 52 positions to #48. The keyword has zero tracked volume, so the value is topical authority, not traffic.

**The page that is climbing** is almost certainly `/blog/stranded-energy-bitcoin-waste-recovery-explained` ("What is Stranded Energy? Why it Matters to Bitcoin", by Julie Peeters). The crawl confirms 3,616 words and 46 uses of "bitcoin mining". Confirm in Search Console before Task 4.

**What is already working, and must not regress (confirmed Oct 11):**

- robots.txt allows all crawlers, including 13 named AI and search bots, with no Disallow.
- sitemap.xml lists 24 URLs; all return 200, none is noindexed, all are self-canonical.
- Every sitemap page has a canonical, a unique title and description, and at least two JSON-LD blocks.
- `/llms.txt`, `/llms-full.txt` and `/.well-known/ai-agent.json` exist; llms.txt labels PUE <1.2 as a target.
- `https://www.nrgbloom.com/` 301s to `https://nrgbloom.com/`. HSTS is set with preload. (The http:// redirect could not be tested from the audit sandbox because port 80 timed out; re-check from a normal network.)
- Netlify Forms handle the `partnership`, `investor-pack` and `contact` forms.

**Current indexable content:** 24 sitemap URLs: 8 commercial pages (including `/insights` and the case study), `/contact`, 4 leader bios, `/ai-agent`, 8 blog posts and 2 legal pages. Twelve Bitcoin-era posts (supply squeeze plus 11 others) are `noindex, follow` and still listed on `/insights`.

## One-run execution plan for Claude Code

Work top to bottom. Each task ends with one commit. Where this plan says "grep", use `rg -n -F '<string>'` from the repo root (or `grep -rnF` if ripgrep is missing). We do not know the repo layout, so every step names the live string to search for; edit the file where it appears. If a string appears in a shared template or partial, edit it once there. If it appears in many static HTML files (likely: the live site looks like a static export served by Netlify, with relative paths such as `images/...` and `../blog_images/...`), edit every file.

### T0. Setup and baseline (no commit)

1. `git checkout -b website-upgrade-v3`.
2. Read `CLAUDE.md`. Note any rule that conflicts with this brief.
3. Find the publish directory and redirect config: `ls`, then check `netlify.toml` (`[build] publish`, `[[redirects]]`) and any `_redirects` file. Record which one the site uses.
4. Map each URL to its source file by grepping its current `<title>` from the Per-page change sheet (BEFORE line). Example: `rg -n -F '<title>NRG Bloom | Off-Grid Data Centers on Stranded Gas in Nigeria' .` Expected: one source file per URL (or one CMS entry / template). Build a table of URL to file in your working notes.
5. Find shared blocks by grepping: footer `Modular data centers deployed at off-grid sites worldwide.` (expected on every page), related posts heading `Latest news updates` (every blog post), homepage cards `Bitcoin Mining in 2025: Does the Institutional Supply Squeeze`, Organization schema `"areaServed"`.
6. Save the checker from the Verification section to `/tmp/nrg_check.py` (outside the publish directory) and run `python3 /tmp/nrg_check.py > /tmp/before.txt`. Expected now: `issues on sitemap pages: 166` or close to it (the Oct 11 crawl), including 4 BROKEN_LINK lines on the stranded energy post.
7. Detect analytics: `rg -n -i 'gtag\(|googletagmanager|G-[A-Z0-9]{6,}|GTM-|dataLayer|plausible|fathom|umami|posthog' --glob '*.{html,js,ts,tsx,jsx,njk,liquid,md}' .` The live crawl found none. Record what you find for TM.

### T1. Broken links, redirects and broken assets (commit `T1: fix broken links, redirects, broken images`)

1. In the stranded energy post source (grep `What is Stranded Energy? Why it Matters to Bitcoin`), replace these hrefs:

| Current href (404) | New href | Anchor today |
| --- | --- | --- |
| `/ai-infrastructure-stranded-energy-2026` | `/blog/ai-infrastructure-stranded-energy-2026` | AI compute infrastructure |
| `/bitcoin---helping-the-oil-industry-to-end-gas-flaring` | `/blog/bitcoin---helping-the-oil-industry-to-end-gas-flaring` | natural gas flaring |
| `/why-africa-is-the-future-of-bitcoin-mining` | `/blog/why-africa-is-the-future-of-bitcoin-mining` | Africa |
| `/carbon-footprint-and-environmental-impact-of-bitcoin-mining` | `/esg-impact` (target post is noindexed) | carbon footprint associated with Bitcoin mining |

2. Sweep the repo for any other bare blog slug: for each slug in `ls` of the blog source folder (or the 20 slugs on `/insights`), run `rg -n "href=\"/<slug>\""`. Expected after the fix: no matches.
3. In the noindexed post `comparative-analysis-of-bitcoin-mining-pools`, unlink `🔗 Live Mining Pool Dashboard` (href `/live-mining-pool-data`, 404). Keep the text without a link.
4. Add 301s as a safety net, in whichever file the site uses (`_redirects` lines shown; translate to `[[redirects]]` if `netlify.toml` is used):

```
/ai-infrastructure-stranded-energy-2026                        /blog/ai-infrastructure-stranded-energy-2026                        301
/bitcoin---helping-the-oil-industry-to-end-gas-flaring         /blog/bitcoin---helping-the-oil-industry-to-end-gas-flaring         301
/carbon-footprint-and-environmental-impact-of-bitcoin-mining   /blog/carbon-footprint-and-environmental-impact-of-bitcoin-mining   301
/why-africa-is-the-future-of-bitcoin-mining                    /blog/why-africa-is-the-future-of-bitcoin-mining                    301
```

5. Footer logo `srcset` on blog pages: grep `NRG-bloom-meta-image_1NRG-bloom-meta-image.webp`. Those files do not exist (404). Remove the `srcset` and `sizes` attributes from that `<img>` and keep `src="../images/NRG-bloom-meta-image_1.webp"`. Set `alt="NRG Bloom"` on that logo image on every page where it is `alt=""`.
6. `/insights` card image for the stranded energy post: grep `65ef8742d4af7719b02860ef_featured%20image%20wasted%20energy.webp` (Webflow CDN, returns 403). Replace with `/blog_images/65ef8742d4af7719b02860ef_featured_20imag_4a4098874ccb.webp` (the file the post itself uses). Then grep the repo for `cdn.prod.website-files.com` and `uploads-ssl.webflow.com`; for each hit, `curl -s -o /dev/null -w '%{http_code}'` the URL and replace any non-200 with the local copy under `/blog_images/` or `/images/` if one exists. List any you could not replace.

### T2. Listings: homepage cards, related posts, hub cards (commit `T2: show newest indexable posts`)

1. Homepage "Latest Insights" block (grep `Bitcoin Mining in 2025: Does the Institutional Supply Squeeze`). Target, newest first:

| Slot | Current | Replace with |
| --- | --- | --- |
| 1 | Builders, Not Theorists (Apr 22, 2026) | Burning Money: gas flaring explainer (Oct 5, 2026) → `/blog/gas-flaring-explained-waste-to-energy` |
| 2 | AI Infrastructure Meets Stranded Energy (Mar 11, 2026) | Ogboinbiri case study (Aug 6, 2026) → `/case-studies/bayelsa` |
| 3 | Bitcoin Mining in 2025: Supply Squeeze (noindex) | Builders, Not Theorists (Apr 22, 2026) → `/blog/builders-not-theorists-operational-know-how` |

If the block is generated from a collection, change the query to "three newest items without noindex, newest first" instead of hardcoding.

2. Related posts block on blog posts (heading `Latest news updates`). It shows the noindexed supply squeeze, comparative analysis and treasury posts on 6 of 8 indexable posts. Make it show the three newest indexable items other than the current page. If hardcoded, use: gas flaring explainer, case study, Builders (swap in the AI post when the current page is one of those three).
3. `/insights` card fixes (titles, dates): see Per-page change sheet page 8. Card title for the AI post becomes `AI Inference on Stranded Energy: The 2026 Landscape` on `/insights` and wherever else the old card title appears (grep `AI Infrastructure Meets Stranded Energy: The 2026 Opportunity`).

### T3. Site-wide claim strings (commit `T3: align claims site-wide`)

Grep each BEFORE string across the whole repo, including `llms.txt`, `llms-full.txt`, `.well-known/ai-agent.json` and JSON-LD blocks. Page-specific claim edits are in the Per-page change sheet and are done in TB.

| # | Grep (BEFORE) | Replace with (AFTER) | Status |
| --- | --- | --- | --- |
| a | `Modular data centers deployed at off-grid sites worldwide.` | `Modular data centers for stranded energy. Building in Nigeria.` | Ready |
| b | `300 t CO₂e` and `300t CO₂e` (also `300t` before a line break) | `300+ t CO₂e` | Ready |
| c | `approximately 300 tonnes` / `an estimated 300 tonnes` | `more than 300 tonnes` | Ready |
| d | llms.txt and llms-full.txt: `NRG Bloom deploys modular data centers on stranded and flared gas sites worldwide. Stage-gated approach: validate the site with low-CapEx workloads, harden the build, then scale to high-margin AI inference. Operational in Bayelsa State, Nigeria since February 2025, expanding to Kenya and Colombia.` | `NRG Bloom deploys modular data centers on stranded and flared gas sites in emerging markets. Stage-gated approach: validate the site with Bitcoin mining, harden the build, then scale to AI inference. Operational in Bayelsa State, Nigeria since February 2025.` | Sign-off items 1, 2, 4. Safe default ships the AFTER text |
| e | llms.txt and llms-full.txt: `- Validate sites with low-CapEx Bitcoin mining (60-90 day deployment, immediate revenue, zero SLA risk)` | `- Validate sites with Bitcoin mining (60-90 day deployment, immediate revenue, zero SLA risk)` | Sign-off item 2. Safe default ships the AFTER text |
| f | llms.txt: `/discuss-partnership.html`, `/investor-relations.html`, `/contact.html` | `/discuss-partnership`, `/investor-relations`, `/contact` | Ready |
| g | llms-full.txt: `These workloads command higher margins than Bitcoin mining while using the same energy source.` | delete the sentence | Sign-off item 1. Safe default: delete |
| h | llms-full.txt: `This is well below global grid rates for data center power, creating a structural cost advantage.` | delete the sentence | Sign-off item 1. Safe default: delete |
| i | ai-agent.json: `"Kenya",` and `"Colombia"` in the `"markets"` array | remove both entries so it reads `"markets": ["Nigeria"]`; keep valid JSON. Leave `energy_sources` as is | Sign-off item 4. Safe default: remove |
| j | Every `"areaServed"` in JSON-LD (homepage Organization, `/strategy` Service, `/energy-partners` Service): `"areaServed": ["Nigeria", "Kenya", "Colombia"]` | `"areaServed": ["Nigeria"]` | Sign-off item 4. Safe default: Nigeria only |
| q | JSON-LD `description` fields that repeat old copy: `/energy-partners` Service (`...stranded gas sites worldwide...`), `/strategy` Service (`...validate the site with low-CapEx workloads, harden the build, then scale to high-margin AI inference.`), `/about-leadership` WebPage (`...on stranded energy worldwide.`) | the page's new meta description from the Per-page change sheet | Ready (items 1 and 2 defaults apply to the strategy text) |
| r | `/investor-relations` FAQPage JSON-LD answers (contain `worldwide`, `low-CapEx`, `nuclear`, `breakeven`, `Kenya`) | mirror the visible FAQ AFTER text from the Per-page change sheet word for word | Same status as the visible edit |
| k | Organization JSON-LD `"numberOfEmployees"` block | delete the block (not stated in visible copy) | Sign-off item 5. Safe default: delete |
| l | `https://twitter.com/nrgbloom` (footer link and `sameAs`) | `https://x.com/NRGBloom` | Ready |
| m | `https://www.linkedin.com/company/nrgbloom/` (footer link and `sameAs`) | `https://linkedin.com/company/nrgbloom` | Ready |
| n | Privacy policy: `on stranded and underutilized energy sources worldwide` | `on stranded and underutilized energy sources in emerging markets` | Ready |
| o | Any remaining `Kenya` or `Colombia` used as an NRG market (not third-party geography) | delete the clause | Sign-off item 4. Safe default: delete |
| p | Any remaining `CapEx` / `low-CapEx` in public copy | delete the phrase; do not substitute "no upfront capital" | Sign-off item 2. Safe default: delete |

### TA. Titles, metas and social tags (commit `TA: titles and meta descriptions`)

For all 24 sitemap URLs, set `<title>`, `<meta name="description">`, `og:title`, `og:description`, `twitter:title`, `twitter:description` to the AFTER values in the Per-page change sheet. Add missing `og:title` and `twitter:title` (7 older posts lack them) and fill empty `og:image` / `twitter:image` with the page's hero image, or the site default `https://uploads-ssl.webflow.com/65e9c5a26e8864c80aafb002/66861d19c0b77bdc9c335fb8_NRG%20bloom%20meta%20image.webp` (returns 200 today; move it to `/images/` if a local copy exists). Leader pages also need `og:image`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`. Every character count in the sheet was computed by script; re-check with the Verification checker.

### TB. Per-page copy (commit `TB: per-page copy and CTAs`)

Apply every AFTER in the Per-page change sheet: H1, hero, CTA block and the "Other edits" table, page by page. Locate each element by grepping a distinctive fragment of its BEFORE text (drop any `...` part). Rules:

- Keep the existing HTML structure, classes and button styles. Change text and hrefs only, unless the sheet adds a new block; then copy the markup of the nearest similar block on the same page.
- Every CTA that says "See If Your Site Qualifies →", "See how energy partnerships work →", "For Energy Owners →" or "Talk to us →" links to `/energy-partners`. "Discuss a Partnership →" links to `/discuss-partnership`.
- For each row with a Sign-off status, ship the AFTER text and add `<!-- SIGNOFF: item N -->` on the line above the changed element.
- Do not touch Ogboinbiri status wording (Closed item).
- If the nrg-fact-check reference sheet lives in the repo (grep `151 bcm` outside page files), update it to the C1 figures in this commit.

### T4. Refresh the climbing article (commit `T4: refresh stranded energy article`)

See Task 4 below for the exact sections and FAQ. Do it after TB so the post's CTA and wording edits are already in.

### T6. Internal links (commit `T6: internal link plan`)

Add every link in the Internal link plan table that TB or T4 did not already add. One natural sentence per link; use the anchor text given.

### TS. Schema (commit `TS: structured data`)

Apply the Schema additions section: Organization on the homepage (replace the existing block), Article on every indexable post and the case study (fix dates and authors), FAQPage on `/energy-partners` and `/esg-impact` (new), keep existing FAQPage blocks on `/investor-relations` (add the new Q&A) and the gas flaring post. Validate each changed page at https://validator.schema.org/ or with Google's Rich Results Test and paste the result summary in the report.

### TI. Images and alt text (commit `TI: image weight and alt text`)

1. Replace `images/nuclear-data-center.png` on `/strategy` and `/investor-relations` with `images/ogboinbiri-expansion-site.webp` and alt `NRG Bloom modular data center at the Ogboinbiri site, Bayelsa State, Nigeria`.
2. Convert to WebP at max 1600 px wide, quality about 80, and update references: `images/site-aerial-profile.png` (2.1 MB), `images/expansion-infrastructure.png` (1.7 MB), `images/modular-container-wind.png` (1.6 MB), `images/conceptual-site.png` (1.1 MB), and the supply squeeze card image `680d63e174d687afe2ff49e3_featured_image.png` (2.1 MB, shown in related posts). Example: `cwebp -q 80 -resize 1600 0 in.png -o in.webp`. Keep the originals in git history only; do not delete files other pages still use (grep first).
3. Give every content image on indexable posts a descriptive alt (21 images have `alt=""`: 8 on the stranded post, 4 each on energy storage, setting up and why Africa, plus logos). Describe what the image shows in under 12 words. If you cannot tell what an image shows, list it in the report and leave `alt=""` (decorative).

### TM. Measurement (commit `TM: lead and CTA events`)

Implement the Conversion tracking part of Measurement and rollout. Reuse any analytics found in T0 step 7.

### T7. Housekeeping (commit `T7: sitemap lastmod and housekeeping`)

1. Set `<lastmod>` to the deploy date for every sitemap URL changed in this run. Update the sitemap comment `Last audited 2026-08-06` to the deploy date. Do not add or remove URLs.
2. From a normal network, confirm `curl -sIL http://nrgbloom.com/` ends in `200` at `https://nrgbloom.com/` after a 301, and `curl -sIL https://www.nrgbloom.com/` shows `301` to `https://nrgbloom.com/` then `200` (confirmed working Oct 11).
3. Add the homepage stats source line under the stat bar: `Operating figures as of August 2026, NRG Bloom measurements. See the Ogboinbiri case study for sources.` linking "Ogboinbiri case study" to `/case-studies/bayelsa`. Ready (the case study already says this).

### TV. Verify and report (no commit)

Run every command in Verification commands. Then write the final report:

1. Files changed, grouped by task ID.
2. Every `SIGNOFF` item shipped: item number, page, the default that shipped, and the alternative waiting for Makir. Get the list with `rg -n 'SIGNOFF: item' .` plus any JSON or txt edits you noted.
3. Conflicts with `CLAUDE.md`, if any.
4. Before and after output of the checker (issue counts), the banned-string result, and the schema validator summary.
5. Anything you could not do, and why.

### Verification commands

**1. Status sweep over the sitemap (bash):**

```bash
BASE=${BASE:-https://nrgbloom.com}
curl -s "$BASE/sitemap.xml" | grep -o '<loc>[^<]*' | sed 's/<loc>//' | sed "s#https://nrgbloom.com#$BASE#" > /tmp/urls.txt
while read -r u || [ -n "$u" ]; do
  printf '%s %s\n' "$(curl -s -o /dev/null -w '%{http_code}' "$u")" "$u"
done < /tmp/urls.txt | sort | tee /tmp/status.txt
grep -vc '^200 ' /tmp/status.txt   # expected: 0
wc -l < /tmp/status.txt            # expected: 24 (plus any new posts added to the sitemap)
```

**2. Full checker (status, titles, metas, canonicals, H1 count, broken links, links to noindexed pages, banned strings in visible copy and machine files).** Save as `/tmp/nrg_check.py`, run against the Netlify deploy preview first (`python3 /tmp/nrg_check.py https://deploy-preview-N--<site>.netlify.app`), then production after deploy.

```python
#!/usr/bin/env python3
"""NRG Bloom live-site check: status, titles, metas, canonicals, robots, internal links.
Usage: python3 nrg_check.py [base_url]   (stdlib only)"""
import sys, re, urllib.request, urllib.error
from html.parser import HTMLParser
from urllib.parse import urljoin, urlparse
BASE = (sys.argv[1] if len(sys.argv) > 1 else "https://nrgbloom.com").rstrip("/")
UA = {"User-Agent": "Mozilla/5.0 nrg-check"}
ALLOWED_NOINDEX_TARGETS = {"/discuss-partnership"}  # form page, noindex by design
ALLOWED_NOINDEX_SOURCES = {"/insights"}  # archive links stay until Task 5 (deferred) ships

BANNED = [r"151 ?b", r"3-5x", r"worldwide", r"\bprofitable\b", r"\bcapex\b", r"\birr\b", r"\bwacc\b",
    r"fundrais", r"\bLOI\b", r"\bviraj\b", r"\bgena\b", r"kenya", r"colombia", r"high(er)?[- ]margin",
    r"breakeven", r"100% utili", r"triple", r"zero idle", r"returns from day one", r"infrastructure returns",
    r"revolutionary", r"game[- ]chang", r"\b(the|one of the) first (company|companies|operator|energy compan|to )",
    r"unprecedented", r"\bperfect\b", r"\binstant", r"seamless", r"dramatic", r"cutting[- ]edge", r"pioneer",
    r"world[- ]class", r"highest standards", "[\u2013\u2014]"]
# Allowed hits: (path, pattern) where the word is third-party context, not an NRG claim.
ALLOW = {("/blog/stranded-energy-bitcoin-waste-recovery-explained", "kenya"),
         ("/blog/why-africa-is-the-future-of-bitcoin-mining", "kenya"),
         ("/blog/gas-flaring-explained-waste-to-energy", r"\binstant"),
         ("/blog/gas-flaring-explained-waste-to-energy", "pioneer"),
         ("/blog/stranded-energy-bitcoin-waste-recovery-explained", "fundrais")}
class T(HTMLParser):
    def __init__(s):
        super().__init__(); s.skip = 0; s.out = []
    def handle_starttag(s, tag, a):
        if tag in ("script", "style", "noscript"): s.skip += 1
    def handle_endtag(s, tag):
        if tag in ("script", "style", "noscript") and s.skip: s.skip -= 1
    def handle_data(s, d):
        if not s.skip: s.out.append(d)
def banned_hits(path, text):
    hits = []
    for pat in BANNED:
        if (path, pat) in ALLOW: continue
        for m in re.finditer(pat, text, re.I):
            hits.append(f"BANNED '{pat}': ...{text[max(0, m.start()-40):m.end()+40].strip()}...")
    return hits

def get(url):
    req = urllib.request.Request(url, headers=UA)
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return r.status, r.geturl(), r.read().decode("utf-8", "ignore")
    except urllib.error.HTTPError as e:
        return e.code, url, ""
    except Exception as e:
        return 0, url, ""
class P(HTMLParser):
    def __init__(s):
        super().__init__(); s.title=""; s.in_t=False; s.meta={}; s.links=[]; s.canon=""; s.h1=0
    def handle_starttag(s, tag, a):
        a = dict(a)
        if tag == "title": s.in_t = True
        if tag == "h1": s.h1 += 1
        if tag == "meta" and a.get("name") in ("description", "robots"): s.meta[a["name"]] = a.get("content") or ""
        if tag == "link" and a.get("rel") == "canonical": s.canon = a.get("href") or ""
        if tag == "a" and a.get("href"): s.links.append(a["href"])
    def handle_endtag(s, tag):
        if tag == "title": s.in_t = False
    def handle_data(s, d):
        if s.in_t: s.title += d
st, _, sm = get(BASE + "/sitemap.xml")
PROD = "https://nrgbloom.com"
pages = [l.replace(PROD, BASE) for l in re.findall(r"<loc>([^<]+)</loc>", sm)]
_, _, hub = get(BASE + "/insights")
pages += [urljoin(BASE, h) for h in re.findall(r'href="(/blog/[^"#?]+)"', hub)]
pages = list(dict.fromkeys(pages))
cache, problems = {}, 0
def check(path):
    if path not in cache:
        s, final, html = get(BASE + path)
        p = P(); p.feed(html)
        cache[path] = (s, "noindex" in p.meta.get("robots", "").lower())
    return cache[path]
sitemap_set = set(pages[:len(re.findall(r"<loc>", sm))])
for u in pages:
    s, final, html = get(u); p = P(); p.feed(html)
    path = urlparse(u).path or "/"
    noidx = "noindex" in p.meta.get("robots", "").lower()
    cache[path] = (s, noidx)
    t = p.title.strip(); m = p.meta.get("description", "").strip()
    flags = []
    if s != 200: flags.append(f"STATUS {s}")
    if u in sitemap_set:
        if noidx: flags.append("NOINDEX_IN_SITEMAP")
        if (urlparse(p.canon).path.rstrip("/") or "/") != (path.rstrip("/") or "/"): flags.append(f"CANONICAL {p.canon}")
        if not (50 <= len(t) <= 60): flags.append(f"TITLE_LEN {len(t)}")
        if not (130 <= len(m) <= 155): flags.append(f"META_LEN {len(m)}")
        if p.h1 != 1: flags.append(f"H1_COUNT {p.h1}")
        tx = T(); tx.feed(html); text = re.sub(r"\s+", " ", " ".join(tx.out))
        flags += banned_hits(path, text)
    for h in p.links:
        if h.startswith(("mailto:", "tel:", "#", "javascript:")): continue
        full = urljoin(u, h); pu = urlparse(full)
        if pu.netloc not in ("nrgbloom.com", "www.nrgbloom.com", urlparse(BASE).netloc): continue
        tp = pu.path or "/"
        if re.search(r"\.(png|jpe?g|webp|svg|pdf|txt|xml|json|avif)$", tp): continue
        ts, tno = check(tp)
        if ts != 200: flags.append(f"BROKEN_LINK {tp} ({ts})")
        elif tno and not noidx and tp not in ALLOWED_NOINDEX_TARGETS and path not in ALLOWED_NOINDEX_SOURCES and u in sitemap_set:
            flags.append(f"LINKS_TO_NOINDEX {tp}")
    tag = "INDEX" if not noidx else "noindex"
    print(f"{s} [{tag}] {path} | title {len(t)} | meta {len(m)}" + ("" if not flags else "\n    " + "\n    ".join(sorted(set(flags)))))
    if u in sitemap_set: problems += len(set(flags))
for mf in ("/llms.txt", "/llms-full.txt", "/.well-known/ai-agent.json"):
    ms, _, body = get(BASE + mf)
    mh = banned_hits(mf, body) + ([f"STATUS {ms}"] if ms != 200 else [])
    print(f"{ms} [machine] {mf}" + ("" if not mh else "\n    " + "\n    ".join(mh)))
    problems += len(mh)
print(f"\nSitemap URLs: {len(sitemap_set)} | pages checked: {len(pages)} | issues on sitemap pages: {problems}")
```

Expected after this run: every sitemap page prints with no flags; the three machine files print with no flags; no BROKEN_LINK line appears anywhere, including noindexed posts; the last line reads `issues on sitemap pages: 0`. On the Oct 11 crawl the same script reported 166 issues: 4 broken links on sitemap pages (plus 1 on a noindexed post), 21 links from indexable pages to noindexed posts, 35 title or meta length flags, and 106 banned-string hits (91 on pages, 15 in the machine files).

**3. Repo grep for banned strings and dashes in source copy (bash, from repo root):**

```bash
# Files that are noindexed posts are excluded; review any hit in the rest.
NOIDX=$(rg -l 'content="noindex' --glob '*.html' . | sed 's#^\./##')
EXCL=$(for f in $NOIDX; do printf -- "--glob=!%s " "$f"; done)
rg -n -i $EXCL --glob '*.{html,md,njk,liquid,json,txt,yml,yaml}' \
  -e '151 ?b' -e '3-5x' -e 'worldwide' -e '\bprofitable\b' -e '\bcapex\b' -e '\birr\b' -e '\bwacc\b' \
  -e 'fundrais' -e '\bLOI\b' -e '\bviraj\b' -e '\bgena\b' -e 'kenya' -e 'colombia' \
  -e 'high(er)?[- ]margin' -e 'breakeven' -e 'triple' -e '100% utili' -e 'zero idle' \
  -e 'revolutionary' -e 'game[- ]chang' -e 'unprecedented' -e '\bperfect\b' -e 'seamless' \
  -e 'dramatic' -e 'cutting[- ]edge' -e 'world[- ]class' -e 'highest standards' -e 'one of the first' .
# Expected: only the allowed third-party mentions: "Kenya" in the stranded energy and why-Africa posts,
# "fundraising" (a Moroccan project) in the stranded energy post. Ignore hits inside this brief or CLAUDE.md.

rg -n $EXCL --glob '*.{html,md,njk,liquid,json,txt}' '[\x{2013}\x{2014}]' .
# Expected: 0 lines. Fallback without ripgrep: grep -rnP '[\x{2013}\x{2014}]' --include='*.html' .

rg -n 'SIGNOFF: item' .        # Expected: one line per shipped default (list them in the report)
rg -n '"areaServed"' -A3 .     # Expected: only "Nigeria"
rg -n 'twitter\.com/nrgbloom' . # Expected: 0 lines
```

**4. Title and meta length check on source (optional, if titles live in front matter or HTML):** the checker in step 2 already verifies live output; trust that over source.

**5. Link checker approach:** the checker in step 2 crawls every sitemap URL plus every `/blog/` link on `/insights`, resolves every internal `<a href>`, fetches each unique target once, and flags non-200 targets and indexable-to-noindex links. For a second opinion, `npx linkinator https://nrgbloom.com --recurse --skip "^(?!https://nrgbloom.com)"` lists broken links site-wide. Expected: 0 broken.

**6. Machine files:** `curl -s https://nrgbloom.com/.well-known/ai-agent.json | python3 -m json.tool > /dev/null && echo valid` (expected: `valid`).

**7. Image weight (bash, from the publish directory):**

```bash
noidx=$(rg -l -i '<meta[^>]+name="robots"[^>]+noindex' --glob '*.html' . | sort)
find . -type f \( -name '*.png' -o -name '*.jpg' -o -name '*.jpeg' -o -name '*.webp' \) -size +500k | while read -r f; do
  n=$(basename "$f")
  rg -l --fixed-strings "$n" --glob '*.html' . | sort | comm -23 - <(echo "$noidx") | sed "s|^|$n used by |"
done
# Expected: no output (no image over 500 KB on an indexable page). List any remaining hits in the report.
```

## Per-page change sheet (all 24 indexable pages)

BEFORE values are the live site on Oct 11, 2026. AFTER values are final copy. Character counts were computed by script; titles are 50 to 60 characters and metas 130 to 155. Every non-legal page gets at least one pillar and an owner CTA to `/energy-partners` (investor CTA plus owner link on `/investor-relations`). Statuses follow the labels defined at the top. Page-specific claim edits live here; site-wide strings live in T3.

**Title and meta summary (AFTER):**

| Page | Title AFTER | Chars | Meta chars |
| --- | --- | --- | --- |
| `/` | Off-Grid Data Centers on Stranded & Flared Gas \| NRG Bloom | 58 | 155 |
| `/energy-partners` | Flare Gas Monetization: Revenue for Gas Owners \| NRG Bloom | 58 | 154 |
| `/strategy` | Modular Data Center Deployment: Speed to Power \| NRG Bloom | 58 | 150 |
| `/investor-relations` | Data Center Investment in Africa: Speed to Power \| NRG Bloom | 60 | 153 |
| `/case-studies/bayelsa` | Flare Gas Data Center in Nigeria: Case Study \| NRG Bloom | 56 | 153 |
| `/esg-impact` | Gas Flaring Carbon Credits & Methane Mitigation \| NRG Bloom | 59 | 146 |
| `/about-leadership` | Off-Grid Data Center Team: About & Leadership \| NRG Bloom | 57 | 147 |
| `/insights` | Stranded Energy & Gas Flaring Insights \| NRG Bloom | 50 | 147 |
| `/contact` | Contact Us: Gas Owners, Partners and Investors \| NRG Bloom | 58 | 149 |
| `/makir-volcy` | Makir Volcy, Founder & CEO: Off-Grid Compute \| NRG Bloom | 56 | 149 |
| `/julie-peeters` | Julie Peeters, Co-Founder: Operations Director \| NRG Bloom | 58 | 140 |
| `/jordane-volcy` | Jordane Volcy: Engineering Off-Grid Data Centers \| NRG Bloom | 60 | 142 |
| `/gus-anyim` | Gus Anyim, Head of Commercial: Energy Partners \| NRG Bloom | 58 | 143 |
| `/ai-agent` | AI Agent Access: llms.txt and Structured Data \| NRG Bloom | 57 | 150 |
| `/blog/gas-flaring-explained-waste-to-energy` | What Is Gas Flaring? Causes, Impact, Solutions \| NRG Bloom | 58 | 145 |
| `/blog/builders-not-theorists-operational-know-how` | Builders, Not Theorists: Operational Know-How \| NRG Bloom | 57 | 144 |
| `/blog/ai-infrastructure-stranded-energy-2026` | AI Inference on Stranded Energy: 2026 Landscape \| NRG Bloom | 59 | 150 |
| `/blog/stranded-energy-bitcoin-waste-recovery-explained` | What Is Stranded Energy? Why It Matters to Bitcoin | 50 | 144 |
| `/blog/energy-storage-solutions-for-stranded-energy` | Energy Storage for Stranded Energy, Compared \| NRG Bloom | 56 | 146 |
| `/blog/bitcoin---helping-the-oil-industry-to-end-gas-flaring` | Bitcoin Mining and Gas Flaring in African Oil \| NRG Bloom | 57 | 142 |
| `/blog/nrg-bloom-setting-up-in-africa` | Setting Up in Nigeria: Off-Grid Power, Compute \| NRG Bloom | 58 | 149 |
| `/blog/why-africa-is-the-future-of-bitcoin-mining` | Why Africa Is the Future of Bitcoin Mining \| NRG Bloom | 54 | 150 |
| `/privacy-policy` | Privacy Policy: How We Collect and Protect Data \| NRG Bloom | 59 | 144 |
| `/terms-of-service` | Terms of Service for Using nrgbloom.com \| NRG Bloom | 51 | 148 |

### 1. `/` (Homepage)

Primary keyword: off-grid data center. Pillars now: Partial 3, partial 4. Pillars after: 1, 3, 4.

**Title tag**
- BEFORE (60 chars): NRG Bloom | Off-Grid Data Centers on Stranded Gas in Nigeria
- AFTER (58 chars): Off-Grid Data Centers on Stranded & Flared Gas | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (163 chars): NRG Bloom deploys off-grid data centers on stranded and flared gas in emerging markets, operational in Bayelsa State, Nigeria since February 2025. Partner with us.
- AFTER (155 chars): NRG Bloom builds off-grid data centers on stranded and flared gas, live in Bayelsa State, Nigeria since February 2025. No grid queue. Have gas? Talk to us.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Off-grid data centers on stranded gas.
- AFTER: Your gas is stranded. Your compute doesn't have to wait for a grid.
- Status: Ready. Move the old H1 text into the eyebrow line above the H1, replacing "Powering the Future from Stranded Energy". No new fact: "No grid" is already on the page.

**Hero / intro paragraph**
- BEFORE: We deploy modular compute infrastructure at off-grid energy sites worldwide, converting stranded gas from an environmental liability into AI-ready processing power.
- AFTER: We build modular data centers on stranded and flared gas sites in emerging markets. Grid hookups take years. Power made on site does not wait. Bitcoin validates the site. AI inference scales it.
- Status: Ready. "Grid hookups take years" restates the AI post's "multi-year interconnection queues".

**CTA block**
- BEFORE: Hero buttons: "Investor Relations →" (/investor-relations), "Partner With Us →" (/energy-partners). Closing block H2 "Turn Environmental Liability into Digital Asset"; body "Whether you're an energy producer with stranded gas or an investor seeking de-risked infrastructure returns, let's talk."; buttons "Discuss Partnership →" (/discuss-partnership), "View Investor Materials →" (/investor-relations).
- AFTER: Hero buttons: primary "Have stranded or flared gas? Talk to us →" (/energy-partners), secondary "Investor Relations →" (/investor-relations). Closing block H2 "Have Stranded or Flared Gas? Put It to Work."; body "Tell us where you flare today. We assess the site, deploy modular compute, and you earn from gas you were burning. Investors can review the same figures on our investor page."; buttons "See If Your Site Qualifies →" (/energy-partners), "View Investor Materials →" (/investor-relations).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Stat bar | 5 MW Under Development | 5 MW Pipeline Under Development | Needs sign-off, item 3. Safe default ships: "5 MW Pipeline Under Development" (the case study's own definition). |
| Stat bar | 300 t CO₂e Mitigated | 300+ t CO₂e Mitigated | Ready |
| The Opportunity paragraph | 151 billion cubic meters of natural gas were flared in 2024, the highest level since 2007, wasting roughly $63 billion in energy. NRG Bloom captures this resource at the wellhead and converts it into high-performance compute, turning a regulatory burden for energy producers into a revenue-generating asset. | 167 billion cubic meters of gas were flared in 2025, the third straight annual rise and the highest level since 2019. NRG Bloom puts that gas to work at the wellhead. A regulatory burden for energy producers becomes revenue. | Ready (World Bank 2026 tracker, verified on worldbank.org Oct 11). |
| The Opportunity stat card | 151B cubic meters of gas flared in 2024, close to Africa's total annual gas consumption (World Bank) | $54B value of gas flared in 2025, from a volume that matches Africa's annual gas consumption (World Bank, 2026) | Ready. Different figure from the paragraph, per the no-adjacent-repeat rule. |
| Eyebrow above H2 "Every Site Earns Before It Scales" | Why We're Profitable | Why Every Site Pays for Its Next Stage | Ready |
| Stage 1 card body | Immediate BTC revenue while proving the site works, low CapEx, high signal. | Immediate BTC revenue while proving the site works. If a site fails validation, the equipment is redeployed. | Needs sign-off, item 2. Safe default ships: this AFTER text (removes CapEx; redeploy wording is from the case study). |
| Stage 1 tiles | ~90 days Deployment / Low CapEx Risk / BTC Revenue Stream | 60-90 days Deployment / Redeployable Equipment / BTC Revenue Stream | Needs sign-off, item 2. Safe default ships: this AFTER text. |
| Stage 3 eyebrow | High-Margin AI Compute | AI Compute on Proven Sites | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| Stage 3 body | Deploy GPU clusters for AI inference at a fraction of grid-powered costs. | Deploy GPU clusters for AI inference on sites that have already proven their power. | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| Stage 3 tiles | $0.03 Per kWh / GPU AI Inference / 3-5x Margin vs Grid | $0.03 Per kWh / GPU AI Inference (delete the 3-5x tile) | Needs sign-off, item 1. Safe default ships: delete the 3-5x tile. |
| Latest Insights H2 | Stay in the Know | Latest From the Field | Ready (also see Task 2 for the cards). |
| Footer, every page | Modular data centers deployed at off-grid sites worldwide. | Modular data centers for stranded energy. Building in Nigeria. | Ready |

### 2. `/strategy` (Strategy)

Primary keyword: modular data center deployment. Pillars now: None clearly. Pillars after: 1, 4.

**Title tag**
- BEFORE (55 chars): NRG Bloom | Strategy: Off-Grid Compute, Built in Stages
- AFTER (58 chars): Modular Data Center Deployment: Speed to Power | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (137 chars): NRG Bloom's stage-gated approach to off-grid compute: validate, harden, scale. Operational in Bayelsa State, Nigeria since February 2025.
- AFTER (150 chars): Power, not chips, limits compute. NRG Bloom deploys modular data centers on stranded gas: Bitcoin validates the site, AI inference scales it. See how.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Off-grid compute, built in stages.
- AFTER: Modular data center deployment, built in stages.
- Status: Ready

**Hero / intro paragraph**
- BEFORE: A stage-gated deployment model that de-risks off-grid compute. Validate the site, harden the build, scale to AI inference.
- AFTER: Power is the bottleneck for compute, not chips. Grid interconnection queues run for years. We deploy modular data centers on stranded gas instead. Bitcoin validates the site. AI inference scales it.
- Status: Ready

**CTA block**
- BEFORE: H2 "Turn Stranded Energy Into Compute Revenue"; body "Whether you're an energy partner, investor, or compute buyer, let's explore how stranded energy becomes compute revenue."; buttons "Discuss a Partnership →" (/discuss-partnership), "Investor Relations →".
- AFTER: H2 "Have Flared Gas and No Grid Connection?"; body "Your site does not need a pipeline or a grid queue. Tell us about your gas, and we will tell you if it fits Stage 1."; buttons "See If Your Site Qualifies →" (/energy-partners), "Investor Relations →" (/investor-relations).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| New paragraph after the How It Works intro (Task 6) | (none) | Behind-the-meter means power is generated and used on the same site, without passing through a utility grid. Our sites run behind the meter on associated gas. There is no interconnection queue to join. | Ready |
| How It Works intro | Every site follows the same discipline: validate with hashrate, harden for uptime, then deploy GPU compute for maximum margin. | Every site follows the same discipline: validate with hashrate, harden for uptime, then deploy GPU compute. | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| Why Bitcoin First | which makes it the perfect operational proof of concept. | which makes it a practical operational proof of concept. | Ready |
| Tile heading | Instant Revenue | Revenue From Its First Block | Ready |
| Tile body | Bitcoin mining generates income from the first block. No ramp-up, no customer acquisition, just plug in and earn. | Bitcoin mining earns from its first block. No ramp-up and no customer acquisition. | Ready |
| Tile body | Perfect for unproven environments. | Suited to unproven environments. | Ready |
| Stage 2 tiles | 99.9% Uptime Target | 99.5%+ Uptime Target | Needs sign-off, item 5. Safe default ships: 99.5%+, matching the homepage. |
| Stage 2 tiles | BTC Funds CapEx | Stage 1 Revenue Funds Stage 2 | Ready (homepage already says "funded by Stage 1 revenue"). |
| Stage 3 body | Our load orchestration continuously allocates power between high-margin AI workloads and stable baseline workloads. | Our load orchestration continuously allocates power between AI workloads and stable baseline workloads. | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| Stage 3 bullets | Bitcoin mining absorbs 100% of off-peak capacity / Generators never idle, PPA always maximized | Bitcoin mining absorbs off-peak capacity / Generators stay at steady load | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| Stage 3 tiles | 5 MW Target Capacity / GPU AI Inference / 100% Utilization | 5 MW Pipeline Under Development / GPU AI Inference / Dynamic Load Balancing | Needs sign-off, item 1. Safe default ships: this AFTER text (item 3 sets the 5 MW label). |
| Image | images/nuclear-data-center.png, alt "Nuclear-powered data center facility" (9.0 MB) | images/ogboinbiri-expansion-site.webp, alt "NRG Bloom modular data center at the Ogboinbiri site, Bayelsa State, Nigeria" | Ready. Existing image and alt from the case study. |
| New in-body link (Stage 3) | (none) | Read more on AI inference on stranded energy → /blog/ai-infrastructure-stranded-energy-2026 | Ready |

### 3. `/energy-partners` (Energy Partners (owner hub))

Primary keyword: flare gas monetization. Pillars now: 3, 4. Pillars after: 1, 2, 3, 4.

**Title tag**
- BEFORE (69 chars): Energy Partners | NRG Bloom: Monetize Your Flare Gas Asset in Nigeria
- AFTER (58 chars): Flare Gas Monetization: Revenue for Gas Owners | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (133 chars): NRG Bloom converts stranded gas, curtailed renewables, and off-grid power into compute revenue, at zero CapEx to the energy producer.
- AFTER (154 chars): Turn flared or stranded gas into a revenue share. Modular compute at your site, first power in under 90 days, no grid queue. Have gas? See if you qualify.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Your Stranded Gas. Our Compute Infrastructure. A Shared Revenue Model.
- AFTER: Monetize Your Flare Gas. Our Compute, Your Revenue Share.
- Status: Ready

**Hero / intro paragraph**
- BEFORE: NRG Bloom deploys modular data centers at your energy site, converting flared gas, curtailed renewables, or off-grid power into productive compute revenue. Zero CapEx to you.
- AFTER: Don't wait for a pipeline or a midstream buyer. NRG Bloom deploys modular data centers at your site and buys the gas you flare today. We deploy, own, and operate all compute infrastructure on site.
- Status: Needs sign-off, item 2. Safe default ships: this AFTER text. If Makir approves, append: "No upfront capital required from the energy producer in our standard model." Leave <!-- SIGNOFF: item 2 --> at that spot.

**CTA block**
- BEFORE: H2 "Have Stranded Energy? Let's Talk."; body "Whether you operate a gas field, a wind farm, or a hydro plant, if you have power going to waste, we can turn it into revenue."; buttons "Discuss a Partnership →" (/discuss-partnership), "View Our Strategy →".
- AFTER: H2 "Have Stranded or Flared Gas? Let's Talk."; body "Tell us your site location and gas volume. We assess the site and reply directly. We also review curtailed renewable sites."; buttons "Discuss a Partnership →" (/discuss-partnership), "View Our Strategy →" (/strategy).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| $0.03 stat card | All-in energy cost under a community-based power purchase agreement, well below the mining industry breakeven | All-in energy cost under a community-based power purchase agreement | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| New line under H2 "From First Call to First Watt in Under 90 Days" | (none) | Grid hookups take years. Gas on your site plus modular generation does not wait for one. | Ready |
| How It Works step 2 | Sign a GPA, ship a containerized compute unit, and connect to your gas supply. | Sign a gas purchase agreement (GPA), ship a containerized compute unit, and connect to your gas supply. | Ready |
| How It Works step 3 | NRG Bloom operates the facility. You earn gas revenue and carbon credits. | NRG Bloom operates the facility. You earn gas revenue. Carbon credits are a potential future stream; none have been issued to date. | Ready. Fixes a claim that contradicts /esg-impact and /investor-relations. |
| New block before Ideal Partner Profile (pillar 2) | (none) | H3 "Holding an NGFCP flare site award?" Body: "Nigeria's gas minister said in October 2026 that about 22 of the 42 NGFCP awardees had yet to make significant progress. NUPRC reviews each award a year after it is granted and can revoke it. If your award has no capture plan yet, talk to us about putting the gas to work on site." Link "said in October 2026" to https://guardian.ng/news/gas-commercialisation-falters-as-22-of-42-awardees-struggle-to-develop-flare-sites/. Link: "Discuss a Partnership →" (/discuss-partnership). | Ready (v4: figures verified Oct 11 against Guardian Nigeria and BusinessDay). No claim about NRG Bloom's own NGFCP status. |
| Further Reading (add a second link) | (one link: Burning Money) | Add: "New to the term? Read what stranded energy is →" (/blog/stranded-energy-bitcoin-waste-recovery-explained) | Ready |
| New FAQ block before the closing CTA | (none) | Five Q&As listed in the Schema section (FAQPage for /energy-partners). All answers reuse existing site claims. | Ready |

### 4. `/investor-relations` (Investor Relations)

Primary keyword: data center investment Africa. Pillars now: None. Pillars after: 1 (investor CTA).

**Title tag**
- BEFORE (69 chars): Investors | NRG Bloom: Data Center Infrastructure in Nigeria & Africa
- AFTER (60 chars): Data Center Investment in Africa: Speed to Power | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (165 chars): NRG Bloom converts stranded energy into productive compute revenue. 1 MW energized in Bayelsa State, Nigeria, operational since February 2025. $0.03/kWh energy cost.
- AFTER (153 chars): 1 MW off-grid data center live on flared gas in Nigeria since 2025, energy at $0.03/kWh. Power is the bottleneck for compute. Request investor materials.
- Status: Needs sign-off, item 5. Safe default ships: this AFTER meta ($0.03/kWh is the current on-site figure). Mirror into og:description and twitter:description.

**H1**
- BEFORE: De-Risked Infrastructure. Transparent Metrics. Institutional Access.
- AFTER: Off-Grid Data Center Investment in Africa, Proven on Flared Gas
- Status: Ready

**Hero / intro paragraph**
- BEFORE: NRG Bloom converts stranded energy into productive compute revenue. Our stage-gated model validates before scaling, generating returns from day one.
- AFTER: Power is the bottleneck for compute, not chips. NRG Bloom builds off-grid data centers on flared gas, with no grid queue. Each site is validated before more capital is committed.
- Status: Needs sign-off, item 1. Safe default ships: this AFTER text (removes "generating returns from day one").

**CTA block**
- BEFORE: H2 "Ready to Explore the Opportunity?"; body "Request the investor pack or schedule a direct conversation with our founder."; buttons "Request Investor Pack →" (#request), "View Our Strategy →".
- AFTER: H2 "Evaluating Off-Grid Infrastructure Investment?"; body "Request the investor pack or book a call with our founder. Own the gas site yourself? Start on our energy partners page."; buttons "Request Investor Pack →" (#request), "For Energy Owners →" (/energy-partners).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Stat bar | 300t CO₂e Methane Mitigated | 300+ t CO₂e Methane Mitigated | Ready |
| Thesis card 1 | Heading "Structural Cost Moat"; body "Energy at $0.03/kWh, well below industry breakeven. This isn't optimization, it's a fundamentally different cost structure." | Heading "Low Energy Cost"; body "Energy at $0.03/kWh under a community-based power purchase agreement, from gas with no alternative buyer." | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| Thesis card 2 | Every site earns revenue from day one via Bitcoin mining. No speculative CapEx. Each stage funds the next. | Every site earns revenue from day one via Bitcoin mining. Each stage funds the next. | Needs sign-off, item 2. Safe default ships: this AFTER text. |
| Thesis card 3 | ...between AI inference (high margin) and Bitcoin mining (always-on baseline). 100% utilization, zero idle watts. | ...between AI inference and Bitcoin mining (always-on baseline). | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| Track record H3 | 13+ Months. Real Infrastructure. Real Revenue. | Operating Since February 2025. Real Infrastructure. Real Revenue. | Ready (13+ is stale; date is the existing fact). |
| Track record bullets | Expansion to Kenya and Colombia in pipeline | (delete bullet) | Needs sign-off, item 4. Safe default ships: delete. |
| FAQ: What does NRG Bloom do? | ...at stranded energy sites worldwide, converting wasted gas, curtailed renewables, and off-grid power... | ...at stranded and flared gas sites in emerging markets, converting wasted gas, curtailed renewables, and off-grid power... | Ready |
| FAQ: deployment model | Stage 1: validate the site with low-CapEx Bitcoin mining (immediate revenue, zero SLA risk). | Stage 1: validate the site with Bitcoin mining (immediate revenue, zero SLA risk). | Needs sign-off, item 2. Safe default ships: this AFTER text. |
| FAQ: utilization | ...between high-margin AI workloads and always-on Bitcoin mining based on live economic signals. Works with any power input from flare gas to nuclear. | ...between AI workloads and always-on Bitcoin mining based on live economic signals. | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| FAQ: where | Pipeline markets include Kenya (curtailed renewables) and Colombia (hydroelectric). | (delete sentence) | Needs sign-off, item 4. Safe default ships: delete. |
| FAQ: energy cost | ...well below the mining industry breakeven. This structural cost moat comes from using energy that has no alternative buyer. We're not competing for grid power; we're monetizing waste. | ...from energy that has no alternative buyer. We're not competing for grid power; we're monetizing waste. | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| FAQ: carbon credits | ...making each site a triple-revenue generator: compute, gas purchase fees, and carbon credits. | ...adding a potential revenue stream on top of compute and gas purchase fees. | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| FAQ: how to invest | ...to request the investor deck, financial model, or schedule a call. | ...to request the investor pack or schedule a call. | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| New FAQ (Task 6 secondaries) | (none) | Q "Why off-grid infrastructure investment in Africa?" A "Power is the bottleneck for AI inference infrastructure in Africa, as elsewhere. Our first site has run on flared gas in Bayelsa State, Nigeria since February 2025." | Ready |
| Image | images/nuclear-data-center.png, alt "Nuclear-powered data center facility" | images/ogboinbiri-expansion-site.webp with the case study alt | Ready |
| New in-body link (thesis section) | (none) | "See the flare gas data center in Nigeria →" (/case-studies/bayelsa) | Ready |

### 5. `/case-studies/bayelsa` (Ogboinbiri case study)

Primary keyword: flare gas data center Nigeria. Pillars now: 3, 4. Pillars after: 3, 4.

**Title tag**
- BEFORE (79 chars): Case Study: Off-Grid Data Center on Flared Gas, Ogboinbiri, Nigeria | NRG Bloom
- AFTER (56 chars): Flare Gas Data Center in Nigeria: Case Study | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (222 chars): A live, off-grid data center running on flared gas in Ogboinbiri, Bayelsa State, Nigeria since February 2025. 1 MW energized, 94% uptime, 300+ tonnes CO2e mitigated. Stage-gated from Bitcoin validation toward AI inference.
- AFTER (153 chars): A 1 MW off-grid data center running on flared gas in Bayelsa State, Nigeria since February 2025: 94% uptime, 300+ t CO₂e mitigated. See how it was built.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: An off-grid data center running on flared gas since February 2025
- AFTER: No change (Task 3 item 7 is closed)
- Status: Ready

**Hero / intro paragraph**
- BEFORE: Since February 2025, NRG Bloom has run a modular, off-grid data center in Ogboinbiri, Bayelsa State, Nigeria, powered by gas that was being flared for zero value. The site is energized at 1 MW, has held 94% uptime, and pays the local community for the power it uses.
- AFTER: No change (Task 3 item 7 is closed).
- Status: Ready

**CTA block**
- BEFORE: H2 "Have stranded or flared gas?"; body "If you operate a site with 5 MW or more of stranded or flared gas, we should talk. If you invest in infrastructure, the numbers are published."; buttons "Discuss a Partnership →" (/energy-partners), "Review the Thesis →" (/investor-relations).
- AFTER: H2 "Have stranded or flared gas?"; body "If you operate a site with 5 MW or more of stranded or flared gas, we should talk. You do not need a pipeline or a grid connection first. Investors can request the investor pack."; buttons "Discuss a Partnership →" (/energy-partners), "Review the Thesis →" (/investor-relations).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Problem paragraph 1 | Global gas flaring reached 151 billion cubic meters in 2024, the highest level since 2007, releasing 389 million tonnes of CO<sub>2</sub>e (markup) and wasting energy worth roughly $63 billion. [1] Nigeria is among the nine countries responsible for the large majority of it. | Global gas flaring reached 167 billion cubic meters in 2025, the third straight annual rise and the highest level since 2019. The gas was worth about $54 billion. [1] Nigeria is among the nine countries that account for 83% of global flaring. [1] | Ready (v4: 83% verified, see C1). |
| Problem paragraph 2 (Nigeria) | Nigeria's flared volume rose 12% in 2024... It was the second consecutive year of increase. [1] | Keep the 2024 text, re-cited to the 2025 tracker as reference [2], opening with "In 2024, per the World Bank's 2025 tracker,". Then add: "In 2025, Nigeria's flared volume rose a further 8%, in step with an 8% rise in oil output. [1]" | Ready (v4: 2025 figure verified, see C1). |
| References | 1. World Bank ... 2025 Global Gas Flaring Tracker Report, July 2025 ... | 1. World Bank GFMR, 2026 Global Gas Flaring Tracker Report, June 23, 2026 (link). 2. World Bank, 2025 Global Gas Flaring Tracker Report, July 2025 (keep existing link and Nigeria notes; delete the 151 bcm, 389 Mt and $63 billion notes). Renumber the rest. | Ready |
| For Investors paragraph | The difference between a thesis and an operating asset is eighteen months of logistics, humidity, corrosion... | The difference between a thesis and an operating asset is months of logistics, humidity, corrosion... | Ready (stale count). |
| For Investors paragraph | Most companies in the stranded-energy compute conversation have never commissioned a site. | (delete sentence) | Needs sign-off, item 1. Safe default ships: delete. |
| For Investors paragraph | The full metric set, unit economics, and stage-gate detail are published openly. | The headline metrics and stage-gate detail are on our investor page. Deployment economics are shared directly. | Ready. Matches /investor-relations. |

### 6. `/esg-impact` (ESG & Impact)

Primary keyword: gas flaring carbon credits. Pillars now: Weak 4. Pillars after: 4.

**Title tag**
- BEFORE (78 chars): ESG & Impact | NRG Bloom: Carbon Credits & Methane Mitigation from Gas Flaring
- AFTER (59 chars): Gas Flaring Carbon Credits & Methane Mitigation | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (171 chars): NRG Bloom mitigates methane emissions, creates local employment, and generates carbon credits while building compute infrastructure on stranded energy in frontier markets.
- AFTER (146 chars): Gas flaring carbon credits start with measured methane destruction. See how NRG Bloom tracks it at the flare. No credits have been issued to date.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Infrastructure That Gives Back
- AFTER: Cutting Gas Flaring at the Source, With a Carbon Credit Pathway
- Status: Ready

**Hero / intro paragraph**
- BEFORE: Every NRG Bloom deployment turns an environmental liability into economic opportunity. We don't just reduce emissions. We create jobs, support communities, and build infrastructure where it's needed most.
- AFTER: Flared gas is lost revenue for the owner and a methane source for the community around it. We put that gas to work on site, reduce flaring at the wellhead, and hire locally.
- Status: Ready

**CTA block**
- BEFORE: H2 "Partner With Us to Build Responsible Infrastructure"; body "Whether you're an energy producer, investor, or government stakeholder, NRG Bloom is building infrastructure that creates value for everyone involved."; buttons "Discuss a Partnership →" (/discuss-partnership), "View Investor Relations →".
- AFTER: H2 "Flaring Gas You Would Rather Sell?"; body "We buy gas you flare today and reduce flaring at the wellhead. Tell us about your site."; buttons "See If Your Site Qualifies →" (/energy-partners), "View Investor Relations →" (/investor-relations).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Methane section | The result is a dramatic reduction in methane emissions, one of the most potent greenhouse gases. | The result is a reduction in methane emissions, one of the most potent greenhouse gases. | Ready |
| Methane section | Our first site in Nigeria has already mitigated approximately 300 tonnes of CO2 equivalent since going live in February 2025. As we scale to 5 MW and beyond, that number grows with every watt deployed. | Our first site in Nigeria has mitigated more than 300 tonnes of CO2 equivalent since going live in February 2025. As we add sites, that number grows with every watt deployed. | Ready |
| Stat card | 300t CO₂e | 300+ t CO₂e | Ready |
| Carbon Credit Pathway intro | Methane destruction from flare gas qualifies for carbon credit issuance under established international methodologies. | Methane destruction from flare gas is quantifiable under established international methodologies. | Ready. Matches the IR wording and the page's own disclaimer. |
| Card heading | Triple Revenue Model | Revenue Streams | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| Card: Scalable Impact | As NRG Bloom expands to Kenya and Colombia, each new site adds to our carbon credit portfolio. | Each new site adds measurable methane destruction. | Needs sign-off, item 4. Safe default ships: this AFTER text. |
| Governance: Regulatory Compliance | In Nigeria, our community based power purchase agreement is fully compliant with local and federal energy regulations. | In Nigeria, we operate under a community based power purchase agreement. | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| Governance: Operational Transparency | Our investor relations page provides real-time operational metrics. | Our investor relations page publishes our headline operating metrics. | Ready. IR has no real-time data. |
| New FAQ block (Task 6) | (none) | Four Q&As listed in the Schema section (FAQPage for /esg-impact). | Ready |
| New in-body links | (none) | "Ogboinbiri case study →" (/case-studies/bayelsa); "what gas flaring is" (/blog/gas-flaring-explained-waste-to-energy) | Ready |

### 7. `/about-leadership` (About & Leadership)

Primary keyword: (brand) off-grid data center team. Pillars now: None. Pillars after: 4.

**Title tag**
- BEFORE (68 chars): About & Leadership | NRG Bloom: Global Team, Off-Grid Infrastructure
- AFTER (57 chars): Off-Grid Data Center Team: About & Leadership | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (147 chars): Founded in Canada, forged in frontier energy markets. Meet the NRG Bloom team building modular compute infrastructure on stranded energy worldwide.
- AFTER (147 chars): Founded in Quebec, Canada in 2023 and operating in Bayelsa State, Nigeria since February 2025. Meet the team building data centers on stranded gas.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Global Team. Frontier Operations. Institutional Discipline.
- AFTER: The Team Building Off-Grid Data Centers on Stranded Gas
- Status: Ready

**Hero / intro paragraph**
- BEFORE: NRG Bloom was founded in Quebec, Canada in 2023. We've been operational in Nigeria since February 2025, building compute infrastructure on stranded energy that most companies won't touch.
- AFTER: NRG Bloom was founded in Quebec, Canada in 2023. We have operated in Bayelsa State, Nigeria since February 2025, building data centers on gas that would otherwise be flared.
- Status: Ready

**CTA block**
- BEFORE: H2 "Want to Join the Team or Invest in It?"; body "We're always looking for operators, engineers, and partners who want to build at the frontier."; buttons "View Investor Materials →", "Contact Us →".
- AFTER: H2 "Have Stranded Gas, or Want to Build With Us?"; body "Energy owners: tell us about your site. Engineers and operators: contact us. Investors: request the investor pack."; buttons "For Energy Owners →" (/energy-partners), "Contact Us →" (/contact), "View Investor Materials →" (/investor-relations).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Our Story | The team is now expanding to Kenya and Colombia while building out the technology stack that makes this model repeatable at scale. | The team is now building out the technology stack that makes this model repeatable at scale. | Needs sign-off, item 4. Safe default ships: this AFTER text. |
| Bio cards | ...on stranded energy globally.  /  ...to scale stranded energy monetization globally. | ...on stranded energy.  /  ...to scale stranded energy monetization. | Ready |
| Jordane card | ...designed and built to the highest standards for power, cooling, and structural resilience in remote environments. | ...designed and built for power, cooling, and structural resilience in remote environments. | Ready |
| New in-body link (Our Story) | (none) | "Read the Ogboinbiri case study →" (/case-studies/bayelsa) | Ready |

### 8. `/insights` (Insights hub)

Primary keyword: stranded energy insights. Pillars now: None. Pillars after: 4.

**Title tag**
- BEFORE (64 chars): Insights | NRG Bloom: Research, Analysis & Industry Intelligence
- AFTER (50 chars): Stranded Energy & Gas Flaring Insights | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (137 chars): Research and analysis from NRG Bloom on stranded energy monetization, Bitcoin mining economics, AI infrastructure, and cleantech compute.
- AFTER (147 chars): Research and field notes from NRG Bloom on gas flaring, stranded energy, off-grid data centers and AI compute in emerging markets. Read the latest.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Stay in the Know
- AFTER: Insights on Stranded Energy, Off-Grid Compute and Gas Flaring
- Status: Ready (v2 had two versions; v3 uses this one).

**Hero / intro paragraph**
- BEFORE: Research, analysis, and on-the-ground reporting from NRG Bloom's operations across stranded energy and compute infrastructure.
- AFTER: Field notes for energy owners: why gas gets flared and how to put it to work on site. Plus what it takes to run compute off the grid.
- Status: Ready

**CTA block**
- BEFORE: None. The page has no CTA block.
- AFTER: New block at the bottom: H2 "Have Stranded or Flared Gas?"; body "We write from a live site in Bayelsa State. Tell us about yours."; button "See If Your Site Qualifies →" (/energy-partners).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Card dates (match each post's on-page date) | Stranded energy Mar 11, 2024; Energy storage Mar 8, 2024; Bitcoin and oil Jul 4, 2024; Setting up Oct 5, 2024; Why Africa Nov 28, 2024 | Aug 15, 2023; Dec 18, 2023; May 13, 2024; Oct 4, 2024; Dec 1, 2024 | Ready. On-page date is treated as the original publish date unless the CMS or CLAUDE.md records another. |
| AI post card title (also on homepage) | AI Infrastructure Meets Stranded Energy: The 2026 Opportunity | AI Inference on Stranded Energy: The 2026 Landscape | Ready |
| Stranded energy card image | https://cdn.prod.website-files.com/.../65ef8742d4af7719b02860ef_featured%20image%20wasted%20energy.webp (403) | ../blog_images/65ef8742d4af7719b02860ef_featured_20imag_4a4098874ccb.webp path as used on the post (root-relative: /blog_images/65ef8742d4af7719b02860ef_featured_20imag_4a4098874ccb.webp) | Ready |
| Section H2s | (none) | Add H2 "Latest" above the listing. Task 5 (archive split) stays deferred. | Ready |

### 9. `/contact` (Contact)

Primary keyword: (brand) contact. Pillars now: None. Pillars after: 4.

**Title tag**
- BEFORE (55 chars): Contact | NRG Bloom: Partner, Invest, or Deploy With Us
- AFTER (58 chars): Contact Us: Gas Owners, Partners and Investors | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (137 chars): Get in touch with NRG Bloom to discuss energy partnerships, investment, or deploying compute infrastructure at your stranded energy site.
- AFTER (149 chars): Contact NRG Bloom about stranded or flared gas at your site, investor materials or general questions. Our team typically responds within 24-48 hours.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Get in Touch
- AFTER: Contact NRG Bloom
- Status: Ready

**Hero / intro paragraph**
- BEFORE: Whether you're an energy partner, investor, or exploring deployment opportunities, we'd love to hear from you.
- AFTER: Gas owners, investors and partners: reach the team directly. If you have flared or stranded gas, the partnership form is the fastest route.
- Status: Ready

**CTA block**
- BEFORE: "Go to Partnership Form →" (/discuss-partnership)
- AFTER: Keep "Go to Partnership Form →" (/discuss-partnership). Add "See how energy partnerships work →" (/energy-partners).
- Status: Ready

### 10. `/makir-volcy` (Makir Volcy bio)

Primary keyword: (brand) person name. Pillars now: None. Pillars after: 4 (CTA).

**Title tag**
- BEFORE (23 chars): Makir Volcy | NRG Bloom
- AFTER (56 chars): Makir Volcy, Founder & CEO: Off-Grid Compute | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (110 chars): Makir Volcy, Founder & CEO at NRG Bloom. Building modular compute infrastructure on stranded energy worldwide.
- AFTER (149 chars): Makir Volcy is Founder & CEO of NRG Bloom, building off-grid data centers on stranded gas. Operational in Bayelsa State, Nigeria since February 2025.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Makir Volcy
- AFTER: No change
- Status: Ready

**Hero / intro paragraph**
- BEFORE: Makir, the Founder of NRG Bloom, established the company as a digital infrastructure venture at the forefront of sustainable and efficient compute operations.
- AFTER: No change (bio stays; thin page is acceptable for a person page).
- Status: Ready

**CTA block**
- BEFORE: None. Only "Back to About & Leadership" and the LinkedIn link.
- AFTER: Add after the bio: "Have stranded or flared gas? See how we work with energy owners →" (/energy-partners).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Bio body | ...scales from Bitcoin validation into AI inference infrastructure globally. | ...scales from Bitcoin validation into AI inference infrastructure. | Ready |
| Meta and og tags | Meta ends "...on stranded energy worldwide."; only og:url, og:title, og:description, og:type | New meta (above); add og:image (site default), twitter:card, twitter:title, twitter:description, twitter:image | Ready |
| Footer logo alt | alt="" | alt="NRG Bloom" | Ready |

### 11. `/julie-peeters` (Julie Peeters bio)

Primary keyword: (brand) person name. Pillars now: None. Pillars after: 4 (CTA).

**Title tag**
- BEFORE (25 chars): Julie Peeters | NRG Bloom
- AFTER (58 chars): Julie Peeters, Co-Founder: Operations Director | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (134 chars): Julie Peeters, Co-Founder & Director of Operations at NRG Bloom. Building modular compute infrastructure on stranded energy worldwide.
- AFTER (140 chars): Julie Peeters is Co-Founder & Director of Operations at NRG Bloom, building off-grid data centers on stranded gas in Bayelsa State, Nigeria.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Julie Peeters
- AFTER: No change
- Status: Ready

**Hero / intro paragraph**
- BEFORE: Julie brings an extensive background in research, finance, and programming to the team.
- AFTER: No change (bio stays; thin page is acceptable for a person page).
- Status: Ready

**CTA block**
- BEFORE: None. Only "Back to About & Leadership" and the LinkedIn link.
- AFTER: Add after the bio: "Have stranded or flared gas? See how we work with energy owners →" (/energy-partners).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Meta and og tags | Meta ends "...on stranded energy worldwide."; only og:url, og:title, og:description, og:type | New meta (above); add og:image (site default), twitter:card, twitter:title, twitter:description, twitter:image | Ready |
| Footer logo alt | alt="" | alt="NRG Bloom" | Ready |

### 12. `/jordane-volcy` (Jordane Volcy bio)

Primary keyword: (brand) person name. Pillars now: None. Pillars after: 4 (CTA).

**Title tag**
- BEFORE (25 chars): Jordane Volcy | NRG Bloom
- AFTER (60 chars): Jordane Volcy: Engineering Off-Grid Data Centers | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (118 chars): Jordane Volcy, Head of Engineering at NRG Bloom. Building modular compute infrastructure on stranded energy worldwide.
- AFTER (142 chars): Jordane Volcy is Head of Engineering at NRG Bloom, a civil engineer designing off-grid data centers on stranded gas in Bayelsa State, Nigeria.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Jordane Volcy
- AFTER: No change
- Status: Ready

**Hero / intro paragraph**
- BEFORE: Jordane is a civil engineer who plays a crucial role in building robust infrastructure for NRG Bloom's operations.
- AFTER: No change (bio stays; thin page is acceptable for a person page).
- Status: Ready

**CTA block**
- BEFORE: None. Only "Back to About & Leadership" and the LinkedIn link.
- AFTER: Add after the bio: "Have stranded or flared gas? See how we work with energy owners →" (/energy-partners).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Bio body | ...designed and built to the highest standards, supporting... | ...designed and built for remote sites, supporting... | Ready |
| Meta and og tags | Meta ends "...on stranded energy worldwide."; only og:url, og:title, og:description, og:type | New meta (above); add og:image (site default), twitter:card, twitter:title, twitter:description, twitter:image | Ready |
| Footer logo alt | alt="" | alt="NRG Bloom" | Ready |

### 13. `/gus-anyim` (Gus Anyim bio)

Primary keyword: (brand) person name. Pillars now: None. Pillars after: 4 (CTA).

**Title tag**
- BEFORE (21 chars): Gus Anyim | NRG Bloom
- AFTER (58 chars): Gus Anyim, Head of Commercial: Energy Partners | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (113 chars): Gus Anyim, Head of Commercial at NRG Bloom. Building modular compute infrastructure on stranded energy worldwide.
- AFTER (143 chars): Gus Anyim is Head of Commercial at NRG Bloom, building partnerships with energy producers to turn stranded and flared gas into compute revenue.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Gus Anyim
- AFTER: No change
- Status: Ready

**Hero / intro paragraph**
- BEFORE: Leading commercial development at NRG Bloom, Gus has an extensive background in the financial services sector and digital assets.
- AFTER: No change (bio stays; thin page is acceptable for a person page).
- Status: Ready

**CTA block**
- BEFORE: None. Only "Back to About & Leadership" and the LinkedIn link.
- AFTER: Add after the bio: "Have stranded or flared gas? See how we work with energy owners →" (/energy-partners).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Bio body | ...enhancing our stranded energy monetization strategy globally. | ...enhancing our stranded energy monetization strategy. | Ready |
| Meta and og tags | Meta ends "...on stranded energy worldwide."; only og:url, og:title, og:description, og:type | New meta (above); add og:image (site default), twitter:card, twitter:title, twitter:description, twitter:image | Ready |
| Footer logo alt | alt="" | alt="NRG Bloom" | Ready |

### 14. `/ai-agent` (AI agent page)

Primary keyword: (brand) AI agent access. Pillars now: None. Pillars after: 4.

**Title tag**
- BEFORE (20 chars): AI Agent | NRG Bloom
- AFTER (57 chars): AI Agent Access: llms.txt and Structured Data | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (151 chars): NRG Bloom is agent-ready. Our AI infrastructure is built for the agentic future. Discover how AI agents can interact with NRG Bloom's systems and data.
- AFTER (150 chars): How AI agents and developers can read NRG Bloom data: llms.txt, llms-full.txt, ai-agent.json and JSON-LD on every page. Partnership inquiries welcome.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Agent-Ready Infrastructure
- AFTER: No change
- Status: Ready

**Hero / intro paragraph**
- BEFORE: NRG Bloom is built for the agentic future. Our systems are designed for AI-to-AI communication, programmatic discovery, and autonomous partnership exploration.
- AFTER: No change
- Status: Ready

**CTA block**
- BEFORE: "Discuss a Partnership" (/discuss-partnership)
- AFTER: Keep it. Add above it: "Agents researching flare gas monetization for an energy owner can start at /energy-partners." with the link.
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| WHY AGENT-READY | NRG Bloom is one of the first energy companies to implement agent discovery protocols, making... | NRG Bloom publishes agent discovery files, making... | Ready |
| DISCOVERY | AI agents can instantly understand who we are... | AI agents can quickly understand who we are... | Ready |
| INTEROPERABILITY | ...they can seamlessly integrate with our data. | ...they can integrate with our data. | Ready |

### 15. `/blog/gas-flaring-explained-waste-to-energy` (Burning Money (gas flaring explainer))

Primary keyword: what is gas flaring. Pillars now: 3, 4. Pillars after: 3, 4.

**Title tag**
- BEFORE (95 chars): Burning Money: A Bitesized Breakdown of Gas Flaring and the Move to Waste-to-Energy | NRG Bloom
- AFTER (58 chars): What Is Gas Flaring? Causes, Impact, Solutions | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (161 chars): How gas flaring works, why producers do it, and what it actually takes to convert flared associated gas into electricity. A field-level breakdown from NRG Bloom.
- AFTER (145 chars): Gas flaring burned 167 billion cubic meters of gas in 2025. Learn how flares work, why operators flare, and how flared gas becomes power on site.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Burning Money: A Bitesized Breakdown of Gas Flaring and the Move to Waste-to-Energy
- AFTER: No change (title tag carries the keyword)
- Status: Ready

**Hero / intro paragraph**
- BEFORE: A gas flare system is a vital safety system for any commercial upstream oil and gas operation.
- AFTER: Insert a TL;DR box above it: "TL;DR: Gas flaring is the controlled burning of associated gas at oil production sites, for safety or because the gas has no route to market. In 2025, operators flared 167 billion cubic meters, the highest level since 2019. NRG Bloom turns that gas into power on site." Keep the existing first paragraph after it.
- Status: Ready

**CTA block**
- BEFORE: "Operate a site with stranded or flared gas? We convert it into power on site. See how we work with energy partners →" (/energy-partners)
- AFTER: "Flaring because there is no pipeline? You don't need to wait for one. We convert flared gas into power on site. See how we work with energy partners →" (/energy-partners)
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Impact section | An estimated 389 million tonnes of CO₂e were emitted in 2024, including around 46 million tonnes of CO₂e from unburned methane (1). | Flaring released an estimated 429 million tonnes of CO₂e in 2025, including around 50 million tonnes from unburned methane (1). | Ready (v4: verified, see C1). Point reference (1) at the 2026 tracker. |
| Reference (1) | 2025 Global Gas Flaring Tracker Report, World Bank ..., July 2025. | 2026 Global Gas Flaring Tracker Report, World Bank GFMR, June 23, 2026, with link. | Ready |
| Section "Why don't upstream oil companies simply bottle the gas?" (add a sentence) | (none) | "This is what stranded energy means in practice." linked to /blog/stranded-energy-bitcoin-waste-recovery-explained | Ready |
| Add in-body link | (none) | "flare gas data center in Nigeria" → /case-studies/bayelsa | Ready |
| Article JSON-LD | dateModified 2026-10-05 | dateModified = deploy date; add visible "Updated <date>" | Ready |

### 16. `/blog/builders-not-theorists-operational-know-how` (Builders, Not Theorists)

Primary keyword: modular data center operations. Pillars now: Partial 1, weak 4. Pillars after: 1, 4.

**Title tag**
- BEFORE (86 chars): Builders, Not Theorists: Why Operational Know-How Is NRG Bloom's Real Moat | NRG Bloom
- AFTER (57 chars): Builders, Not Theorists: Operational Know-How | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (177 chars): Modular data centers on stranded energy are a construction problem, not a thesis. NRG Bloom's moat is the operational and engineering discipline required to actually build them.
- AFTER (144 chars): Modular data centers on stranded gas are a construction problem, not a thesis. What building a live flare gas site in the Niger Delta taught us.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Builders, Not Theorists: Why Operational Know-How Is NRG Bloom's Real Moat
- AFTER: No change
- Status: Ready

**Hero / intro paragraph**
- BEFORE: Every week, another thesis is published about stranded energy. Another white paper on the AI power crisis.
- AFTER: No change
- Status: Ready

**CTA block**
- BEFORE: "If you are an energy producer with stranded gas or curtailed renewables, a capital partner evaluating real-asset infrastructure in this category, or a compute buyer who needs capacity outside the grid-constrained corridors, NRG Bloom is open for conversations that move toward a site, not toward a slide." (no link)
- AFTER: "Have stranded or flared gas? Talk to us about a site, not a slide. See how energy partnerships work →" (/energy-partners). Second line: "Investors: request the investor pack →" (/investor-relations).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Operating record paragraph | ...under a community-based power purchase agreement, well below the industry's mining breakeven and a small fraction of grid data center electricity pricing in developed markets. | ...under a community-based power purchase agreement. | Needs sign-off, item 1. Safe default ships: this AFTER text. |
| Operating record paragraph | ...delivering an estimated 300 tonnes of CO2e mitigation through the life of the deployment so far. | ...delivering more than 300 tonnes of CO2e mitigation through the life of the deployment so far. | Ready |
| Capacity sentence | ...1.5 MW developed, with a further 5 MW in the pipeline | ...1.5 MW developed, with a 5 MW pipeline under development | Needs sign-off, item 3. Safe default ships: this AFTER text. |
| H2 | What Comes Next: Kenya, Colombia, and a Build Cadence | What Comes Next: A Build Cadence | Needs sign-off, item 4. Safe default ships: this AFTER text. |
| Body under that H2 | Kenya and Colombia are in active pipeline, each representing a distinct class of stranded energy... | Delete the Kenya and Colombia sentences; keep the build-cadence argument. | Needs sign-off, item 4. Safe default ships: delete. |
| Add in-body link (What the Niger Delta Proved) | (none) | "flare gas data center in Nigeria" → /case-studies/bayelsa | Ready |

### 17. `/blog/ai-infrastructure-stranded-energy-2026` (AI on stranded energy (2026))

Primary keyword: AI inference on stranded energy. Pillars now: 1. Pillars after: 1.

**Title tag**
- BEFORE (68 chars): AI Infrastructure on Stranded Energy: The 2026 Landscape | NRG Bloom
- AFTER (59 chars): AI Inference on Stranded Energy: 2026 Landscape | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (155 chars): How stranded energy sources are becoming the foundation for AI compute infrastructure in 2026, and why NRG Bloom's stage-gated approach is leading the way.
- AFTER (150 chars): Grid queues take years, so AI inference is moving to stranded energy. Why GPUs need a proven site first, and how stage gates de-risk off-grid compute.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: AI Infrastructure on Stranded Energy: The 2026 Landscape
- AFTER: AI Inference on Stranded Energy: The 2026 Landscape
- Status: Ready

**Hero / intro paragraph**
- BEFORE: Two of the most powerful forces in global technology are on a collision course, and the results will reshape how we think about infrastructure for the next decade. On one side, artificial intelligence workloads are growing at an unprecedented rate.
- AFTER: Power, not chips, now limits AI compute. New large grid connections in major markets can take three to five years. Stranded gas is already on site, and modular generation does not wait in a queue.
- Status: Ready. Replaces the first two sentences; "three to five years" is already in this post.

**CTA block**
- BEFORE: "If you are an energy producer looking to monetize stranded gas, an investor evaluating the AI infrastructure space, or an enterprise seeking cost-effective compute capacity, we invite you to start a conversation." (no link)
- AFTER: "Have stranded or flared gas? Your site can carry AI inference once it is validated. See how energy partnerships work →" (/energy-partners). Second line: "Investors: see data center investment in Africa →" (/investor-relations).
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Why Stranded Energy Is the Answer | The World Bank estimates that global gas flaring burns approximately 150 billion cubic meters of natural gas annually. That is roughly equivalent to the combined annual gas consumption of Germany and France. | The World Bank reports that 167 billion cubic meters of gas were flared in 2025. That matches Africa's annual gas consumption. | Ready |
| Agent-ready section | ...we intend to be the first result it finds, and the first it recommends. | ...we intend to be the result it finds and recommends. | Ready |
| Add in-body links | (none) | "modular data center deployment" → /strategy (in the stage-gated section) | Ready |
| Related posts block | Supply squeeze (noindex), Comparative analysis (noindex) | Two newest indexable posts (see Task 2) | Ready |

### 18. `/blog/stranded-energy-bitcoin-waste-recovery-explained` (What Is Stranded Energy? (climbing page))

Primary keyword: what is stranded energy. Pillars now: None. Pillars after: 4.

**Title tag**
- BEFORE (62 chars): What is Stranded Energy? Why it Matters to Bitcoin | NRG Bloom
- AFTER (50 chars): What Is Stranded Energy? Why It Matters to Bitcoin
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (50 chars): What is Stranded Energy? Why it Matters to Bitcoin
- AFTER (144 chars): Stranded energy is power with no route to market. See how bitcoin mining with stranded energy turns flared gas and curtailed power into revenue.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: What is Stranded Energy? Why it Matters to Bitcoin
- AFTER: What Is Stranded Energy? Why It Matters to Bitcoin
- Status: Ready (capitalization only).

**Hero / intro paragraph**
- BEFORE: TL;DR Stranded energy is power generated in remote or off-grid sites where transmission makes export uneconomical. ... Operational in Bayelsa State, Nigeria since February 2025.
- AFTER: No change (Task 3 item 7 is closed).
- Status: Ready

**CTA block**
- BEFORE: "Want to deploy compute at your stranded-energy site? Read our deployment model →" (/strategy)
- AFTER: "Have stranded or flared gas? You don't need a pipeline to earn from it. See how energy partnerships work →" (/energy-partners). Keep "Read our deployment model →" (/strategy) as a second link.
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Byline and dates | Economics and Finance · Aug 15, 2023 / JSON-LD 2025-06-01, 2026-03-03, author Makir Volcy | Energy · Aug 15, 2023 · Updated <deploy date> / JSON-LD datePublished 2023-08-15, dateModified <deploy date>, author Julie Peeters | Ready |
| Four broken links | See Task 1 | See Task 1 | Ready |
| Body wording | innovative and profitable strategy / greener and more profitable bitcoin mining / a profitable avenue for Bitcoin miners / sustainable and profitable energy use | practical strategy / greener bitcoin mining / a revenue avenue for Bitcoin miners / sustainable energy use | Ready |
| New sections | (none) | See Task 4 (deployment in practice; Bitcoin to AI inference; FAQ) | Ready |
| Content images | 8 content images with alt="" | Descriptive alt per image (describe what the image shows; no keyword stuffing) | Ready |

### 19. `/blog/energy-storage-solutions-for-stranded-energy` (Energy storage for stranded energy)

Primary keyword: stranded energy storage. Pillars now: None. Pillars after: 3, 4.

**Title tag**
- BEFORE (56 chars): Energy Storage Solutions for Stranded Energy | NRG Bloom
- AFTER (56 chars): Energy Storage for Stranded Energy, Compared | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (44 chars): Energy Storage Solutions for Stranded Energy
- AFTER (146 chars): Batteries are one answer to stranded energy. Compute at the source is another. Compare energy storage options for remote and off-grid power sites.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Energy Storage Solutions for Stranded Energy
- AFTER: No change
- Status: Ready

**Hero / intro paragraph**
- BEFORE: TL;DR Stranded energy is power generated where the grid cannot reach it. Traditional storage means batteries. NRG Bloom's approach: deploy modular compute at the energy source...
- AFTER: No change
- Status: Ready

**CTA block**
- BEFORE: "See how NRG Bloom turns stranded energy into compute revenue. Our deployment strategy →" (/strategy)
- AFTER: "Have stranded gas with no storage or export route? Compute at the source can use it. See how energy partnerships work →" (/energy-partners)
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Add in-body link (Understanding Stranded Energy) | (none) | "what stranded energy is" → /blog/stranded-energy-bitcoin-waste-recovery-explained | Ready |
| Byline and dates | Economics and Finance · Dec 18, 2023 / JSON-LD 2025-06-01, author Makir Volcy | Energy · Dec 18, 2023 / JSON-LD datePublished 2023-12-18, author Julie Peeters | Ready |
| Content images | 4 content images with alt="" | Descriptive alt per image | Ready |

### 20. `/blog/bitcoin---helping-the-oil-industry-to-end-gas-flaring` (Bitcoin and gas flaring)

Primary keyword: bitcoin mining gas flaring. Pillars now: Partial 3. Pillars after: 3.

**Title tag**
- BEFORE (65 chars): Bitcoin - Helping the Oil Industry to End Gas Flaring | NRG Bloom
- AFTER (57 chars): Bitcoin Mining and Gas Flaring in African Oil | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (53 chars): Bitcoin - Helping the Oil Industry to End Gas Flaring
- AFTER (142 chars): Bitcoin mining at the wellhead gives African oil producers a use for gas they flare today. See what it takes to run compute on associated gas.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Bitcoin - Helping the Oil Industry to End Gas Flaring
- AFTER: No change
- Status: Ready

**Hero / intro paragraph**
- BEFORE: TL;DR NRG Bloom monetizes flared gas at the wellhead by deploying modular data centers on stranded energy sites. Bitcoin mining validates sites with low CapEx, immediate revenue, and tolerance for variable supply...
- AFTER: TL;DR NRG Bloom monetizes flared gas at the wellhead by deploying modular data centers on stranded energy sites. Bitcoin mining validates sites with immediate revenue and tolerance for variable supply...
- Status: Needs sign-off, item 2. Safe default ships: this AFTER text.

**CTA block**
- BEFORE: "Working in oil and gas with stranded resources? Talk to us about a partnership →" (/discuss-partnership)
- AFTER: "Flaring gas with no pipeline in sight? Don't wait for midstream. See how energy partnerships work →" (/energy-partners)
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Add in-body link | (none) | "what gas flaring is" → /blog/gas-flaring-explained-waste-to-energy | Ready |
| Dates | /insights Jul 4, 2024 vs page May 13, 2024; JSON-LD 2025-06-01 | May 13, 2024 everywhere; JSON-LD datePublished 2024-05-13 | Ready |

### 21. `/blog/nrg-bloom-setting-up-in-africa` (Setting up in Africa)

Primary keyword: off-grid power Nigeria. Pillars now: Partial 1. Pillars after: 1.

**Title tag**
- BEFORE (44 chars): NRG Bloom - Setting Up In Africa | NRG Bloom
- AFTER (58 chars): Setting Up in Nigeria: Off-Grid Power, Compute | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (32 chars): NRG Bloom - Setting Up In Africa
- AFTER (149 chars): Why NRG Bloom set up in Nigeria: unreliable grid power, diesel backup and flared associated gas. How we built a modular data center in Bayelsa State.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: NRG Bloom - Setting Up In Africa
- AFTER: No change
- Status: Ready

**Hero / intro paragraph**
- BEFORE: TL;DR ... Live since February 2025: 1 MW energized of 1.5 MW developed, with a 5 MW pipeline under development. Pipeline markets: Kenya and Colombia.
- AFTER: Same TL;DR without the last sentence ("Pipeline markets: Kenya and Colombia.").
- Status: Needs sign-off, item 4. Safe default ships: delete the sentence.

**CTA block**
- BEFORE: "See how the model scales to Kenya, Colombia, and beyond. Our deployment strategy →" (/strategy)
- AFTER: "Grid power is unreliable here, so gas on site matters. Have flared gas near your operation? See how energy partnerships work →" (/energy-partners). Keep "Our deployment strategy →" (/strategy).
- Status: Needs sign-off, item 4. Safe default ships: this AFTER text.

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| Body | ...it is truly the leading economy in Africa. (a non-breaking space sits between "the" and "leading") | ...it is one of the largest economies in Africa. | Ready |
| Add in-body link | (none) | "flare gas data center in Nigeria" → /case-studies/bayelsa | Ready |
| Dates | /insights Oct 5, 2024 vs page Oct 4, 2024 | Oct 4, 2024 everywhere; JSON-LD datePublished 2024-10-04 | Ready |
| Content images | 4 content images with alt="" | Descriptive alt per image | Ready |

### 22. `/blog/why-africa-is-the-future-of-bitcoin-mining` (Why Africa (Bitcoin mining))

Primary keyword: bitcoin mining Africa. Pillars now: None. Pillars after: 4.

**Title tag**
- BEFORE (54 chars): Why Africa is the Future of Bitcoin Mining | NRG Bloom
- AFTER (54 chars): Why Africa Is the Future of Bitcoin Mining | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (42 chars): Why Africa is the Future of Bitcoin Mining
- AFTER (150 chars): Africa holds large stranded energy potential, from Nigeria's flared gas to underused hydro and solar. Why bitcoin mining and compute are moving there.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Why Africa is the Future of Bitcoin Mining
- AFTER: No change
- Status: Ready

**Hero / intro paragraph**
- BEFORE: TL;DR Africa has the world's largest stranded-energy potential: 6 to 7 billion cubic meters of flared gas in Nigeria alone, plus underutilized hydro and solar. ... Bitcoin mining validates sites with low CapEx and immediate revenue...
- AFTER: TL;DR Africa has large stranded-energy potential: 6 to 7 billion cubic meters of flared gas in Nigeria alone, plus underutilized hydro and solar. ... Bitcoin mining validates sites with immediate revenue...
- Status: Needs sign-off, item 1. Safe default ships: this AFTER text (also covers item 2 for "low CapEx").

**CTA block**
- BEFORE: "Curious how this model deploys at your site? See our stage-gated deployment model →" (/strategy)
- AFTER: "Have stranded or flared gas in Africa? See how energy partnerships work →" (/energy-partners). Keep the /strategy link as a second line.
- Status: Ready

**Other edits on this page**

| Where | BEFORE | AFTER | Status |
| --- | --- | --- | --- |
| H2 | III. NRG Bloom: Pioneering Sustainable Mining in Africa | III. NRG Bloom: Building Sustainable Compute in Africa | Ready |
| Body | At NRG Bloom, we are pioneering this approach in Africa / We employ cutting-edge technologies / NRG Bloom is proud to pioneer this movement | At NRG Bloom, we are building this approach in Africa / We use proven technologies / NRG Bloom is part of this movement | Ready |
| In-body links to noindexed posts | Bitcoin Mining 101, mining hardware, carbon footprint (all noindex) | Unlink the first two; point "The carbon footprint of Bitcoin mining" to /esg-impact | Ready |
| Dates | /insights Nov 28, 2024 vs page Dec 1, 2024 | Dec 1, 2024 everywhere; JSON-LD datePublished 2024-12-01, author Julie Peeters | Ready |
| Content images | 4 content images with alt="" | Descriptive alt per image | Ready |

### 23. `/privacy-policy` (Privacy Policy)

Primary keyword: (legal). Pillars now: n/a. Pillars after: n/a (legal page, exempt from the pillar and CTA rule).

**Title tag**
- BEFORE (26 chars): Privacy Policy | NRG Bloom
- AFTER (59 chars): Privacy Policy: How We Collect and Protect Data | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (93 chars): NRG Bloom's privacy policy. Learn how we collect, use, and protect your personal information.
- AFTER (144 chars): NRG Bloom's privacy policy: what personal information we collect through nrgbloom.com and our forms, how we use and protect it, and your rights.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Privacy Policy
- AFTER: No change
- Status: Ready

**Hero / intro paragraph**
- BEFORE: (legal text)
- AFTER: No change. If GA4 ships (item 9), update section 5 Cookies to name Google Analytics.
- Status: Needs sign-off, item 9. Safe default ships: no change unless GA4 ships.

**CTA block**
- BEFORE: None
- AFTER: None
- Status: Ready

### 24. `/terms-of-service` (Terms of Service)

Primary keyword: (legal). Pillars now: n/a. Pillars after: n/a (legal page, exempt).

**Title tag**
- BEFORE (28 chars): Terms of Service | NRG Bloom
- AFTER (51 chars): Terms of Service for Using nrgbloom.com | NRG Bloom
- Status: Ready. Mirror into og:title and twitter:title.

**Meta description**
- BEFORE (82 chars): Terms of service for NRG Bloom's website. Review our terms for using nrgbloom.com.
- AFTER (148 chars): Terms of service for nrgbloom.com: acceptable use, intellectual property, partnership and investor information, AI agent access and liability terms.
- Status: Ready. Mirror into og:description and twitter:description.

**H1**
- BEFORE: Terms of Service
- AFTER: No change
- Status: Ready

**Hero / intro paragraph**
- BEFORE: (legal text)
- AFTER: No change
- Status: Ready

**CTA block**
- BEFORE: None
- AFTER: None
- Status: Ready


## Schema additions

Use only facts already on the site. JSON cannot hold comments, so record each Sign-off-dependent value in the final report instead of a `SIGNOFF` comment. Replace `YYYY-MM-DD` with the deploy date.

**1. Organization (homepage; replaces the existing Organization block).** Sign-off item 4 sets `areaServed`; item 5 removed `numberOfEmployees`.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nrgbloom.com/#organization",
  "name": "NRG Bloom",
  "legalName": "NRG Bloom Inc.",
  "url": "https://nrgbloom.com",
  "logo": "https://nrgbloom.com/images/NRGBloom_logo.webp",
  "foundingDate": "2023",
  "foundingLocation": { "@type": "Place", "name": "Quebec, Canada" },
  "description": "Off-grid data center operator deploying modular compute on stranded and flared gas in emerging markets. Operational in Bayelsa State, Nigeria since February 2025.",
  "slogan": "Where the grid ends, we begin.",
  "areaServed": ["Nigeria"],
  "knowsAbout": ["Stranded energy monetization", "Modular data centers", "Gas flare reduction", "Methane mitigation", "Off-grid data centers", "AI infrastructure", "Bitcoin mining"],
  "sameAs": ["https://x.com/NRGBloom", "https://linkedin.com/company/nrgbloom"],
  "email": "info@nrgbloom.com",
  "contactPoint": [
    { "@type": "ContactPoint", "contactType": "partnerships", "url": "https://nrgbloom.com/discuss-partnership" },
    { "@type": "ContactPoint", "contactType": "investor relations", "url": "https://nrgbloom.com/investor-relations" }
  ],
  "founder": { "@type": "Person", "name": "Makir Volcy", "jobTitle": "Founder & CEO", "url": "https://nrgbloom.com/makir-volcy" },
  "employee": [
    { "@type": "Person", "name": "Julie Peeters", "jobTitle": "Co-Founder & Director of Operations", "url": "https://nrgbloom.com/julie-peeters" },
    { "@type": "Person", "name": "Gus Anyim", "jobTitle": "Head of Commercial", "url": "https://nrgbloom.com/gus-anyim" },
    { "@type": "Person", "name": "Jordane Volcy", "jobTitle": "Head of Engineering", "url": "https://nrgbloom.com/jordane-volcy" }
  ]
}
```

**2. Article (every indexable post and the case study; replaces the existing Article object, keeps the BreadcrumbList).** Template, filled for the stranded energy post:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is Stranded Energy? Why It Matters to Bitcoin",
  "description": "Stranded energy is power with no route to market. See how bitcoin mining with stranded energy turns flared gas and curtailed power into revenue.",
  "datePublished": "2023-08-15",
  "dateModified": "YYYY-MM-DD",
  "author": { "@type": "Person", "name": "Julie Peeters", "url": "https://nrgbloom.com/julie-peeters" },
  "publisher": {
    "@type": "Organization",
    "@id": "https://nrgbloom.com/#organization",
    "name": "NRG Bloom",
    "logo": { "@type": "ImageObject", "url": "https://nrgbloom.com/images/NRGBloom_logo.webp" }
  },
  "image": "https://nrgbloom.com/blog_images/65ef8742d4af7719b02860ef_featured_20imag_4a4098874ccb.webp",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nrgbloom.com/blog/stranded-energy-bitcoin-waste-recovery-explained" }
}
```

Values per page (author follows the visible byline; datePublished follows the visible on-page date; `description` = the new meta):

| Page | headline | datePublished | author | image |
| --- | --- | --- | --- | --- |
| `/blog/gas-flaring-explained-waste-to-energy` | Burning Money: A Bitesized Breakdown of Gas Flaring and the Move to Waste-to-Energy | 2026-10-05 | Organization NRG Bloom | https://nrgbloom.com/blog_images/flaring-cover.jpg |
| `/case-studies/bayelsa` | Ogboinbiri, Bayelsa State: An Off-Grid Data Center Running on Flared Gas Since February 2025 | 2026-08-06 | Organization NRG Bloom | https://nrgbloom.com/images/ogboinbiri-expansion-site.webp |
| `/blog/builders-not-theorists-operational-know-how` | Builders, Not Theorists: Why Operational Know-How Is NRG Bloom's Real Moat | 2026-04-22 | Person Makir Volcy (/makir-volcy) | keep the existing ImageObject URL |
| `/blog/ai-infrastructure-stranded-energy-2026` | AI Inference on Stranded Energy: The 2026 Landscape | 2026-03-11 | Person Makir Volcy | https://nrgbloom.com/images/datacenter-modules.png |
| `/blog/stranded-energy-bitcoin-waste-recovery-explained` | What Is Stranded Energy? Why It Matters to Bitcoin | 2023-08-15 | Person Julie Peeters (/julie-peeters) | as in the template |
| `/blog/energy-storage-solutions-for-stranded-energy` | Energy Storage Solutions for Stranded Energy | 2023-12-18 | Person Julie Peeters | keep the existing ImageObject URL |
| `/blog/bitcoin---helping-the-oil-industry-to-end-gas-flaring` | Bitcoin: Helping the Oil Industry to End Gas Flaring | 2024-05-13 | Organization NRG Bloom | keep the existing ImageObject URL |
| `/blog/nrg-bloom-setting-up-in-africa` | NRG Bloom: Setting Up in Africa | 2024-10-04 | Organization NRG Bloom | keep the existing ImageObject URL |
| `/blog/why-africa-is-the-future-of-bitcoin-mining` | Why Africa Is the Future of Bitcoin Mining | 2024-12-01 | Person Julie Peeters | keep the existing ImageObject URL |

`dateModified` = deploy date on every page changed in this run. Show a visible "Updated <date>" next to the published date on posts that changed. If `CLAUDE.md`, the CMS or git history records a different original publish date for a post, use that and note it in the report. For the 12 noindexed posts, replace the placeholder `2025-06-01` with the on-page date when it is a one-line change; otherwise leave them.

**3. FAQPage for `/energy-partners` (new; add the same Q&As as a visible FAQ block before the closing CTA).**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Do I need a pipeline or a grid connection?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. We generate power on site from your associated gas and consume it on site. There is no pipeline to build and no grid queue to join." } },
    { "@type": "Question", "name": "How long from first call to first power?",
      "acceptedAnswer": { "@type": "Answer", "text": "Our standard path runs from first call to first watt in under 90 days. Stage 1 validation units deploy within 60 to 90 days." } },
    { "@type": "Question", "name": "Who owns and operates the equipment?",
      "acceptedAnswer": { "@type": "Answer", "text": "NRG Bloom deploys, owns, and operates all compute infrastructure on site. You sell gas that would otherwise be flared." } },
    { "@type": "Question", "name": "Which sites qualify?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sites with 5 MW or more of stranded or flared gas. The gas has no pipeline access or faces an uneconomic flaring penalty." } },
    { "@type": "Question", "name": "What does the energy producer earn?",
      "acceptedAnswer": { "@type": "Answer", "text": "You earn revenue from gas you were flaring, under a long-term agreement. Carbon credits are a potential future stream; none have been issued to date." } }
  ]
}
```

**4. FAQPage for `/esg-impact` (new; add the same Q&As as a visible FAQ block).**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Does flare gas methane destruction earn carbon credits?",
      "acceptedAnswer": { "@type": "Answer", "text": "It can be quantified under UNFCCC CDM methodology AM0009. No credits have been issued for our site to date, and the figure is not yet third-party verified." } },
    { "@type": "Question", "name": "How much CO2e has the Ogboinbiri site mitigated?",
      "acceptedAnswer": { "@type": "Answer", "text": "More than 300 tonnes of CO2e since February 2025, as measured by NRG Bloom. The figure is not third-party verified." } },
    { "@type": "Question", "name": "Is NRG Bloom carbon negative?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. We do not claim a carbon-negative position. We report mitigation as measured, and the verification pathway is open." } },
    { "@type": "Question", "name": "How does the local community benefit?",
      "acceptedAnswer": { "@type": "Answer", "text": "Five local jobs have been created at Ogboinbiri under a local-first hiring policy with skills transfer. The site pays the community for its power." } }
  ]
}
```

**5. Existing FAQPage blocks.** `/investor-relations`: mirror every visible FAQ edit into the JSON-LD and add the new Q&A ("Why off-grid infrastructure investment in Africa?"). Gas flaring post: keep; no claim changes in its FAQ. Stranded energy post: add a FAQPage block that mirrors the Task 4 FAQ word for word.

**6. Service blocks on `/strategy` and `/energy-partners`.** Keep the type; set `areaServed` per T3 row j and `description` per T3 row q.

## Internal link plan

Anchor text uses the target's primary keyword where it reads naturally. "New" means the link does not exist today.

| # | Source page | Anchor text | Target | Task |
| --- | --- | --- | --- | --- |
| 1 | `/` hero | Have stranded or flared gas? Talk to us → | `/energy-partners` | TB (replaces "Partner With Us →") |
| 2 | `/` closing CTA | See If Your Site Qualifies → | `/energy-partners` | TB |
| 3 | `/` Latest cards | Burning Money / Ogboinbiri case study / Builders, Not Theorists | `/blog/gas-flaring-explained-waste-to-energy`, `/case-studies/bayelsa`, `/blog/builders-not-theorists-operational-know-how` | T2 |
| 4 | `/` stat bar source line | Ogboinbiri case study | `/case-studies/bayelsa` | T7 |
| 5 | `/strategy` closing CTA | See If Your Site Qualifies → | `/energy-partners` | TB (new) |
| 6 | `/strategy` Stage 3 | AI inference on stranded energy | `/blog/ai-infrastructure-stranded-energy-2026` | TB (new) |
| 7 | `/energy-partners` Further Reading | what stranded energy is | `/blog/stranded-energy-bitcoin-waste-recovery-explained` | TB (new) |
| 8 | `/energy-partners` NGFCP block | Discuss a Partnership → | `/discuss-partnership` | TB (new) |
| 9 | `/investor-relations` thesis | flare gas data center in Nigeria | `/case-studies/bayelsa` | TB (new) |
| 10 | `/investor-relations` closing CTA | For Energy Owners → | `/energy-partners` | TB (new) |
| 11 | `/case-studies/bayelsa` (keep) | See what we look for in an energy partner → | `/energy-partners` | exists |
| 12 | `/esg-impact` closing CTA | See If Your Site Qualifies → | `/energy-partners` | TB (new) |
| 13 | `/esg-impact` body | Ogboinbiri case study → | `/case-studies/bayelsa` | TB (new) |
| 14 | `/esg-impact` body | what gas flaring is | `/blog/gas-flaring-explained-waste-to-energy` | TB (new) |
| 15 | `/about-leadership` CTA | For Energy Owners → | `/energy-partners` | TB (new) |
| 16 | `/about-leadership` Our Story | Read the Ogboinbiri case study → | `/case-studies/bayelsa` | TB (new) |
| 17 | `/insights` bottom CTA | See If Your Site Qualifies → | `/energy-partners` | TB (new) |
| 18 | `/contact` | See how energy partnerships work → | `/energy-partners` | TB (new) |
| 19 | 4 leader pages | See how we work with energy owners → | `/energy-partners` | TB (new) |
| 20 | `/ai-agent` | /energy-partners | `/energy-partners` | TB (new) |
| 21 | Gas flaring post, "bottle the gas" section | what stranded energy means in practice | `/blog/stranded-energy-bitcoin-waste-recovery-explained` | TB (new) |
| 22 | Gas flaring post body | flare gas data center in Nigeria | `/case-studies/bayelsa` | TB (new) |
| 23 | Builders post, What the Niger Delta Proved | flare gas data center in Nigeria | `/case-studies/bayelsa` | TB (new) |
| 24 | Builders post closing | See how energy partnerships work → / request the investor pack → | `/energy-partners`, `/investor-relations` | TB (new) |
| 25 | AI post, stage-gated section | modular data center deployment | `/strategy` | TB (new) |
| 26 | AI post closing | See how energy partnerships work → / data center investment in Africa → | `/energy-partners`, `/investor-relations` | TB (new) |
| 27 | Stranded post (4 fixed links) | existing anchors | `/blog/...` paths and `/esg-impact` | T1 |
| 28 | Stranded post, new deployment section | the Ogboinbiri case study | `/case-studies/bayelsa` | T4 (new) |
| 29 | Stranded post, new AI section | modular data center deployment / AI inference on stranded energy | `/strategy`, `/blog/ai-infrastructure-stranded-energy-2026` | T4 (new) |
| 30 | Stranded post closing | See how energy partnerships work → | `/energy-partners` | TB (new) |
| 31 | Energy storage post body | what stranded energy is | `/blog/stranded-energy-bitcoin-waste-recovery-explained` | TB (new) |
| 32 | Energy storage post closing | See how energy partnerships work → | `/energy-partners` | TB (new) |
| 33 | Bitcoin and oil post body | what gas flaring is | `/blog/gas-flaring-explained-waste-to-energy` | TB (new) |
| 34 | Bitcoin and oil post closing | See how energy partnerships work → | `/energy-partners` | TB (replaces /discuss-partnership) |
| 35 | Setting up post body | flare gas data center in Nigeria | `/case-studies/bayelsa` | TB (new) |
| 36 | Setting up post closing | See how energy partnerships work → | `/energy-partners` | TB (new) |
| 37 | Why Africa post closing | See how energy partnerships work → | `/energy-partners` | TB (new) |
| 38 | Why Africa post body | The carbon footprint of Bitcoin mining | `/esg-impact` (was a noindexed post) | TB |
| 39 | Every blog post, related posts | three newest indexable items | as listed | T2 |

**Rules:** every blog post links to at least one commercial page with that page's primary keyword or an owner CTA; every commercial page links to at least one supporting post; no indexable page links to a noindexed post except the `/insights` listing (until Task 5) and the `/discuss-partnership` form.

## Measurement and rollout

Nothing here is a result. Every number in (b) is a target, and every numeric target is **Needs sign-off, item 9**.

### (a) Baseline to capture BEFORE deploy (Makir)

Capture these on the day before deploy and paste them here. Use the same settings at 30, 60 and 90 days.

**Semrush Position Tracking** (project nrgbloom.com; locations Nigeria, United States, Canada; mobile and desktop). Positions: write the number, or "not in top 100".

| Keyword (Task 6) | Target page | NG mobile | NG desktop | US mobile | US desktop | CA desktop |
| --- | --- | --- | --- | --- | --- | --- |
| off-grid data center | `/` | | | | | |
| stranded gas data center | `/` | | | | | |
| modular data center | `/` | | | | | |
| flare gas monetization | `/energy-partners` | | | | | |
| flare gas monetization Nigeria | `/energy-partners` | | | | | |
| NGFCP flare gas award | `/energy-partners` | | | | | |
| associated gas to power | `/energy-partners` | | | | | |
| speed to power data center | `/energy-partners` | | | | | |
| stranded gas power generation | `/energy-partners` | | | | | |
| flare gas to power | `/energy-partners` | | | | | |
| associated gas utilization Nigeria | `/energy-partners` | | | | | |
| modular data center deployment | `/strategy` | | | | | |
| stage-gated data center | `/strategy` | | | | | |
| behind-the-meter data center | `/strategy` | | | | | |
| grid interconnection queue alternative | `/strategy` | | | | | |
| data center investment Africa | `/investor-relations` | | | | | |
| off-grid infrastructure investment | `/investor-relations` | | | | | |
| AI inference infrastructure Africa | `/investor-relations` | | | | | |
| flare gas data center Nigeria | `/case-studies/bayelsa` | | | | | |
| off-grid data center case study | `/case-studies/bayelsa` | | | | | |
| gas flaring Bayelsa | `/case-studies/bayelsa` | | | | | |
| gas flaring carbon credits | `/esg-impact` | | | | | |
| methane mitigation carbon credits | `/esg-impact` | | | | | |
| flare gas methane reduction | `/esg-impact` | | | | | |
| what is gas flaring | gas flaring post | | | | | |
| gas flaring explained | gas flaring post | | | | | |
| Nigeria gas flaring statistics | gas flaring post | | | | | |
| what is stranded energy | stranded energy post | | | | | |
| bitcoin mining with stranded energy | stranded energy post | #48 (Oct 2026 alert) | | | | |
| stranded energy explained | stranded energy post | | | | | |
| AI inference on stranded energy | AI post | | | | | |
| flare gas AI compute | AI post | | | | | |
| off-grid GPU deployment | AI post | | | | | |

Also record each keyword's Semrush volume per location (Task 6 still needs it). Volumes are unknown today.

**Google Search Console** (property for `https://nrgbloom.com`, Performance report, last 28 days, web search). If GSC is not set up, verify a Domain property by DNS TXT first; the baseline then starts on the first full 28 days.

| Page | Impressions | Clicks | CTR | Avg position | Indexed? (URL Inspection) |
| --- | --- | --- | --- | --- | --- |
| `/` | | | | | |
| `/energy-partners` | | | | | |
| `/strategy` | | | | | |
| `/investor-relations` | | | | | |
| `/case-studies/bayelsa` | | | | | |
| `/esg-impact` | | | | | |
| `/about-leadership` | | | | | |
| `/insights` | | | | | |
| `/blog/gas-flaring-explained-waste-to-energy` | | | | | |
| `/blog/stranded-energy-bitcoin-waste-recovery-explained` | | | | | |
| `/blog/ai-infrastructure-stranded-energy-2026` | | | | | |
| `/blog/builders-not-theorists-operational-know-how` | | | | | |
| Other 12 sitemap URLs (total) | | | | | |
| Site total | | | | | Pages indexed: __ of 24 |

**Leads** (source: Netlify Forms dashboard, Forms tab, per form; use the last 3 full calendar months).

| Month | `partnership` form (energy owners) | `investor-pack` form | `contact` form | Spam filtered | Notes |
| --- | --- | --- | --- | --- | --- |
| Jul 2026 | | | | | |
| Aug 2026 | | | | | |
| Sep 2026 | | | | | |

Also note how many direct emails to makir@nrgbloom.com and info@nrgbloom.com came from the website, if known. Mailto clicks have no baseline: the site has no analytics today.

### (b) Success targets at 30, 60 and 90 days (targets, not results; numbers are Needs sign-off, item 9)

| Window after deploy | Target | Source |
| --- | --- | --- |
| 30 days | 24 of 24 sitemap URLs indexed; 0 internal 404s; 0 indexable-to-noindex links; checker reports 0 issues | GSC Page indexing; `nrg_check.py` |
| 30 days | Lead and CTA events recorded on every form and owner CTA | GA4 Realtime / DebugView, or dataLayer test |
| 60 days | Impressions on the 12 named pages up 10 to 25% vs baseline (target) | GSC |
| 60 days | CTR on commercial pages up 0.5 to 1.5 points vs baseline (target) | GSC |
| 60 days | "bitcoin mining with stranded energy" holds or improves on #48 (target range #30 to #48) | Semrush |
| 90 days | Owner inquiries via the `partnership` form: baseline plus 1 to 3 per month (target) | Netlify Forms, GA4 `generate_lead` |
| 90 days | 4 to 6 new posts published per Task 7, each with an X thread | CMS, X queue |
| 90 days | At least 5 Task 6 keywords in the top 50 in Nigeria (target) | Semrush |

If Makir does not answer item 9, keep these rows but replace each numeric range with "direction only: up vs baseline".

### (c) Conversion tracking

GSC measures search impressions and clicks only; it does not record events. Events go to GA4 (or whatever analytics the repo already has).

1. **Detect and reuse.** Run the T0 step 7 grep. If GA4 (gtag.js) or GTM exists, use its existing loader and consent logic and add only the events below. If another tool exists (Plausible, Fathom), send the same event names through its API. The live crawl found nothing.
2. **If nothing exists:** add `/js/nrg-events.js` (below) to every page before `</body>`. It pushes to `window.dataLayer`, and calls `gtag` only if gtag is present, so it sends nothing until an analytics tag is installed. Install the GA4 tag only when Makir supplies a measurement ID (Sign-off item 9), and load it only after the existing cookie banner's "Accept" (find the banner script by grepping `We use cookies to improve your experience`). When GA4 ships, add a sentence naming Google Analytics to the privacy policy "5. Cookies" section.
3. **Events:**

| Event | Fires when | Parameters | GA4 setting |
| --- | --- | --- | --- |
| `generate_lead` | Submit of a Netlify form named `partnership`, `investor-pack` or `contact` (the browser fires `submit` only after HTML5 validation passes) | `form_name`, `page_path` | Mark as key event |
| `contact_click` | Click on any `mailto:` link | `link_url`, `link_text`, `page_path` | Mark as key event |
| `cta_click` | Click on any link to `/energy-partners` or `/discuss-partnership` | `link_url`, `link_text`, `page_path` | Report only |

```javascript
// /js/nrg-events.js : lead and CTA events. Sends nothing unless gtag or a dataLayer consumer is installed.
(function () {
  window.dataLayer = window.dataLayer || [];
  function send(name, params) {
    params = params || {};
    params.page_path = location.pathname;
    if (typeof window.gtag === "function") {
      params.transport_type = "beacon";
      window.gtag("event", name, params);
    } else {
      params.event = name;
      window.dataLayer.push(params);
    }
  }
  var FORMS = ["partnership", "investor-pack", "contact"];
  document.addEventListener("submit", function (e) {
    var f = e.target;
    var n = f && f.getAttribute && f.getAttribute("name");
    if (FORMS.indexOf(n) !== -1) send("generate_lead", { form_name: n });
  }, true);
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a) return;
    var href = a.getAttribute("href") || "";
    var text = (a.textContent || "").trim().slice(0, 80);
    if (href.indexOf("mailto:") === 0) send("contact_click", { link_url: href, link_text: text });
    else if (/\/(energy-partners|discuss-partnership)(\.html)?([#?]|$)/.test(href)) send("cta_click", { link_url: href, link_text: text });
  }, true);
})();
```

4. **Test:** open a deploy preview, run `window.dataLayer` in the console after clicking a CTA and a mailto link, and submit each form once with test data marked "TEST". Expected: one entry per action with the right `event` name. Delete the test submissions in Netlify.
5. **Netlify Forms stays the source of truth** for lead counts. Turn on email notifications for the `partnership` form to makir@nrgbloom.com if they are not on.
6. **Search Console:** submit `https://nrgbloom.com/sitemap.xml` after deploy and request indexing for the 12 named pages.

### (d) Owners

| Owner | Responsibility |
| --- | --- |
| Claude Code | Implements this package in one run, ships safe defaults, writes the final report with SIGNOFF list and checker output |
| Makir | Answers the Sign-off list; captures the baseline in (a); owns Semrush and Search Console; approves every new post and every public claim |
| Chief of staff agent | Monthly freshness check (C4) and a fact check of every public number against the Fact Registry; reruns `nrg_check.py` monthly and files the diff |
| NRG Comms agent | Turns each new post into a 3 to 5 post X thread linking back; all threads go through the founder-approved queue; paced at 1 original post per weekday, threads count toward it |

### (e) Publishing workflow for new posts

1. Draft from the Content Task B template, with the pillar noted in the draft header.
2. Fact-check: run the nrg-fact-check skill; every number traces to the Fact Registry or a linked primary source; no banned strings; no dashes.
3. Makir approves the draft and every public claim in it.
4. Publish: add to the sitemap with `lastmod`, Article JSON-LD with `datePublished`, add the post to `/insights` and the related-posts pool, link it to its commercial page, and run `nrg_check.py`.
5. X thread queued by Comms in the approval queue, linking to the post.

### (f) Monthly review cadence (first Monday of each month)

1. Chief of staff agent runs `nrg_check.py` and the C4 freshness routine; posts the issue count and any changed source figures.
2. Makir updates the Semrush and GSC tables in (a) with a new dated column, and the Netlify lead counts.
3. Compare against the (b) targets; pick next month's two posts from X posts that drew replies.
4. Comms reports X thread impressions and replies per linked post.
5. Decisions and any new Sign-off answers go into the changelog of this package.

## Content Task A (P0): Title tags and meta descriptions

Superseded by the Per-page change sheet, which has BEFORE and AFTER for all 24 sitemap pages with character counts (summary table at its top). Implementation is execution step TA. Rules kept from v2: primary keyword first, brand last, titles 50 to 60 characters, metas 130 to 155; mirror each into `og:title`, `og:description`, `twitter:title` and `twitter:description`; add `og:title` where it is missing (7 pages) and fill the empty `og:image` with the page's hero image.

## Content Task B (P0): The SEO writing template

Kept from v2 with the Pillar line. The posts gaining ground share a pattern: a definition up front, question-led headings, sourced numbers, an operator's point of view, and a clear next step. That structure suits featured snippets, AI Overviews and AI assistants that cite sources.

| Element | Rule | Why it ranks |
| --- | --- | --- |
| Title tag | Primary keyword first, 50 to 60 chars, brand last | Matches the query; shows in full |
| H1 | Can differ from the title; brand voice allowed | Hooks the reader without costing the keyword |
| TL;DR | 40 to 60 words, opens with "[Keyword] is…" | Lifted into snippets and AI answers |
| H2s | Phrased as the questions people search, e.g. "How loud are gas flares?" | Matches People Also Ask and long-tail queries |
| First sentence under each H2 | Answers the question in one line, then expands | Gives Google a clean extractable answer |
| Numbers | One sourced figure per section, linked to a primary source (World Bank, EIA, IEA) | Builds trust with Google and expert readers |
| Field detail | At least one first-hand observation from building in Nigeria | The experience signal competitors cannot copy |
| Internal links | 2 to 4: one commercial page plus related posts, descriptive anchors | Passes authority to the pages that convert |
| Byline | Named author with role and one-line credential; JSON-LD author matches | Expertise signal |
| Dates | Published date plus "Updated" date on refreshes; JSON-LD matches the page | Freshness |
| Pillar | One to two pillars from Message alignment, noted in the draft header | Keeps the site and X saying the same thing |
| Close | FAQ of 3 to 5 questions, then a CTA to the matching commercial page, addressed to energy owners | Extra queries; turns readers into leads |

```markdown
Title tag: [Primary keyword]: [Benefit or angle] | NRG Bloom
Meta: [One-line answer containing the keyword]. [What the reader learns]. [Reason to click].
Slug: /blog/[primary-keyword-in-plain-words]
H1: [Brand-voice headline]
Byline: [Name], [Role] · Published [date] · Updated [date]
Pillar: [1 to 4, from Message alignment]

TL;DR: [Keyword] is [plain definition]. [Why it matters, with one sourced number]. [How NRG Bloom fits in one sentence].

## What is [keyword]?
[One-sentence answer.] [Two to three sentences expanding, with one linked source.]

## Why does [problem] happen?
## How does [solution] work?
## What does it look like in the field?
[First-hand detail from operations.]
## What does it earn the energy owner?
## What comes next?

## FAQ
**[Question people search]?** [Two-sentence answer.]

[CTA linking to the matching commercial page, phrased as a question to energy owners]

## References
1. [Source, year, link]
```

**Writing rules:**

- Use the primary keyword in the title, the TL;DR, one H2 and the meta. Elsewhere use natural variants.
- Operator language for energy owners first, investors second. Specifics, not adjectives. Sentences under 25 words.
- Open with the owner's problem or a sharp operator claim in line one (pillars 3 and 4).
- Do not reuse the same statistic in adjacent sections, and do not lean on a repeated stat as the hook.
- No hype words (full list in Voice rules), no anonymous quotes, no en or em dashes.
- No CapEx, IRR, WACC, fundraise, OEM, LOI or partner names; no return, margin, payback or breakeven language.
- Every draft runs through the nrg-fact-check skill before publishing.

v3 change: the H2 "What does it cost, or what does it earn?" became "What does it earn the energy owner?", so posts do not drift into cost or return guidance.

## Content Task C (P0): Keep the site current with industry news and the X feed

### C1. Replace outdated flaring figures site-wide

The [2026 Global Gas Flaring Tracker](https://www.worldbank.org/en/programs/gasflaringreduction/publication/2026-global-gas-flaring-tracker-report) (World Bank, June 23, 2026) reports 2025 data using an improved satellite method that also revised 2024 upward. "151 bcm" must not appear anywhere.

**Verification status (v4, Oct 11):** the first four rows are on the [World Bank report page](https://www.worldbank.org/en/programs/gasflaringreduction/publication/2026-global-gas-flaring-tracker-report) itself. The CO₂e, 83% and Nigeria 8% figures are from the report as quoted by at least two independent outlets ([Energy Connects](https://www.energyconnects.com/opinion/features/2026/june/global-gas-flaring-rising-twice-as-fast-as-oil-production-world-bank-says/), [Down To Earth](https://www.downtoearth.org.in/energy/nine-countries-responsible-for-83-of-global-gas-flaring-in-2025-says-world-bank-report), [Nairametrics](https://nairametrics.com/2026/06/23/nigeria-8-others-account-for-83-of-global-gas-flaring-world-bank/), BusinessDay). All rows are Ready. Link the World Bank report, not the outlet, when citing on the site. Note that the report's new method revised 2024 flaring to 157 bcm, so never pair 167 bcm with the retired 151 bcm.

| Old claim on site | Replace with | Source | Status |
| --- | --- | --- | --- |
| 151 bcm flared in 2024 | 167 bcm flared in 2025, the third straight annual rise | World Bank 2026 tracker | Verified. Ready |
| Highest level since 2007 | Highest level since 2019 | World Bank 2026 tracker | Verified. Ready |
| ~$63 billion of energy wasted | ~$54 billion of gas wasted in 2025 | World Bank 2026 tracker | Verified. Ready |
| "Close to Africa's total annual gas consumption" | Keep: 2025 flaring matches Africa's annual gas consumption | World Bank 2026 tracker | Verified. Ready |
| ~389 Mt CO₂e (and "46 Mt from unburned methane" in the gas flaring post) | ~429 Mt CO₂e in 2025, including ~50 Mt from unburned methane | World Bank 2026 tracker, as quoted by [Energy Connects](https://www.energyconnects.com/opinion/features/2026/june/global-gas-flaring-rising-twice-as-fast-as-oil-production-world-bank-says/) and [Down To Earth](https://www.downtoearth.org.in/energy/nine-countries-responsible-for-83-of-global-gas-flaring-in-2025-says-world-bank-report) | Verified (v4). Ready |
| Top nine countries ≈ 75% of flaring | Top nine countries, Nigeria among them, = 83% of flaring while producing 46% of oil | World Bank 2026 tracker, as quoted by Down To Earth and Nairametrics | Verified (v4). Ready |
| Nigeria flaring rose 12% in 2024 | Keep the 2024 sentence, cited to the 2025 report. Add "Nigeria's flaring rose 8% in 2025, in step with an 8% rise in oil output" | World Bank 2026 tracker, as quoted by [Nairametrics](https://nairametrics.com/2026/06/23/nigeria-8-others-account-for-83-of-global-gas-flaring-world-bank/) and BusinessDay | Verified (v4). Ready |
| "approximately 150 billion cubic meters ... annually" (AI post) | The World Bank reports that 167 billion cubic meters were flared in 2025 | World Bank 2026 tracker | Verified. Ready |

Pages: homepage "The Opportunity", `/case-studies/bayelsa` Problem and References, gas flaring post (Impact section, TL;DR, meta), AI post, stranded post (Task 4), llms files. Exact BEFORE and AFTER are in the sheet and T3. Update the nrg-fact-check reference sheet too, or the skill will revert content to the old numbers. Use each figure once per page area.

### C2. Industry stories the site should reflect now

**Guardrail for stories 2 and 3:** hashprice and EV (enterprise value) multiples are third-party market context only, with the source named. Never frame them as NRG Bloom economics, returns or valuation.

1. **Lead story: Nigeria's stalled NGFCP flare awards.** Minister of State for Petroleum Resources (Gas) Ekperikpe Ekpo said about 20 of 42 NGFCP awardees had made significant progress, leaving roughly 22 (52.4%) yet to reach that level, based on a NUPRC report ([Guardian Nigeria, Oct 5, 2026](https://guardian.ng/news/gas-commercialisation-falters-as-22-of-42-awardees-struggle-to-develop-flare-sites/)). NUPRC evaluates each award one year after it is granted and warned it can revoke awards without progress ([BusinessDay, Sep 2026](https://businessday.ng/energy/article/nuprc-to-revoke-gas-flare-permits-over-inaction/)). Ekpo also said some investors met resistance gaining access to flare sites, and that companies could either develop the technology to capture the gas or allow qualified investors to commercialise it. NUPRC data cited in the same report: Nigeria flared about 301.6 billion cubic feet of gas between January 2025 and June 2026. Verified Oct 11 (v4). Angle (pillars 2 and 4): award holders face a review, and modular on-site compute puts the gas to work without waiting for midstream. Close with a direct question to award holders. Do not state or imply that NRG Bloom is a qualified or approved NGFCP investor. Mapped to `/energy-partners`. Same post as Task 7 post 1. Publishing the post still needs Makir's approval (item 7).
2. **Bitcoin miners are pivoting to AI, which fits the stage-gated model.** Miners with AI hosting contracts traded at 12.3 times enterprise value versus 5.9 times for pure-play miners, while hashprice fell to about $31.80 per PH/s ([CoinDesk, Aug 18, 2026](https://www.coindesk.com/business/2026/08/18/bitcoin-miners-ai-pivot-pays-off-but-mining-could-revive-with-one-twist)). Angle: NRG Bloom designed the Bitcoin-to-AI path from the start rather than pivoting under pressure. Market context only. Verified Oct 11 (v4) against CoinDesk.
3. **Behind-the-meter gas now powers US AI build-outs.** Developers have announced roughly 101 GW of behind-the-meter gas generation in the US ([RBC Capital Markets](https://www.rbccm.com/en/insights/2026/05/natural-gas-powers-the-data-center-boom)). Angle (pillar 1): the US proved the model at grid scale; NRG Bloom applies it where gas is already burned for nothing. Verified Oct 11 (v4) against RBC Capital Markets.
4. **Nigeria's flaring keeps rising.** The flaring rate hit 7.48% in August 2026, the highest since October 2025, per NUPRC data ([Nairametrics, Sep 17, 2026](https://nairametrics.com/2026/09/17/nigerias-gas-flaring-hits-7-48-in-august-highest-since-october-2025/)). Angle (pillar 4): the supply of stranded gas in the home market is growing. Verified Oct 11 (v4) against Nairametrics.

Each story becomes one post via the Content Task B template, plus a line on the matching commercial page. Suggested titles: "Stalled NGFCP Flare Awards: What Award Holders Can Do Before Review" → `/energy-partners` (first); "Why Bitcoin Miners Are Becoming AI Companies, and Why We Built for It" → `/strategy`; "Behind-the-Meter Data Centers: What the US Gas Boom Means for Flared Gas" → `/energy-partners`; "Nigeria Gas Flaring 2026: What the Latest Data Shows" → `/case-studies/bayelsa`.

**On `/energy-partners` in this run:** the NGFCP block in the sheet ships with the two verified facts and the Guardian Nigeria link (v4). The full post waits for Makir's approval.

### C3. Align the X account with the site

Comms owns X; LinkedIn is on hold. Weekly scoreboards (IQ-001, PB-001, NT-001, NGFCP-001, OG-003) supply the post-level signal.

- **Bio (Sign-off item 8):** proposed "Turn stranded and flared gas into revenue. Off-grid data centers: Bitcoin validates the site, AI inference scales it. Building in Nigeria. nrgbloom.com". Safe default: no change until approved.
- **Pinned post** dates from April 2023 (Bitcoin and renewable grids). Pin the NGFCP post once published, or the case study now (item 8).
- **Loop rule:** X posts that draw replies become blog topics (today the NGFCP lane). Each new post gets a 3 to 5 post X thread linking back. Do not repeat the retired 151 bcm figure (as in the Mar 31 post "151BCM at the very least").
- **Approval queue:** 1 original post per weekday, founder-approved. Blog threads use the same queue and count toward it.
- **Capacity:** a July 2025 X conference post describes a 500 kW site; the site says 1 MW energized, 1.5 MW developed. Speaker bios and press kits use the site figures.
- **Link:** the site now links `https://x.com/NRGBloom` (was `twitter.com`, T3).

### C4. Monthly freshness routine (Chief of staff agent)

- [ ] Check World Bank, NUPRC and CoinShares data, and NUPRC updates on the NGFCP review; update any changed figure.
- [ ] Check every public number against the Fact Registry; run `nrg_check.py`; report the issue count.
- [ ] Confirm "Operating figures as of <month>" lines are still true, or flag them to Makir.
- [ ] Two new posts via the Content Task B template, each tied to a news story or an X post that drew replies, each mapped to a pillar.
- [ ] One sentence of current context on a commercial page.
- [ ] Refresh one older indexable post and its "Updated" date and `dateModified`.
- [ ] Thread each new post on X through the approval queue.

## Task 1 (P0): Fix broken links and assets

Execution step T1 has the exact hrefs, `_redirects` lines and asset fixes. Crawl result: the 4 v2 links on the stranded post are confirmed 404; also fixed in v3: `/live-mining-pool-data` (noindexed comparative post), the footer logo srcset file on 20 blog pages, and the 403 card image on `/insights`.

## Task 2 (P0): Show the newest indexable posts

Execution step T2. Homepage cards: Burning Money (Oct 5, 2026), Ogboinbiri case study (Aug 6, 2026), Builders, Not Theorists (Apr 22, 2026). Also fix the related-posts block, which shows noindexed posts on 6 of 8 indexable posts. Use the three newest indexable items, excluding the current page.

## Task 3 (P0): Correct overstated or inconsistent claims

Execution step T3 (site-wide strings) plus the Per-page change sheet. Status of the v2 items:

| v2 item | v3 status |
| --- | --- |
| 1 worldwide | Ready, now covers 9 surfaces incl. JSON-LD, llms files, privacy policy |
| 2 "Why We're Profitable" | Ready. It is an eyebrow above the H2, not the H2 |
| 3 "3-5x" | Sign-off item 1; default remove (also in llms-full margin lines) |
| 4 "300 t" | Ready: "300+ t" |
| 5 "5 MW" | Sign-off item 3; four labels found |
| 6 zero CapEx | Sign-off item 2 |
| 7 Ogboinbiri status | Closed. Keep present-tense wording. Metas that had to shrink keep it |
| 8 hero | Ready: reuses existing claims, no "online in weeks" |
| 9 IR $0.03/kWh meta | Sign-off item 5; default keeps $0.03/kWh (on the case study and IR) |

## Task 4 (P1): Refresh the climbing article

Page: `/blog/stranded-energy-bitcoin-waste-recovery-explained`. Keep slug, H1 topic and "stranded energy" in the title. Title, meta, dates, body wording and CTA are in the sheet (page 18). Add these sections. All facts are from the case study and strategy pages; status Ready.

**1. Insert before the "Challenges When Using Stranded Energy to Mine Bitcoin" H2:**

```markdown
## How does stranded energy deployment work in practice?

Since February 2025, NRG Bloom has run a modular, off-grid data center on flared gas in Ogboinbiri, Bayelsa State, Nigeria. The site is energized at 1 MW of 1.5 MW developed. It has held 94% uptime. It runs under a community-based power purchase agreement at $0.03 per kilowatt-hour, and the community is paid for the power the site uses.

Bitcoin mining goes first because it tolerates variable power and earns inside a 60 to 90 day window. It proves energy reliability, site security and offtake before heavier hardware is committed. Read the [Ogboinbiri case study](/case-studies/bayelsa) for the full record.
```

**2. Insert after it:**

```markdown
## What comes after Bitcoin mining on stranded energy?

Bitcoin validates the site. AI inference scales it. Once power and operations are proven, the same site can host GPU workloads that need steady power and tolerate some latency. Our [modular data center deployment](/strategy) model sets out the three stages, and our post on [AI inference on stranded energy](/blog/ai-infrastructure-stranded-energy-2026) covers the 2026 landscape.
```

**3. Flaring figures in this post:** if any sentence cites global flaring volume, use "167 billion cubic meters in 2025, the highest level since 2019" with an inline link to the World Bank 2026 tracker. Grep `billion cubic` in the post first.

**4. Insert before "Conclusion":** a visible FAQ, mirrored as FAQPage JSON-LD on this page.

```markdown
## FAQ

**What is stranded energy?** Stranded energy is power that has no economic route to market. Examples include flared associated gas at remote oil sites and curtailed renewable power.

**Why is bitcoin mining used on stranded energy?** Mining can run anywhere with power and tolerates variable supply. That makes it a fast way to prove a remote site before heavier hardware arrives.

**Does stranded energy need a pipeline or grid connection?** No. On-site generation and compute use the energy where it is produced.

**Where does NRG Bloom operate?** In Bayelsa State, Nigeria, on flared gas, since February 2025.
```

**5. Inbound links** from the gas flaring post, the energy storage post and `/energy-partners` (Internal link plan rows 7, 21, 31).

## Task 5 (Deferred): Clean up the Insights hub

Still deferred. In this run only the H1 (sheet page 8), the 403 card image (T1) and a closing owner CTA change on `/insights`. The archive split, H2s for the sections and filters wait. `nrg_check.py` allows `/insights` to keep linking to noindexed posts until then.

## Task 6 (P1): Keyword-to-page map

Makir validates volumes in Semrush first (volumes unknown today); swap any keyword with no demand before the next content round. The sheet already applies the primary keywords below.

| Page | Primary keyword | Secondary keywords | Pillar |
| --- | --- | --- | --- |
| `/` | off-grid data center | stranded gas data center, modular data center | 1, 4 |
| `/energy-partners` | flare gas monetization | flare gas monetization Nigeria, NGFCP flare gas award, associated gas to power, speed to power data center, stranded gas power generation, flare gas to power, associated gas utilization Nigeria | 1, 2, 3, 4 |
| `/strategy` | modular data center deployment | stage-gated data center, behind-the-meter data center, grid interconnection queue alternative | 1 |
| `/investor-relations` | data center investment Africa | off-grid infrastructure investment, AI inference infrastructure Africa | 1 |
| `/case-studies/bayelsa` | flare gas data center Nigeria | off-grid data center case study, gas flaring Bayelsa | 3, 4 |
| `/esg-impact` | gas flaring carbon credits | methane mitigation carbon credits, flare gas methane reduction | 4 |
| `/about-leadership` | off-grid data center team | (none) | 3 |
| `/insights` | stranded energy insights | gas flaring insights | 4 |
| Gas flaring post | what is gas flaring | gas flaring explained, Nigeria gas flaring statistics | 4 |
| Stranded energy post | what is stranded energy | bitcoin mining with stranded energy, stranded energy explained | 4 |
| AI post | AI inference on stranded energy | flare gas AI compute, off-grid GPU deployment | 1 |
| Builders post | (brand post; none) | operational know-how | 3 |

"Bitcoin mining" stays prominent only on the stranded energy post and the older Bitcoin-era posts. Do not keyword-stuff: one natural use in the title, the H1 or first paragraph, and one H2.

## Task 7 (P2): Content cadence, tracking and housekeeping

Two posts a month, each tied to a Task 6 keyword, a pillar and a commercial page. Makir approves topics; every draft runs through nrg-fact-check.

1. Stalled NGFCP Flare Awards: What Award Holders Can Do Before Review → `/energy-partners`. Keyword: NGFCP flare gas award. Pillar 2. Facts verified (v4); post approval is Sign-off item 7.
2. Power, Not Chips, Is the Limit on AI Compute → `/strategy`. Keyword: grid interconnection queue alternative. Pillar 1.
3. Don't Wait for Midstream: Monetizing Associated Gas On Site → `/energy-partners`. Keyword: associated gas to power. Pillar 3.
4. How Flare Gas Becomes Compute: The Wellhead-to-Rack Power Chain → `/energy-partners`. Keyword: stranded gas power generation. Pillars 1, 3.
5. Flare Gas Carbon Credits: How Methane Destruction Is Measured → `/esg-impact`. Keyword: gas flaring carbon credits. Pillar 4. State that no credits have been issued to date.
6. Off-Grid vs Grid-Connected Data Centers: Speed and Risk Compared → `/investor-relations`. Keyword: off-grid infrastructure investment. Pillar 1. No cost, return or margin figures beyond the Fact Registry.

Backlog: "Gas flaring in Nigeria: what the 2025 World Bank data shows" (covered by C2 story 4) and the competitor comparison post (names other companies; stays off the plan).

**Semrush (Makir):** add Canada and United States, desktop and mobile, beside Nigeria. Kenya and Colombia locations: Sign-off item 4 (internal tracking, but tied to the expansion decision). Add all Task 6 keywords. Connect Search Console.

**Housekeeping (Claude Code):** execution step T7. The v2 www item is resolved: `https://www.nrgbloom.com/` 301s to `https://nrgbloom.com/` (Oct 11). Re-check `http://` from a normal network.

## Guardrails

- Do not change any URL slug. Use 301s only for the bare blog slugs in T1.
- Do not add Disallow rules to robots.txt or add noindexed URLs to the sitemap.
- Do not add statistics, testimonials, partner names, volumes or metrics that are not already on the site or supplied by Makir.
- No CapEx, IRR, WACC, fundraise, OEM, LOI, Viraj, GENA or partner names on any public page, in JSON-LD, llms files or ai-agent.json.
- No return, margin, payback, breakeven or valuation language for NRG Bloom on public pages.
- No Kenya or Colombia on any public surface until Sign-off item 4. Third-party mentions inside old posts (allow list in the checker) stay.
- Do not imply NRG Bloom is a qualified or approved NGFCP investor.
- Do not state carbon credits as earned or issued.
- Do not touch Ogboinbiri status wording (Closed).
- Preserve brand colors (Blue #14489B, Grey #6B6B6B, White #FFFFFF) and the design system.
- No hype words, no en or em dashes, sentences under 25 words in new copy.
- Do not install an analytics vendor script without a measurement ID from Makir.

## Verification checklist before reporting done

- [ ] `nrg_check.py` reports 0 issues (from a baseline of about 166).
- [ ] The link crawl finds zero internal 404s and zero links from indexable pages to noindexed pages, except the `/insights` listing and `/discuss-partnership`.
- [ ] Every sitemap page returns 200, is indexable and self-canonical; titles 50 to 60, metas 130 to 155 (checker).
- [ ] The banned-string `rg` returns only the allowed third-party hits.
- [ ] The dash `rg` returns nothing in the publish directory, llms files and ai-agent.json.
- [ ] `rg -n 'SIGNOFF: item' .` lists every sign-off default; the report lists the JSON and txt ones too.
- [ ] Every non-legal page has a pillar and a link to `/energy-partners`.
- [ ] JSON-LD validates on every changed page; Article dates and authors match the visible byline.
- [ ] `window.dataLayer` shows `generate_lead`, `contact_click` and `cta_click` on a deploy preview.
- [ ] No image over 500 KB is referenced by an indexable page (`find` command in Verification).
- [ ] The report lists every file changed, grouped by task ID.

## Sign-off list for Makir

Claude Code ships the safe default for each item now. Your answer replaces it in a follow-up commit.

1. **Return-style, comparative and legal claims.** Remove "3-5x margin", "returns from day one", "100% utilization", "triple revenue", "breakeven", "high-margin", "fully compliant", "qualifies for carbon credit" and similar? Recommended: yes, remove. Safe default: removed.
2. **Producer capital wording.** Replace "zero CapEx to the energy producer" with "No upfront capital required from the energy producer in our standard model"? Recommended: yes, if every deal is structured that way. Safe default: drop the CapEx phrase and use the existing "We deploy, own, and operate all compute infrastructure on site."
3. **5 MW label.** Signed development or prospective pipeline? Recommended: "5 MW pipeline under development" everywhere (matches the case study note). Safe default: that label.
4. **Kenya and Colombia.** Any public mention, schema `areaServed`, llms files, ai-agent.json, Semrush locations? Recommended: none until a site is signed. Safe default: removed from all public surfaces; Nigeria only.
5. **Operating figures and targets.** Are 1 MW, 94% uptime, $0.03/kWh and 300+ t still current, and is the uptime target 99.5%+ (home) or 99.9% (strategy)? Recommended: keep "as of August 2026" and use 99.5%+. Safe default: that, plus `numberOfEmployees` deleted from schema.
6. **Flaring figures beyond the World Bank page.** Resolved in v4: 429 Mt CO₂e, 83% / 46% and Nigeria +8% in 2025 were verified Oct 11 against multiple outlets quoting the report, and now ship as Ready. No answer needed unless you want them held back.
7. **NGFCP.** Facts resolved in v4 (Guardian Nigeria, Oct 5, 2026; BusinessDay, Sep 2026), so the `/energy-partners` block ships with them. Still yours to approve: publishing the NGFCP post (Task 7 post 1). Recommended: yes, publish first. Safe default: no post.
8. **X bio and pinned post (with Comms).** Approve the new bio and pin the case study? Recommended: yes. Safe default: no change on X.
9. **Analytics and targets.** Provide a GA4 measurement ID, confirm loading it after cookie consent with a privacy policy line, and approve the 30/60/90 numeric ranges? Recommended: yes to all three. Safe default: dataLayer events only, no vendor script, privacy policy unchanged, targets "direction only".
