# NRG Bloom v3 audit notes: raw crawl findings per URL

Crawl date: Sunday Oct 11, 2026, about 4:55 to 5:20 PM ET. Method: curl from the box (Netlify origin, `server: Netlify`), parsed with BeautifulSoup. Status codes via curl with redirects followed (`curl -sL -w %{http_code}`) and `curl -sIL` spot checks. No browser.

Scope: robots.txt, sitemap.xml (24 URLs), llms.txt, llms-full.txt, /.well-known/ai-agent.json, every sitemap URL, /insights and every /blog/ link on /insights (20 blog links: 8 in sitemap plus 12 noindexed), /discuss-partnership (form page, not in sitemap). Every unique internal href (46 paths) was status-checked. 135 unique image URLs were HEAD-checked for size.

Note on verbatim quotes: page text is quoted as served. Any en dash or em dash character in quoted page text (found only in three noindexed posts) is shown as a hyphen so this file stays dash-free.

## 1. Site-level checks

| Check | Result |
| --- | --- |
| robots.txt | 200. `Allow: /` for all agents, 13 AI and search bots named explicitly. No Disallow. Sitemap line present. Confirmed (v1/v2 correct). |
| sitemap.xml | 200. 24 URLs, all return 200, none noindexed, all self-canonical. Comment says "Policy and rationale in CLAUDE.md. Last audited 2026-08-06". lastmod 2026-08-06 on 8 commercial URLs, 2026-10-05 on the gas flaring post, 2026-05-26 on the stranded energy post, 2026-03-18 on the rest. /case-studies/bayelsa listed (v1 counted it as commercial). |
| Indexable inventory | 24 sitemap URLs: 8 commercial (/, /strategy, /energy-partners, /investor-relations, /case-studies/bayelsa, /esg-impact, /about-leadership, /insights), /contact, 4 leader bios, /ai-agent, 8 blog posts, 2 legal pages. v1/v2 said "8 commercial, 4 leadership, 9 blog posts": the ninth "post" is the case study. Confirmed with that clarification. |
| Noindexed posts on /insights | 12, all `noindex, follow`: supply squeeze plus 11 Bitcoin-era posts. Confirmed. |
| llms.txt | 200, 1,964 bytes. Still says "stranded and flared gas sites worldwide", "low-CapEx workloads", "expanding to Kenya and Colombia", "high-margin AI inference", "5 MW pipeline under development". Links to `/discuss-partnership.html`, `/investor-relations.html`, `/contact.html` (each 301s to the clean URL). Labels PUE <1.2 as target (good). "As of August 2026" date label. NEW: v2 did not flag the .html links or "low-CapEx". |
| llms-full.txt | 200, 7,583 bytes. Same "worldwide", "low-CapEx", "Kenya and Colombia", "high-margin" language; "60-90 day" deployment; "$0.03/kWh ... well below global grid rates". NEW: v2 did not review it. |
| /.well-known/ai-agent.json | 200. Lists markets incl. "Kenya", "Colombia"; `pipeline_under_development_mw: 5`, `uptime_percent: 94`, `co2e_mitigated_tonnes: 300`, `energy_cost_kwh_usd: "0.03"`. NEW. |
| https://www.nrgbloom.com/ | Resolves. `HTTP/2 301` to `https://nrgbloom.com/`, then 200. v1/v2 open item now CONFIRMED working. |
| http://nrgbloom.com/ and http://www.nrgbloom.com/ | Not verifiable from the box: TCP port 80 timed out (curl exit 28), which looks like a sandbox egress limit, not a site fault. HSTS is set (`max-age=63072000; includeSubDomains; preload`), so browsers upgrade to https. Claude Code should re-check from a normal network. |
| .html legacy URLs | `/index.html`, `/energy-partners.html`, `/investor-relations.html`, `/contact.html`, `/discuss-partnership.html` each 301 to the clean URL. |
| /discuss-partnership | 200, `noindex,follow`, self-canonical, H1 "Discuss a Partnership". Netlify form `name="partnership"` with fields company-name, your-name, email, phone, site-location, gas-volume, message. Linked from every page (nav, footer, CTAs). Noindex is deliberate for a form page; treat as an allowed noindex target. |
| Forms | Netlify Forms (`data-netlify="true"`, honeypot `bot-field`): `partnership` (/discuss-partnership), `investor-pack` (/investor-relations, anchor #request), `contact` (/contact). |
| Analytics | NONE detected on any crawled page: no gtag.js, no GA4 measurement ID, no GTM container, no Plausible, Fathom, Umami, PostHog, Clarity, Cloudflare or Vercel analytics. A cookie notice exists ("We use cookies to improve your experience... Accept"). NEW: v2 did not check. |
| Organization JSON-LD (home) | Present. `sameAs`: `https://www.linkedin.com/company/nrgbloom/`, `https://twitter.com/nrgbloom`. `areaServed`: Nigeria, Kenya, Colombia (public market claim in schema). `numberOfEmployees` 10 to 20 (not stated anywhere in visible copy). `foundingDate` 2023, `foundingLocation` Quebec, Canada. NEW. |
| Footer social links | `https://twitter.com/nrgbloom` and `https://www.linkedin.com/company/nrgbloom/` on 38 pages. Target per brief: `https://x.com/NRGBloom`, `https://linkedin.com/company/nrgbloom`. |
| Footer copy (all pages) | "Converting stranded energy into AI-ready compute infrastructure. Modular data centers deployed at off-grid sites worldwide." plus "Canadian. Building in Nigeria." Confirmed v2 Task 3 item 1. |
| Footer logo srcset | NEW: on 20 blog pages the footer logo `srcset` points to `images/NRG-bloom-meta-image_1NRG-bloom-meta-image.webp` (relative, resolves under /blog/images/). Both that path and /images/NRG-bloom-meta-image_1NRG-bloom-meta-image.webp return 404, so browsers that pick the 500w/800w/1080w candidate show a broken logo. |
| Dash characters | Indexable pages: 0 en/em dashes in visible text. Noindexed posts: 10 total (carbon footprint 2, comparative analysis 7, halving 1). llms.txt, llms-full.txt, ai-agent.json: 0. |

## 2. Confirm or refute v1/v2 findings

| v1/v2 finding | Status on Oct 11 crawl | Evidence |
| --- | --- | --- |
| 4 broken links on the stranded energy post (missing /blog/ prefix) | CONFIRMED | `/why-africa-is-the-future-of-bitcoin-mining` (anchor "Africa"), `/carbon-footprint-and-environmental-impact-of-bitcoin-mining` ("carbon footprint associated with Bitcoin mining"), `/bitcoin---helping-the-oil-industry-to-end-gas-flaring` ("natural gas flaring"), `/ai-infrastructure-stranded-energy-2026` ("AI compute infrastructure"). All 404; all four /blog/ targets 200. |
| Stranded post also links to noindexed posts | CONFIRMED and WIDER | The 3 noindexed posts (supply squeeze, comparative analysis, treasury) appear in the "Latest news updates" related-posts block on 6 of 8 indexable posts (AI, stranded, energy storage, Bitcoin and oil, setting up, why Africa), not just the stranded post. |
| Homepage features a noindexed insight | CONFIRMED | "Latest Insights" cards: Builders (Apr 22, 2026), AI Infrastructure Meets Stranded Energy (Mar 11, 2026), Bitcoin Mining in 2025 supply squeeze (Nov 25, 2025, noindex). Skips gas flaring post (Oct 5, 2026) and case study (Aug 6, 2026). |
| 151 bcm figures | CONFIRMED | Homepage (2x: paragraph and stat card "151B"), case study Problem section and References. Also "highest level since 2007", "$63 billion". NEW: the AI post says "approximately 150 billion cubic meters ... annually" and "Germany and France" comparison; the gas flaring post (Oct 5, 2026) cites "389 million tonnes of CO₂e were emitted in 2024, including around 46 million tonnes ... unburned methane" from the 2025 tracker. |
| World Bank 2026 tracker figures | VERIFIED on worldbank.org page (fetched Oct 11) | 167 bcm in 2025, third consecutive rise, highest since 2019, about US$54 billion, matches Africa annual gas consumption. Published June 23, 2026. The 429 Mt CO₂e, ~50 Mt methane, 83% / 46% figures are NOT on that page: still Down To Earth-derived, verify in the report PDF. |
| Title lengths over 60 | CONFIRMED | 9 titles over 60 (61 to 95 chars). Plus 7 titles under 50 (20 to 44 chars) that v2 did not cover: 4 leader pages, /ai-agent, setting-up post, legal pages. |
| Date mismatch on stranded energy post | CONFIRMED and WIDER | Page shows Aug 15, 2023; /insights shows Mar 11, 2024; JSON-LD `datePublished` 2025-06-01, `dateModified` 2026-03-03; sitemap lastmod 2026-05-26. All 17 pre-2026 posts share the placeholder JSON-LD dates 2025-06-01 / 2026-03-03. |
| /insights H1 "Stay in the Know", no H2s | CONFIRMED | Also: the homepage uses "Stay in the Know" as an H2 for its insights block. |
| Homepage "Why We're Profitable" | CONFIRMED (eyebrow, not H2) | Rendered as a label above H2 "Every Site Earns Before It Scales". |
| "3-5x Margin vs Grid" | CONFIRMED | Homepage Stage 3 stat tile. Only page with it. |
| "300 t" vs "300+ t" | CONFIRMED and WIDER | Home "300 t", IR "300t", ESG "approximately 300 tonnes" and "300t", Builders post "an estimated 300 tonnes"; case study and llms "300+". |
| "5 MW" labels differ | CONFIRMED and WIDER | Home "5 MW Under Development"; IR, About, setting-up post, llms "5 MW pipeline under development"; Strategy "5 MW Target Capacity"; ESG "As we scale to 5 MW and beyond"; Builders "a further 5 MW in the pipeline"; case study defines it as "pipeline under development, not energized capacity". |
| "zero CapEx" on /energy-partners | CONFIRMED and WIDER | EP meta "at zero CapEx to the energy producer", EP hero "Zero CapEx to you." CapEx also on home ("low CapEx, high signal", "Low CapEx Risk"), strategy ("BTC Funds CapEx"), IR ("No speculative CapEx", "low-CapEx Bitcoin mining"), 2 posts ("low CapEx"), llms.txt, llms-full.txt. |
| Kenya / Colombia | CONFIRMED and WIDER | About, IR (2x: track record bullet and FAQ), ESG, Builders post (H2 and body), setting-up post (TL;DR and CTA), llms.txt, llms-full.txt, ai-agent.json, Organization `areaServed`. (Stranded post mentions Kenya only as third-party geography context.) |
| "worldwide" | CONFIRMED | Home hero, footer on all pages, IR FAQ, llms files, leader page metas. Also About meta and 3 bios use "globally". Privacy policy uses it in a legal sense. |
| www not resolvable (v1/v2 sandbox) | REFUTED | www now resolves and 301s to apex. |
| PUE <1.2 labeled target; strategy marks 99.5%+ uptime as target | PARTLY REFUTED | PUE label confirmed (llms, case study). Strategy actually says "99.9% Uptime Target"; the homepage says "99.5%+ Uptime Target". The two pages disagree. |
| X capacity mismatch (500 kW vs 1 MW) | Not re-checked (X not crawled). Site figures are consistent: 1 MW energized, 1.5 MW developed. |

## 3. NEW issues v1/v2 missed (summary)

1. Return and margin language beyond "3-5x": IR "generating returns from day one", "Structural Cost Moat", "well below industry breakeven" (IR 2x, EP, Builders), "100% utilization, zero idle watts" (IR), "100% Utilization" tile (strategy), "triple-revenue generator" (IR) and "Triple Revenue Model" (ESG), "financial model" offered in IR FAQ, "high-margin" (home, strategy, IR, llms).
2. IR "Operational Track Record: 13+ Months" is stale (Feb 2025 to Oct 2026 is 20 months). Case study "eighteen months of logistics" is also stale.
3. Contradiction: case study says "The full metric set, unit economics, and stage-gate detail are published openly" and "the numbers are published"; IR says "Deployment economics, capital plans and site-level commercial terms are shared directly rather than published".
4. ESG overclaims: "Methane destruction from flare gas qualifies for carbon credit issuance" (while the same page says no credits issued and figure not verified); "Our investor relations page provides real-time operational metrics" (IR has no real-time metrics); "fully compliant with local and federal energy regulations" (unverifiable legal claim); "dramatic reduction".
5. Off-message items: IR FAQ "Works with any power input from flare gas to nuclear"; image "Nuclear-powered data center facility" (9.0 MB PNG) on /strategy and /investor-relations; EP closing CTA addresses "a wind farm, or a hydro plant".
6. Uptime target conflict: home 99.5%+ vs strategy 99.9%.
7. Deployment time wording varies: home "~90 days", strategy/case study/llms "60-90 days" / "60 to 90 day", EP "Under 90 Days", IR "within 90 days". Compatible, but not one phrase.
8. JSON-LD dates: 17 older posts carry identical placeholder `datePublished` 2025-06-01 and `dateModified` 2026-03-03. Visible dates and /insights dates also disagree on 6 posts (see table in section 4).
9. Author mismatch: stranded energy, energy storage and why-Africa posts show "by Julie Peeters" on page; JSON-LD author is Makir Volcy.
10. Meta descriptions on 5 indexable older posts are just the title (32 to 53 chars); og:title and twitter:title missing on 7 indexable posts; og:image and twitter:image empty on 5 indexable posts; leader pages have only 4 og tags (no og:image, no twitter tags).
11. Organization schema `areaServed` includes Kenya and Colombia; `sameAs` uses twitter.com/nrgbloom.
12. No analytics or conversion tracking anywhere on the site.
13. Broken image: /insights card for the stranded energy post loads `cdn.prod.website-files.com/...65ef8742..._featured%20image%20wasted%20energy.webp`, which returns 403. Footer logo srcset 404s on 20 blog pages.
14. Heavy images: nuclear-data-center.png 9.0 MB (strategy, IR); site-aerial-profile.png 2.1 MB, expansion-infrastructure.png 1.7 MB, conceptual-site.png 1.1 MB (strategy); modular-container-wind.png 1.6 MB (EP); supply-squeeze card image 2.1 MB in related-posts block on 18 posts; 25 images over 300 KB in total.
15. Missing alt: footer logo alt="" on leader pages and every blog post; 4 to 8 content images with alt="" on each of the stranded, energy storage, setting-up and why-Africa posts (21 on indexable pages in total).
16. Weak or missing owner CTAs: no in-body link to /energy-partners on /strategy, /investor-relations, /esg-impact, /about-leadership, /insights, /contact, 4 leader pages, /ai-agent, and 7 of 8 blog posts (only the gas flaring post links in body). /insights and leader pages have no CTA block at all. Builders and AI posts end with an invitation but no link.
17. Fifth broken link: noindexed comparative analysis post links to `/live-mining-pool-data` (404, anchor "Live Mining Pool Dashboard").
18. Title on /insights and homepage card "AI Infrastructure Meets Stranded Energy: The 2026 Opportunity" differs from the post H1 "AI Infrastructure on Stranded Energy: The 2026 Landscape".
19. Hype words on public pages: strategy "perfect" (2x), "Instant Revenue", "just plug in and earn"; ai-agent "one of the first energy companies", "instantly", "seamlessly"; AI post "unprecedented"; why-Africa "pioneering", "cutting-edge", "proud to pioneer"; About and Jordane bio "highest standards".
20. Unsourced superlatives: why-Africa TL;DR "Africa has the world's largest stranded-energy potential"; setting-up post "truly the leading economy in Africa"; case study "Most companies in the stranded-energy compute conversation have never commissioned a site".
21. Thin pages: /contact 146 words, leader bios 147 to 199 words (each also missing ESG link in nav), /insights 386 words with no H2s.
22. /energy-partners How It Works step 3 says "You earn gas revenue and carbon credits." No credits have been issued (ESG page says so), so this states a future stream as current.
23. JSON-LD repeats off-message claims that visible-copy fixes would miss: IR FAQPage JSON has Kenya, CapEx, worldwide, breakeven, nuclear, high-margin; /energy-partners and /strategy Service blocks have areaServed Nigeria, Kenya, Colombia; EP Service description says worldwide; strategy Service description says low-CapEx and high-margin; /about-leadership WebPage description says worldwide.
24. ai-agent.json energy_sources lists Geothermal and Hydroelectric; neither is operated today. Geothermal appears on the site only as industry context in posts. v3 leaves energy_sources unchanged (informational), flagged for Makir with Sign-off item 4.
25. No FAQPage on /energy-partners or /esg-impact (only on /investor-relations and the gas flaring post).
26. OEM names (Bitmain, MicroBT, Canaan, Antminer, Avalon) appear only in noindexed educational posts as industry context. No NRG partner or OEM names on indexable pages. Binance and Hilti appear only as past employers in bios. The stranded post names third-party operators (Crusoe, Soluna, Gridless, EZ Blockchain, Upstream Data) as examples.

## 4. Date table for posts

| Post | On-page date | /insights date | JSON-LD datePublished / dateModified | Sitemap lastmod |
| --- | --- | --- | --- | --- |
| gas-flaring-explained-waste-to-energy | Oct 5, 2026 | Oct 5, 2026 | 2026-10-05 / 2026-10-05 | 2026-10-05 |
| case-studies/bayelsa (case study) | none shown | Aug 6, 2026 | 2026-08-06 / 2026-08-06 | 2026-08-06 |
| builders-not-theorists-operational-know-how | Apr 22, 2026 | Apr 22, 2026 | 2026-04-22 / 2026-04-22 | 2026-08-06 |
| ai-infrastructure-stranded-energy-2026 | Mar 11, 2026 | Mar 11, 2026 | 2026-03-11 / 2026-03-11 | 2026-03-18 |
| stranded-energy-bitcoin-waste-recovery-explained | Aug 15, 2023 | Mar 11, 2024 | 2025-06-01 / 2026-03-03 | 2026-05-26 |
| energy-storage-solutions-for-stranded-energy | Dec 18, 2023 | Mar 8, 2024 | 2025-06-01 / 2026-03-03 | 2026-03-18 |
| bitcoin---helping-the-oil-industry-to-end-gas-flaring | May 13, 2024 | Jul 4, 2024 | 2025-06-01 / 2026-03-03 | 2026-03-18 |
| nrg-bloom-setting-up-in-africa | Oct 4, 2024 | Oct 5, 2024 | 2025-06-01 / 2026-03-03 | 2026-03-18 |
| why-africa-is-the-future-of-bitcoin-mining | Dec 1, 2024 | Nov 28, 2024 | 2025-06-01 / 2026-03-03 | 2026-08-06 |
| investment-opportunities-with-bitcoin-treasury-management (noindex) | see page | Dec 7, 2024 (related cards say Dec 8, 2024) | 2025-06-01 / 2026-03-03 | not in sitemap |

All on-page post dates appear as "Economics and Finance · <date>" on the five older indexable posts, while /insights labels them Energy, Operations or Industry.

## 5. Per-URL records

Fields: status, final URL, title (length), meta (length), canonical, robots, H1, H2s, word count (body text incl. nav and footer), internal hrefs (unique; 404 and noindex flagged; `/discuss-partnership` is the noindexed form page), external links, JSON-LD types, og/twitter tags, images and missing alt, number and stat lines (verbatim), current X pillar.

### /

- Status: 200. Final URL: https://nrgbloom.com/ (no redirect). In sitemap: yes.
- Title (60): NRG Bloom | Off-Grid Data Centers on Stranded Gas in Nigeria
- Meta (163): NRG Bloom deploys off-grid data centers on stranded and flared gas in emerging markets, operational in Bayelsa State, Nigeria since February 2025. Partner with us.
- Canonical: https://nrgbloom.com/. Robots meta: none (indexable).
- H1: Off-grid data centers on stranded gas.
- H2s (5): Live in Bayelsa State, Nigeria Since February 2025; No pipeline. No grid. No waste.; Every Site Earns Before It Scales; Turn Environmental Liability into Digital Asset; Stay in the Know
- Word count: 513
- Internal hrefs (15 unique): /, /strategy, /about-leadership, /energy-partners, /esg-impact, /investor-relations, /insights, /case-studies/bayelsa, /discuss-partnership (noindex), /blog/builders-not-theorists-operational-know-how, /blog/ai-infrastructure-stranded-energy-2026, /blog/bitcoin-mining-supply-squeeze (noindex), /contact, /privacy-policy, /terms-of-service
- External links (2): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): Organization, Place, ContactPoint, Person, QuantitativeValue, WebSite
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, og:type=set, twitter:card=set
- Images: 15; empty or missing alt: 0
- Number/stat lines (14):
    - "1 MW Energized Capacity"
    - "5 MW Under Development"
    - "300 t CO₂e Mitigated"
    - "$0.03/kWh Energy Cost"
    - "Live in Bayelsa State, Nigeria Since February 2025"
    - "151 billion cubic meters of natural gas were flared in 2024, the highest level since 2007, wasting roughly $63 billion in energy. NRG Bloom captures this resource at the wellhead and converts it into high-performance compute, turning a regulatory burden for energy producers into a revenue-generating asset."
    - "cubic meters of gas flared in 2024, close to Africa's total annual gas consumption (World Bank)"
    - "~90 days Deployment"
    - "99.5%+ Uptime Target"
    - "$0.03 Per kWh"
    - "3-5x Margin vs Grid"
    - "Apr 22, 2026 Builders, Not Theorists: Why Operational Know-How Is NRG Bloom's Real Moat"
    - "Mar 11, 2026 AI Infrastructure Meets Stranded Energy: The 2026 Opportunity"
    - "Nov 25, 2025 Bitcoin Mining in 2025: Does the Institutional Supply Squeeze Threaten Decentralization?"
- Current X pillar: Partial 3 ("No pipeline. No grid. No waste.") and partial 4 (regulatory burden into revenue). Pillar 1 absent. Pillar 2 absent.

### /strategy

- Status: 200. Final URL: https://nrgbloom.com/strategy (no redirect). In sitemap: yes.
- Title (55): NRG Bloom | Strategy: Off-Grid Compute, Built in Stages
- Meta (137): NRG Bloom's stage-gated approach to off-grid compute: validate, harden, scale. Operational in Bayelsa State, Nigeria since February 2025.
- Canonical: https://nrgbloom.com/strategy. Robots meta: none (indexable).
- H1: Off-grid compute, built in stages.
- H2s (7): Three Stages. One Proven Path.; Validation; The Ideal Validation Workload; Infrastructure Hardening; Real Infrastructure. Real Progress.; AI Inference at Scale; Turn Stranded Energy Into Compute Revenue
- Word count: 535
- Internal hrefs (12 unique): /, /strategy, /about-leadership, /energy-partners, /esg-impact, /investor-relations, /insights, /discuss-partnership (noindex), /case-studies/bayelsa, /contact, /privacy-policy, /terms-of-service
- External links (2): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): BreadcrumbList, ListItem, Service, Organization, Audience
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, og:type=set, twitter:card=set
- Images: 16; empty or missing alt: 0
- Number/stat lines (9):
    - "Deploy ASIC miners to stress-test energy, connectivity, and regulatory fit in 60-90 days."
    - "We deploy containerized ASIC mining units to candidate sites within 60-90 days. These units act as a 24/7 operational stress test, generating revenue from day one while proving site viability."
    - "60-90 Days to Deploy"
    - "24/7 Stress Test"
    - "$0 SLA Risk"
    - "99.9% Uptime Target"
    - "Bitcoin mining absorbs 100% of off-peak capacity"
    - "5 MW Target Capacity"
    - "100% Utilization"
- Current X pillar: None clearly. Bitcoin-first framing; "Bitcoin validates" half of pillar 4 only.

### /energy-partners

- Status: 200. Final URL: https://nrgbloom.com/energy-partners (no redirect). In sitemap: yes.
- Title (69): Energy Partners | NRG Bloom: Monetize Your Flare Gas Asset in Nigeria
- Meta (133): NRG Bloom converts stranded gas, curtailed renewables, and off-grid power into compute revenue, at zero CapEx to the energy producer.
- Canonical: https://nrgbloom.com/energy-partners. Robots meta: none (indexable).
- H1: Your Stranded Gas. Our Compute Infrastructure. A Shared Revenue Model.
- H2s (4): From First Call to First Watt in Under 90 Days; Ideal Partner Profile; Further Reading; Have Stranded Energy? Let's Talk.
- Word count: 430
- Internal hrefs (13 unique): /, /strategy, /about-leadership, /energy-partners, /esg-impact, /investor-relations, /insights, /discuss-partnership (noindex), /case-studies/bayelsa, /blog/gas-flaring-explained-waste-to-energy, /contact, /privacy-policy, /terms-of-service
- External links (2): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): BreadcrumbList, ListItem, Service, Organization, Audience
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, og:type=set, twitter:card=set
- Images: 10; empty or missing alt: 0
- Number/stat lines (4):
    - "Our current deployment in Nigeria operates under a community based power purchase agreement at Ogboinbiri, Bayelsa State, live since February 2025."
    - "$0.03/kWh All-in energy cost under a community-based power purchase agreement, well below the mining industry breakeven"
    - "From First Call to First Watt in Under 90 Days"
    - "You want a 5-10 year revenue partner, not a one-time equipment sale."
- Current X pillar: 3 and 4 (no pipeline access, revenue from flared gas). Pillar 1 absent (no grid-wait line). Pillar 2 absent.

### /investor-relations

- Status: 200. Final URL: https://nrgbloom.com/investor-relations (no redirect). In sitemap: yes.
- Title (69): Investors | NRG Bloom: Data Center Infrastructure in Nigeria & Africa
- Meta (165): NRG Bloom converts stranded energy into productive compute revenue. 1 MW energized in Bayelsa State, Nigeria, operational since February 2025. $0.03/kWh energy cost.
- Canonical: https://nrgbloom.com/investor-relations. Robots meta: none (indexable).
- H1: De-Risked Infrastructure. Transparent Metrics. Institutional Access.
- H2s (4): The Investment Thesis; Investor FAQ; Request the materials; Ready to Explore the Opportunity?
- Word count: 704
- Internal hrefs (11 unique): /, /strategy, /about-leadership, /energy-partners, /esg-impact, /investor-relations, /insights, /privacy-policy, /contact, /discuss-partnership (noindex), /terms-of-service
- External links (3): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/, mailto:makir@nrgbloom.com
- JSON-LD (2 blocks): FAQPage, Question, Answer, BreadcrumbList, ListItem
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, og:type=set, twitter:card=set
- Images: 10; empty or missing alt: 0
- Number/stat lines (12):
    - "1 MW Energized Capacity"
    - "Feb 2025 Live in Nigeria Since"
    - "$0.03/kWh All-in Energy Cost"
    - "300t CO₂e Methane Mitigated"
    - "Energy at $0.03/kWh, well below industry breakeven. This isn't optimization, it's a fundamentally different cost structure."
    - "Real-time load orchestration dynamically allocates power between AI inference (high margin) and Bitcoin mining (always-on baseline). 100% utilization, zero idle watts."
    - "13+ Months. Real Infrastructure. Real Revenue."
    - "Our first site at Ogboinbiri, Bayelsa State, Nigeria has been operational since February 2025 under a community based power purchase agreement. This isn't a pilot; it's a proven, revenue-generating operation."
    - "1 MW energized (1.5 MW developed), 5 MW pipeline under development"
    - "First deployment: containerized ASIC miners, operational within 90 days"
    - "Currently operational in Ogboinbiri, Bayelsa State, Nigeria since February 2025 under a community based power purchase agreement. Pipeline markets include Kenya (curtailed renewables) and Colombia (hydroelectric)."
    - "$0.03/kWh all-in under a community-based power purchase agreement, well below the mining industry breakeven. This structural cost moat comes from using energy that has no alternative buyer. We're not competing for grid power; we're monetizing waste."
- Current X pillar: None. Investor-first, return-style language.

### /case-studies/bayelsa

- Status: 200. Final URL: https://nrgbloom.com/case-studies/bayelsa (no redirect). In sitemap: yes.
- Title (79): Case Study: Off-Grid Data Center on Flared Gas, Ogboinbiri, Nigeria | NRG Bloom
- Meta (222): A live, off-grid data center running on flared gas in Ogboinbiri, Bayelsa State, Nigeria since February 2025. 1 MW energized, 94% uptime, 300+ tonnes CO2e mitigated. Stage-gated from Bitcoin validation toward AI inference.
- Canonical: https://nrgbloom.com/case-studies/bayelsa. Robots meta: none (indexable).
- H1: An off-grid data center running on flared gas since February 2025
- H2s (7): Flared Gas With No Route to Market; Stage-Gated, De-Risked; Revenue From Gas You Were Burning; Validated Before Committed; What the Site Returns; References; Have stranded or flared gas?
- Word count: 1187
- Internal hrefs (11 unique): /, /strategy, /about-leadership, /energy-partners, /esg-impact, /investor-relations, /insights, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (5): https://cdm.unfccc.int/methodologies/DB/ET4NXMVXFQ5C2EJ5L1OF8YZIEVLVDA, https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/, https://www.worldbank.org/en/programs/gasflaringreduction/publication/2025-global-gas-flaring-tracker-report, https://www.worldbank.org/en/programs/zero-routine-flaring-by-2030
- JSON-LD (2 blocks): Article, WebPage, Organization, ImageObject, Place, BreadcrumbList, ListItem
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, og:type=set, twitter:card=set
- Images: 11; empty or missing alt: 0
- Number/stat lines (21):
    - "An off-grid data center running on flared gas since February 2025"
    - "Since February 2025, NRG Bloom has run a modular, off-grid data center in Ogboinbiri, Bayelsa State, Nigeria, powered by gas that was being flared for zero value. The site is energized at 1 MW, has held 94% uptime, and pays the local community for the power it uses. This is the record of how it was built and what it has demonstrated."
    - "1 MW Energized (1.5 MW developed)"
    - "94% Uptime"
    - "$0.03/kWh Energy Cost"
    - "300+ t CO₂e Mitigated"
    - "Global gas flaring reached 151 billion cubic meters in 2024, the highest level since 2007, releasing 389 million tonnes of CO"
    - "e and wasting energy worth roughly $63 billion."
    - "Nigeria's flared volume rose 12% in 2024, the second largest increase of any country in the world, while its oil production grew only 3%. Flaring intensity rose 8%. It was the second consecutive year of increase."
    - "The reason matters more than the number. The World Bank attributes roughly 60% of Nigeria's flaring to facilities operated by NNPCL and smaller companies that have limited expertise or funding for gas utilization."
    - "Bitcoin mining is deployed first. It is location-agnostic, tolerant of variable power, and generates revenue inside a 60 to 90 day window. It proves energy reliability, site security, and offtake economics before any capital-intensive hardware is committed. If a site fails validation, the equipment is redeployed with minimal loss."
    - "a live Stage 1 and Stage 2 site, energized at 1 MW of 1.5 MW developed, running continuously since February 2025 in one of the most operationally demanding environments in the world. The technology is the straightforward part. Operating in the Niger Delta is the hard part, and it has been done."
    - "Flaring is reduced at the wellhead. That aligns with Nigeria's own gas flaring reduction commitments and with the World Bank's Zero Routine Flaring by 2030 initiative, which Nigeria has endorsed."
    - "The site is powered under a community-based power purchase agreement at $0.03 per kilowatt-hour. The community is paid for the power the site consumes."
    - "By displacing routine flaring with productive combustion, the deployment has mitigated more than 300 tonnes of CO"
    - "2025 Global Gas Flaring Tracker Report"
    - ", July 2025. Global flaring of 151 bcm in 2024, 389 Mt CO"
    - "e emitted, approximately US$63 billion of wasted energy at 2024 EU import gas prices. Nigeria: 12% increase in flared volume against 3% oil production growth, 8% increase in flaring intensity, second largest volume increase globally, second consecutive annual increase. Approximately 60% of Nigerian flaring attributed to NNPCL-operated facilities and smaller companies with limited expertise or fund"
    - "Zero Routine Flaring by 2030 Initiative"
    - "Operating figures on this page are as of August 2026 and are NRG Bloom's own measurements unless otherwise attributed. The PUE figure below 1.2 is a design target, not an operating result. The 5 MW referenced elsewhere on this site is pipeline under development, not energized capacity."
    - "If you operate a site with 5 MW or more of stranded or flared gas, we should talk. If you invest in infrastructure, the numbers are published."
- Current X pillar: 3 and 4 (no pipeline, no grid interconnect; revenue from gas you were burning).

### /esg-impact

- Status: 200. Final URL: https://nrgbloom.com/esg-impact (no redirect). In sitemap: yes.
- Title (78): ESG & Impact | NRG Bloom: Carbon Credits & Methane Mitigation from Gas Flaring
- Meta (171): NRG Bloom mitigates methane emissions, creates local employment, and generates carbon credits while building compute infrastructure on stranded energy in frontier markets.
- Canonical: https://nrgbloom.com/esg-impact. Robots meta: none (indexable).
- H1: Infrastructure That Gives Back
- H2s (5): Methane Destruction at the Source; The Carbon Credit Pathway; Building Where It Matters; How We Operate; Partner With Us to Build Responsible Infrastructure
- Word count: 644
- Internal hrefs (11 unique): /, /strategy, /about-leadership, /energy-partners, /esg-impact, /investor-relations, /insights, /discuss-partnership (noindex), /contact, /privacy-policy, /terms-of-service
- External links (2): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): WebPage, Organization, Thing, BreadcrumbList, ListItem
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, og:type=set, twitter:card=set
- Images: 11; empty or missing alt: 0
- Number/stat lines (3):
    - "Our first site in Nigeria has already mitigated approximately 300 tonnes of CO2 equivalent since going live in February 2025. As we scale to 5 MW and beyond, that number grows with every watt deployed."
    - "300t CO₂e Methane mitigated at our Nigeria site since February 2025"
    - "Long-term site presence (5-10 year agreements)"
- Current X pillar: Weak 4 (environmental liability). No owner CTA to /energy-partners.

### /about-leadership

- Status: 200. Final URL: https://nrgbloom.com/about-leadership (no redirect). In sitemap: yes.
- Title (68): About & Leadership | NRG Bloom: Global Team, Off-Grid Infrastructure
- Meta (147): Founded in Canada, forged in frontier energy markets. Meet the NRG Bloom team building modular compute infrastructure on stranded energy worldwide.
- Canonical: https://nrgbloom.com/about-leadership. Robots meta: none (indexable).
- H1: Global Team. Frontier Operations. Institutional Discipline.
- H2s (2): The Team Behind the Infrastructure; Want to Join the Team or Invest in It?
- Word count: 471
- Internal hrefs (15 unique): /, /strategy, /about-leadership, /energy-partners, /esg-impact, /investor-relations, /insights, /makir-volcy, /julie-peeters, /gus-anyim, /jordane-volcy, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (6): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/, https://www.linkedin.com/in/gus-anyim-76474b188/, https://www.linkedin.com/in/jordane-volcy-ing-jr-a0713082/, https://www.linkedin.com/in/julie-peeters-39861188/, https://www.linkedin.com/in/makirvolcy/
- JSON-LD (2 blocks): BreadcrumbList, ListItem, WebPage, WebSite, Organization
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, og:type=set, twitter:card=set
- Images: 23; empty or missing alt: 0
- Number/stat lines (4):
    - "February 2025 Company & Team"
    - "NRG Bloom was founded in Quebec, Canada in 2023. We've been operational in Nigeria since February 2025, building compute infrastructure on stranded energy that most companies won't touch."
    - "NRG Bloom was founded by Makir Volcy in 2023 with a simple thesis: the world's most wasted energy sources are also its greatest compute opportunities. Within months, the team deployed its first container of ASIC miners at Ogboinbiri, Bayelsa State, Nigeria, powered by associated gas under a community based power purchase agreement."
    - "The site has run since February 2025. NRG Bloom has 1 MW energized of 1.5 MW developed, with a 5 MW pipeline under development. The team is now expanding to Kenya and Colombia while building out the technology stack that makes this model repeatable at scale."
- Current X pillar: None.

### /insights

- Status: 200. Final URL: https://nrgbloom.com/insights (no redirect). In sitemap: yes.
- Title (64): Insights | NRG Bloom: Research, Analysis & Industry Intelligence
- Meta (137): Research and analysis from NRG Bloom on stranded energy monetization, Bitcoin mining economics, AI infrastructure, and cleantech compute.
- Canonical: https://nrgbloom.com/insights. Robots meta: none (indexable).
- H1: Stay in the Know
- H2s (0): none
- Word count: 386
- Internal hrefs (32 unique): /, /strategy, /about-leadership, /energy-partners, /esg-impact, /investor-relations, /insights, /blog/gas-flaring-explained-waste-to-energy, /case-studies/bayelsa, /blog/builders-not-theorists-operational-know-how, /blog/ai-infrastructure-stranded-energy-2026, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /blog/why-africa-is-the-future-of-bitcoin-mining, /blog/breaking-barriers-the-power-of-decentralized-bitcoin-mining (noindex), /blog/bitcoin-for-good-how-mining-can-help (noindex), /blog/building-wealth-with-bitcoin-how-mining-can-create-passive-income-opportunities (noindex), /blog/nrg-bloom-setting-up-in-africa, /blog/bitcoin---helping-the-oil-industry-to-end-gas-flaring, /blog/bitcoin-economic-impact-developing-countries-rural-areas (noindex), /blog/understanding-the-bitcoin-halving (noindex), /blog/the-evolution-of-bitcoin-mining-hardware (noindex), /blog/stranded-energy-bitcoin-waste-recovery-explained, /blog/carbon-footprint-and-environmental-impact-of-bitcoin-mining (noindex), /blog/bitcoin-mining-pools-explained (noindex), /blog/digital-gold-mine-bitcoin-mining-for-energy-innovators (noindex), /blog/energy-storage-solutions-for-stranded-energy, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (2): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): BreadcrumbList, ListItem, WebPage, WebSite, Organization
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, og:type=set, twitter:card=set
- Images: 29; empty or missing alt: 0
- Number/stat lines (21):
    - "Oct 5, 2026 Burning Money: A Bitesized Breakdown of Gas Flaring and the Move to Waste-to-Energy"
    - "Aug 6, 2026 Ogboinbiri, Bayelsa State: An Off-Grid Data Center Running on Flared Gas Since February 2025"
    - "Apr 22, 2026 Builders, Not Theorists: Why Operational Know-How Is NRG Bloom's Real Moat"
    - "Mar 11, 2026 AI Infrastructure Meets Stranded Energy: The 2026 Opportunity"
    - "Nov 25, 2025 Bitcoin Mining in 2025: Does the Institutional Supply Squeeze Threaten Decentralization?"
    - "Apr 26, 2025 Comparative Analysis of the Major Bitcoin Mining Pools"
    - "Dec 7, 2024 Unlocking Investment Opportunities with Bitcoin Treasury Management"
    - "Nov 28, 2024 Why Africa is the Future of Bitcoin Mining"
    - "Nov 30, 2024 The Power of Decentralized Bitcoin Mining in Connecting the World"
    - "Nov 29, 2024 How Bitcoin Mining Can Build Schools, Hospitals, and More"
    - "Nov 29, 2024 Building Wealth with Bitcoin: How Mining Can Create Passive Income"
    - "Oct 5, 2024 NRG Bloom - Setting Up In Africa"
    - "Jul 4, 2024 Bitcoin - Helping the Oil Industry to End Gas Flaring"
    - "Mar 13, 2024 The Socioeconomic Impact of Bitcoin in Developing Countries"
    - "Mar 12, 2024 Understanding the Bitcoin Halving"
    - "Mar 13, 2024 The Evolution Of Bitcoin Mining Hardware"
    - "Mar 8, 2024 Energy Storage Solutions for Stranded Energy"
    - "Mar 11, 2024 Carbon Footprint and the Environmental Impact of Bitcoin Mining"
    - "Mar 12, 2024 Deep Dive Into Bitcoin Mining Pools"
    - "Mar 12, 2024 Bitcoin Mining 101 for Energy Innovators"
    - "Mar 11, 2024 What is Stranded Energy? Why it Matters to Bitcoin"
- Current X pillar: None. No CTA block.

### /contact

- Status: 200. Final URL: https://nrgbloom.com/contact (no redirect). In sitemap: yes.
- Title (55): Contact | NRG Bloom: Partner, Invest, or Deploy With Us
- Meta (137): Get in touch with NRG Bloom to discuss energy partnerships, investment, or deploying compute infrastructure at your stranded energy site.
- Canonical: https://nrgbloom.com/contact. Robots meta: none (indexable).
- H1: Get in Touch
- H2s (0): none
- Word count: 146
- Internal hrefs (11 unique): /, /strategy, /about-leadership, /energy-partners, /esg-impact, /investor-relations, /insights, /discuss-partnership (noindex), /contact, /privacy-policy, /terms-of-service
- External links (4): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/, mailto:info@nrgbloom.com, mailto:makir@nrgbloom.com
- JSON-LD (2 blocks): BreadcrumbList, ListItem, WebPage, WebSite, Organization
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, og:type=set, twitter:card=set
- Images: 8; empty or missing alt: 0
- Number/stat lines (1):
    - "Our team typically responds within 24-48 hours. For partnership inquiries with gas volume details, use our dedicated partnership form."
- Current X pillar: None.

### /makir-volcy

- Status: 200. Final URL: https://nrgbloom.com/makir-volcy (no redirect). In sitemap: yes.
- Title (23): Makir Volcy | NRG Bloom
- Meta (110): Makir Volcy, Founder & CEO at NRG Bloom. Building modular compute infrastructure on stranded energy worldwide.
- Canonical: https://nrgbloom.com/makir-volcy. Robots meta: none (indexable).
- H1: Makir Volcy
- H2s (0): none
- Word count: 199
- Internal hrefs (11 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (4): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/, https://www.linkedin.com/in/makirvolcy/, mailto:makir@nrgbloom.com
- JSON-LD (2 blocks): Person, Organization, BreadcrumbList, ListItem
- og/twitter tags (4): og:url=set, og:title=set, og:description=set, og:type=set
- Images: 7; empty or missing alt: 1 (images/NRG-bloom-meta-image_1.webp)
- Number/stat lines (1):
    - "Since entering the Bitcoin world in 2017, Makir progressed from trader to institutional liquidity provider, and further built expertise in market risk at Binance. He also successfully operated his own Bitcoin mine in Quebec, serving as chief mining officer. His leadership and industry background shaped NRG Bloom's foundation as the company scales from Bitcoin validation into AI inference infrastru"
- Current X pillar: None.

### /julie-peeters

- Status: 200. Final URL: https://nrgbloom.com/julie-peeters (no redirect). In sitemap: yes.
- Title (25): Julie Peeters | NRG Bloom
- Meta (134): Julie Peeters, Co-Founder & Director of Operations at NRG Bloom. Building modular compute infrastructure on stranded energy worldwide.
- Canonical: https://nrgbloom.com/julie-peeters. Robots meta: none (indexable).
- H1: Julie Peeters
- H2s (0): none
- Word count: 175
- Internal hrefs (11 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (4): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/, https://www.linkedin.com/in/julie-peeters-39861188/, mailto:julie@nrgbloom.com
- JSON-LD (2 blocks): Person, Organization, BreadcrumbList, ListItem
- og/twitter tags (4): og:url=set, og:title=set, og:description=set, og:type=set
- Images: 7; empty or missing alt: 1 (images/NRG-bloom-meta-image_1.webp)
- Number/stat lines (0):
- Current X pillar: None.

### /jordane-volcy

- Status: 200. Final URL: https://nrgbloom.com/jordane-volcy (no redirect). In sitemap: yes.
- Title (25): Jordane Volcy | NRG Bloom
- Meta (118): Jordane Volcy, Head of Engineering at NRG Bloom. Building modular compute infrastructure on stranded energy worldwide.
- Canonical: https://nrgbloom.com/jordane-volcy. Robots meta: none (indexable).
- H1: Jordane Volcy
- H2s (0): none
- Word count: 158
- Internal hrefs (11 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (3): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/, https://www.linkedin.com/in/jordane-volcy-ing-jr-a0713082/
- JSON-LD (2 blocks): Person, Organization, BreadcrumbList, ListItem
- og/twitter tags (4): og:url=set, og:title=set, og:description=set, og:type=set
- Images: 7; empty or missing alt: 1 (images/NRG-bloom-meta-image_1.webp)
- Number/stat lines (0):
- Current X pillar: None.

### /gus-anyim

- Status: 200. Final URL: https://nrgbloom.com/gus-anyim (no redirect). In sitemap: yes.
- Title (21): Gus Anyim | NRG Bloom
- Meta (113): Gus Anyim, Head of Commercial at NRG Bloom. Building modular compute infrastructure on stranded energy worldwide.
- Canonical: https://nrgbloom.com/gus-anyim. Robots meta: none (indexable).
- H1: Gus Anyim
- H2s (0): none
- Word count: 147
- Internal hrefs (11 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (4): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/, https://www.linkedin.com/in/gus-anyim-76474b188/, mailto:gus@nrgbloom.com
- JSON-LD (2 blocks): Person, Organization, BreadcrumbList, ListItem
- og/twitter tags (4): og:url=set, og:title=set, og:description=set, og:type=set
- Images: 7; empty or missing alt: 1 (images/NRG-bloom-meta-image_1.webp)
- Number/stat lines (0):
- Current X pillar: None.

### /ai-agent

- Status: 200. Final URL: https://nrgbloom.com/ai-agent (no redirect). In sitemap: yes.
- Title (20): AI Agent | NRG Bloom
- Meta (151): NRG Bloom is agent-ready. Our AI infrastructure is built for the agentic future. Discover how AI agents can interact with NRG Bloom's systems and data.
- Canonical: https://nrgbloom.com/ai-agent. Robots meta: none (indexable).
- H1: Agent-Ready Infrastructure
- H2s (12): WHY AGENT-READY?; DISCOVERY; INTEROPERABILITY; FUTURE-PROOF; For AI Agents; For Developers & Partners; STEP 1; STEP 2; STEP 3; STEP 4; COMING SOON; Our Vision
- Word count: 662
- Internal hrefs (15 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /llms.txt, /llms-full.txt, /.well-known/ai-agent.json, /sitemap.xml, /discuss-partnership (noindex), /esg-impact, /contact, /privacy-policy, /terms-of-service
- External links (2): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (3 blocks): WebApplication, Organization, Offer, BreadcrumbList, ListItem, Service, Audience
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, og:type=set, twitter:card=set
- Images: 6; empty or missing alt: 0
- Number/stat lines (0):
- Current X pillar: None.

### /blog/gas-flaring-explained-waste-to-energy

- Status: 200. Final URL: https://nrgbloom.com/blog/gas-flaring-explained-waste-to-energy (no redirect). In sitemap: yes.
- Title (95): Burning Money: A Bitesized Breakdown of Gas Flaring and the Move to Waste-to-Energy | NRG Bloom
- Meta (161): How gas flaring works, why producers do it, and what it actually takes to convert flared associated gas into electricity. A field-level breakdown from NRG Bloom.
- Canonical: https://nrgbloom.com/blog/gas-flaring-explained-waste-to-energy. Robots meta: none (indexable).
- H1: Burning Money: A Bitesized Breakdown of Gas Flaring and the Move to Waste-to-Energy
- H2s (11): What are the main forms of gas flaring?; How do you establish and safely operate a flare system?; Are all gas flares the same?; How loud are gas flares?; Why don't upstream oil companies simply bottle the gas?; How do we go from diverted gas flare to electricity?; How are generators maintained under such demanding conditions?; Will we get to zero flaring?; What is the impact of gas flaring?; References; Latest news updates
- Word count: 1995
- Internal hrefs (14 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/gas-flaring-explained-waste-to-energy, /contact, /case-studies/bayelsa, /blog/builders-not-theorists-operational-know-how, /esg-impact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (6): https://faolex.fao.org/docs/pdf/nig231711.pdf, https://flareintel.com/insights/tackling-flaring-lessons-from-the-north-sea, https://twitter.com/nrgbloom, https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/, https://www.linkedin.com/company/nrgbloom/, https://www.worldbank.org/en/programs/gasflaringreduction/publication/2025-global-gas-flaring-tracker-report
- JSON-LD (3 blocks): Article, Organization, ImageObject, WebPage, FAQPage, Question, Answer, BreadcrumbList, ListItem
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:type=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, twitter:card=set
- Images: 13; empty or missing alt: 1 (../images/NRG-bloom-meta-image_1.webp)
- Number/stat lines (13):
    - "Oct 5, 2026 Burning Money: A Bitesized Breakdown of Gas Flaring and the Move to Waste-to-Energy"
    - "Many flares will run with a burning efficiency of over 90%, turning a mixture of highly toxic gases into less harmful CO₂ and water. The real problem is the unburnt portion containing methane, a gas roughly 80 times more powerful than CO₂ as a warming agent over a 20-year period"
    - ". Effectively operated flares can achieve a 98% efficiency whilst poorly operated sites may be as low as 62%."
    - "While the fines have increased over the years, the penalties for flaring have been insufficient to halt the practice. In Nigeria, gas flared without the regulator's authorisation now carries a charge of $3.50 per 1,000 standard cubic feet, a flat rate that replaced the earlier two-tier regime of $2.00 and $0.50 that varied with the producer's operational size"
    - "Bitcoin mining machines run 24/7, requiring careful management and repairs of high-intensity generating equipment. To preserve the lifespan of generators, they are largely run under full capacity (70-80% load) with a full maintenance schedule including downtime. Preserving the generators includes the monitoring and cleaning of dust, filters, valves, alternators and other critical components."
    - "most natural-gas engines are designed around minimum values roughly in the 65 to 80+ range, depending on the engine. Higher methane generally means higher heating value and therefore more predictable combustion."
    - "The Norwegians banned routine flaring in 1971. Since then, each site in Norway must have a plan for associated gas before receiving drilling approval. In addition, heavy carbon taxes are imposed on each cubic meter of gas flared."
    - ". The global average flaring intensity is 5.1 m³ per barrel, while Nigeria flared 12.0 m³ per barrel in 2024, up from 11.0 m³ the year before and more than twice the global average"
    - "389 million tonnes of CO₂e were emitted in 2024"
    - "46 million tonnes of CO₂e from unburned methane"
    - "(1) 2025 Global Gas Flaring Tracker Report, World Bank Global Flaring and Methane Reduction Partnership, July 2025."
    - "(2) Gas Flaring, Venting and Methane Emissions (Prevention of Waste and Pollution) Regulations 2023, regulation 21(1), Federal Republic of Nigeria Official Gazette No. 125. These regulations revoked the 2018 Flare Gas Regulations."
    - "(3) Climate Change 2021: The Physical Science Basis, Chapter 7, Intergovernmental Panel on Climate Change, Sixth Assessment Report."
- Current X pillar: 3 and 4 (why gas is not bottled; owner CTA to /energy-partners).

### /blog/builders-not-theorists-operational-know-how

- Status: 200. Final URL: https://nrgbloom.com/blog/builders-not-theorists-operational-know-how (no redirect). In sitemap: yes.
- Title (86): Builders, Not Theorists: Why Operational Know-How Is NRG Bloom's Real Moat | NRG Bloom
- Meta (177): Modular data centers on stranded energy are a construction problem, not a thesis. NRG Bloom's moat is the operational and engineering discipline required to actually build them.
- Canonical: https://nrgbloom.com/blog/builders-not-theorists-operational-know-how. Robots meta: none (indexable).
- H1: Builders, Not Theorists: Why Operational Know-How Is NRG Bloom's Real Moat
- H2s (8): The Market Has Enough Commentary. It Needs More Builders.; What the Niger Delta Proved; The Gap Between "It Can Be Done" and "We Did It"; The Modular Data Center Discipline; Why Capital Is Moving Toward Operators, Not Explainers; What Comes Next: Kenya, Colombia, and a Build Cadence; Builders, Not Theorists; Latest news updates
- Word count: 1795
- Internal hrefs (13 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/ai-infrastructure-stranded-energy-2026, /blog/nrg-bloom-setting-up-in-africa, /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (2): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:type=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, twitter:card=set
- Images: 10; empty or missing alt: 1 (../images/NRG-bloom-meta-image_1.webp)
- Number/stat lines (6):
    - "Apr 22, 2026 Builders, Not Theorists: Why Operational Know-How Is NRG Bloom's Real Moat"
    - "Every week, another thesis is published about stranded energy. Another white paper on the AI power crisis. Another LinkedIn essay explaining why flare gas is the obvious answer to the data center bottleneck. The ideas are not wrong. They are, by 2026, entirely mainstream."
    - "In February 2025, NRG Bloom energized its first modular data center at Ogboinbiri, in Bayelsa State, Nigeria. The site has 1 MW energized of 1.5 MW developed, with a further 5 MW in the pipeline. It has run continuously since. That single fact separates NRG Bloom from the overwhelming majority of companies in the stranded-energy compute conversation, most of whom have never commissioned a site at "
    - "The operational numbers are not glamorous, but they are real. Energy cost at site has run at $0.03 per kilowatt-hour under a community-based power purchase agreement, well below the industry's mining breakeven and a small fraction of grid data center electricity pricing in developed markets. Uptime has held at 94 percent. Methane that would otherwise have been flared has been redirected into produ"
    - "How do you specify a container for a site where ambient humidity routinely exceeds 85%? What cooling topology survives twelve months of dust loading without degrading GPU or ASIC performance? How do you sequence civil works when trucking access is seasonal? How do you design a commissioning protocol that validates gas supply under real operating load rather than under vendor-specified lab conditio"
    - "The investor conversation in this category has changed materially over the last twelve months. In 2024 and early 2025, it was reasonable for a stranded-energy compute company to be evaluated on the strength of its thesis. That window has closed. In 2026, capital is asking a different question: show us the site, show us the uptime, show us the operating envelope."
- Current X pillar: Partial 1 ("AI power crisis", "data center bottleneck"); 4 weak. No linked CTA.

### /blog/ai-infrastructure-stranded-energy-2026

- Status: 200. Final URL: https://nrgbloom.com/blog/ai-infrastructure-stranded-energy-2026 (no redirect). In sitemap: yes.
- Title (68): AI Infrastructure on Stranded Energy: The 2026 Landscape | NRG Bloom
- Meta (155): How stranded energy sources are becoming the foundation for AI compute infrastructure in 2026, and why NRG Bloom's stage-gated approach is leading the way.
- Canonical: https://nrgbloom.com/blog/ai-infrastructure-stranded-energy-2026. Robots meta: none (indexable).
- H1: AI Infrastructure on Stranded Energy: The 2026 Landscape
- H2s (8): The Convergence We Have Been Waiting For; The AI Compute Crisis; Why Stranded Energy Is the Answer; The Stage-Gated Approach: Why You Cannot Just Drop GPUs in a Field; 2026 Market Dynamics; The Agent-Ready Future; Building at the Intersection; Latest news updates
- Word count: 2261
- Internal hrefs (13 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (2): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=set, twitter:description=set, twitter:image=set, twitter:card=set
- Images: 10; empty or missing alt: 1 (../images/NRG-bloom-meta-image_1.webp)
- Number/stat lines (13):
    - "AI Infrastructure on Stranded Energy: The 2026 Landscape / NRG Bloom"
    - "Mar 11, 2026 AI Infrastructure on Stranded Energy: The 2026 Landscape"
    - "Two of the most powerful forces in global technology are on a collision course, and the results will reshape how we think about infrastructure for the next decade. On one side, artificial intelligence workloads are growing at an unprecedented rate. On the other, billions of cubic meters of natural gas are being burned off into the atmosphere every year with no productive use. In 2026, these two fo"
    - "The numbers tell a stark story. Global data center power consumption surpassed 50 gigawatts in 2025 and is projected to grow by more than 30% annually through the end of the decade. To put that in context, 50 gigawatts is roughly equivalent to the total electricity generation capacity of a mid-sized European country. Every year, the industry needs to add the equivalent of several large power plant"
    - "The World Bank estimates that global gas flaring burns approximately 150 billion cubic meters of natural gas annually. That is roughly equivalent to the combined annual gas consumption of Germany and France. It represents an enormous waste of energy and a significant source of greenhouse gas emissions."
    - "What has changed is the economics of on-site power generation paired with compute. A modular gas-to-power installation can convert stranded gas into electricity at a cost of $0.02 to $0.03 per kilowatt-hour. Compare that to grid electricity prices for data centers, which range from $0.08 to $0.15 per kilowatt-hour in most developed markets. The cost advantage is substantial, often a 70% to 80% red"
    - "The opportunity is clear, but the execution is where most operators fail. AI inference hardware is expensive. A single rack of modern GPU servers can cost upwards of $500,000. Deploying that equipment to a remote location with unproven power reliability is a recipe for stranded capital, which is ironic given the goal of utilizing stranded energy."
    - "This is why a stage-gated deployment model is essential. At NRG Bloom, we treat Bitcoin mining as the validation layer for every new energy site. Before a single GPU is deployed, the site runs Bitcoin mining hardware for 60 to 90 days. This phase accomplishes several critical objectives simultaneously."
    - "First, it proves energy reliability. Bitcoin mining hardware operates 24 hours a day, seven days a week, at near-maximum load. If the gas supply, generators, cooling systems, and electrical infrastructure can sustain that workload continuously for two to three months, they can sustain AI inference workloads. There is no better stress test."
    - "2026 Market Dynamics"
    - "The convergence of stranded energy and compute is no longer a niche concept. In 2026, it is a recognized infrastructure category attracting serious capital and serious operators."
    - "In 2026, a growing number of enterprise procurement decisions are being influenced or directly executed by AI systems. When a hyperscaler's AI procurement agent searches for available compute capacity in West Africa, or when a sovereign wealth fund's due diligence system evaluates energy infrastructure investments, the information those agents find determines which companies make the shortlist."
    - "The 2026 landscape is defined by urgency. AI demand is growing faster than anyone predicted. Grid capacity is not keeping up. Energy producers are under increasing pressure to eliminate flaring. And a new generation of infrastructure companies is demonstrating that these pressures are not in conflict. They are complementary."
- Current X pillar: 1 ("multi-year interconnection queues", "three to five years to provision"). No linked CTA.

### /blog/stranded-energy-bitcoin-waste-recovery-explained

- Status: 200. Final URL: https://nrgbloom.com/blog/stranded-energy-bitcoin-waste-recovery-explained (no redirect). In sitemap: yes.
- Title (62): What is Stranded Energy? Why it Matters to Bitcoin | NRG Bloom
- Meta (50): What is Stranded Energy? Why it Matters to Bitcoin
- Canonical: https://nrgbloom.com/blog/stranded-energy-bitcoin-waste-recovery-explained. Robots meta: none (indexable).
- H1: What is Stranded Energy? Why it Matters to Bitcoin
- H2s (10): Stranded Energy Explained; Harnessing Stranded Energy Sources in Africa; Why Use Stranded Energy For Bitcoin Mining?; The Benefits of Using Stranded Energy in The Bitcoin Mining Industry; Stranded Energy and Hash Rate: Real-World Applications; Bitcoin Mining as a Source of Unused Energy; Challenges When Using Stranded Energy to Mine Bitcoin; Conclusion; References; Latest news updates
- Word count: 3616
- Internal hrefs (19 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/stranded-energy-bitcoin-waste-recovery-explained, /why-africa-is-the-future-of-bitcoin-mining **404**, /carbon-footprint-and-environmental-impact-of-bitcoin-mining **404**, /bitcoin---helping-the-oil-industry-to-end-gas-flaring **404**, /ai-infrastructure-stranded-energy-2026 **404**, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (27): https://arstechnica.com/information-technology/2018/09/construction-to-begin-on-36-megawatt-moroccan-wind-farm-for-bitcoin-mining/, https://braiins.com/blog/guide-home-hvac-heating-bitcoin-mining, https://energycapitalpower.com/renewable-energy-targets-in-africa-by-2030/, https://ezblockchain.net/smartbox/, https://gridlesscompute.com/, https://iea.blob.core.windows.net/assets/220b2862-33a6-47bd-81e9-00e586f4d384/AfricaEnergyOutlook2022.pdf, https://im-mining.com/2021/12/15/rio-tinto-breaks-ground-on-solar-wind-power-project-at-qmm-in-madagascar/, https://northafricapost.com/24769-soluna-to-build-its-own-wind-power-plant-in-morocco.html, https://repository.uneca.org/handle/10855/23386, https://twitter.com/CrusoeEnergy, https://twitter.com/nrgbloom, https://www.afrik21.africa/en/mozambique-eleqtra-starts-construction-of-the-120-mw-namaacha-wind-farm/, https://www.ajol.info/index.php/mejs/article/view/234507, https://www.bloomberg.com/news/articles/2018-07-27/bitcoin-mining-private-equity-build-wind-farm-in-morocco, https://www.businesswire.com/news/home/20180727005498/en/Soluna-is-Launching-the-World%E2%80%99s-First-Utility-Scale-Blockchain-Infrastructure-Company-Powered-by-Its-Own-Private-Renewable-Energy-Resources-in-the-Kingdom-of-Morocco, https://www.climatepolicylab.org/communityvoices/2020/5/13/south-africas-2019-irp-renewable-energy-targets, https://www.crusoeenergy.com/digital-flare-mitigation, https://www.dailysabah.com/energy/2019/07/20/kenya-launches-biggest-wind-farm-in-africa-providing-one-fifth-of-energy-demand, https://www.grupoelecnor.com/news/elecnor-wins-contract-to-build-its-second-wind-farm-in-mauritania-en, https://www.iea.org/reports/africa-energy-outlook-2019, https://www.imf.org/en/Publications/fandd/issues/2020/03/powering-Africa-with-solar-energy-sy, https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2021/March/Renewable_Energy_Transition_Africa_2021.pdf, https://www.linkedin.com/company/nrgbloom/, https://www.lse.ac.uk/granthaminstitute/explainers/what-are-stranded-assets/, https://www.npr.org/sections/thetwo-way/2016/02/04/465568055/morocco-unveils-a-massive-solar-power-plant-in-the-sahara, https://www.power-technology.com/features/a-look-at-tanzanias-first-wind-farm/?cf-view, https://www.worldbank.org/en/topic/energy/publication/where-sun-meets-water
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 19; empty or missing alt: 9 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/65ef8843be3c4952aa00077f_stranded_20ener_9ece53855727.webp, ../blog_images/65ef88c01884cc699c39ad5b_stranded_20ener_44fc3bdf95c2.webp, ../blog_images/65ef8981f7bd55af0c6fef22_straned_20energ_5d42fbcbf2b4.webp, ../blog_images/65ef8a3aff7424ad4a45c034_stranded_20eneg_241a6665246f.webp, ../blog_images/65ef8a91fd882a8bfbcfcbbc_stranded_20eneg_3405cb7438f2.webp, ../blog_images/65ef8bc4f63ffffd6ff7f213_stranded_20ener_72f98faa4a04.png, ../blog_images/65ef8c56fb5e6120a7ad604f_stranded_20ener_f50da89f2b31.png, ../blog_images/65ef8c8fd7b72489a24305c1_stranded_20ener_3b7c7193927e.webp)
- Number/stat lines (29):
    - "Aug 15, 2023 What is Stranded Energy? Why it Matters to Bitcoin"
    - "Stranded energy is power generated in remote or off-grid sites where transmission makes export uneconomical. Examples: flared associated gas, curtailed hydro, remote solar. NRG Bloom deploys modular compute at these sites, converting wasted energy directly into revenue. Operational in Bayelsa State, Nigeria since February 2025."
    - "Furthermore, while Africa shines with potential for renewable energy sources such as solar, wind, and hydropower, these remain less exploited than in other continents. The bounteous renewable energy promise of the continent faces financial, technical, and bureaucratic challenges. To put things into perspective, a mere 5% of Africa's rich hydropower resources have been harnessed till date"
    - "is believed to hold approximately 125,000 MW of stranded energy. Alarmingly, this is nearly 68% of the continent's overall power generation capability, spanning both fossil fuels and renewable sources"
    - "The Sahara Desert brims with solar energy potential, boasting direct normal irradiance levels nearing 2600 kWh/m2 annually. Yet, this remains largely untapped. While Morocco's Noor Ouarzazate facility stands as a prominent solar installation in the Sahara, vast stretches in Egypt, Libya, and Chad have seen minimal solar ventures."
    - "Coastal regions of countries like Kenya, Tanzania, Mozambique, Mauritania, and Madagascar offer promising wind speeds, ideal for wind energy installations. Yet, such regions remain largely unexplored. Case in point, the anticipated 500 MW Ras Ngomeni project in Kenya faces postponements owing to funding complications"
    - "Countries such as the Democratic Republic of Congo and Ethiopia are endowed with abundant hydropower. However, the absence of energy storage facilities results in power wastage during low-demand hours. For instance, Ethiopia encounters nightly energy losses exceeding 400 MW due to the non-existence of efficient storage mechanisms."
    - "Firstly, the intertwined relationship between the profitability of Bitcoin mining and energy costs becomes evident when considering stranded energy. Utilising stranded energy, which is often more cost-effective, provides an avenue for more competitive energy pricing for Bitcoin mining. This efficiency not only enhances profitability but also democratises participation in the Bitcoin mining process"
    - "Secondly, as previously highlighted, the challenge of capital constraints hinders the reduction of stranded energy, particularly in the renewable energy sector, with Africa being a prime example. The consistent demand from Bitcoin mining provides an avenue to monetize otherwise wasted stranded energy, introducing a new revenue stream for power producers. This not only opens doors for regions like "
    - "Soluna Technologies, an American enterprise, is embarking on an ambitious venture in Morocco. The firm's objective is to capitalise on the abundant wind resources in the Dakhla region, which stands among the world's windiest locales. By constructing a wind farm, Soluna plans to produce enough electricity to power a 900MW Bitcoin mining operation situated nearby. With a vision to be the world's fir"
    - "Founded in 2018, Denver-based Crusoe Energy Systems operates mobile, modular data centres powered by otherwise wasted natural gas from oil wells and landfills to mine bitcoin, providing beneficial base load demand and avoiding flaring. By deploying its computing at the source and dynamically matching consumption to gas flow, Crusoe has successfully monetized over 1 million cubic metres of stranded"
    - ", where modular data centres at stranded gas and curtailed renewable sites are unlocking 24/7 compute capacity on the same footprint."
    - "(2) Making the Most of Africa's Commodities: Industrializing for Growth, Jobs and Economic Transformation, United Nations Economic Commission for Africa, 2013."
    - "(3) Africa Energy Outlook 2019, International Energy Agency, 2019."
    - "(4) Powering Africa’s Energy Potential, BCG Henderson Institute, May 2020."
    - "(5) Africa Energy Outlook 2022, International Energy Agency, 2022."
    - "(6) Where Sun Meets Sand: Solar Resource Mapping in the Sahara Desert, World Bank, 2019."
    - "(7) https://www.npr.org/sections/thetwo-way/2016/02/04/465568055/morocco-unveils-a-massive-solar-power-plant-in-the-sahara"
    - "(8a) https://www.dailysabah.com/energy/2019/07/20/kenya-launches-biggest-wind-farm-in-africa-providing-one-fifth-of-energy-demand"
    - "(8e) https://im-mining.com/2021/12/15/rio-tinto-breaks-ground-on-solar-wind-power-project-at-qmm-in-madagascar/"
    - "(9) https://www.evwind.es/2017/10/13/kenya-loses-offshore-wind-farm-to-tanzania/61402"
    - "(10) Pumped Hydro- Energy Storage System in Ethiopia: Challenges and Opportunities, Momona Ethiopian Journal of Science, 2022."
    - "(11) Hydropower in Africa: Enabling Sustainable Investments, IRENA, 2020."
    - "(12) https://energycapitalpower.com/renewable-energy-targets-in-africa-by-2030/"
    - "(13) https://www.climatepolicylab.org/communityvoices/2020/5/13/south-africas-2019-irp-renewable-energy-targets"
    - "(15) https://arstechnica.com/information-technology/2018/09/construction-to-begin-on-36-megawatt-moroccan-wind-farm-for-bitcoin-mining/"
    - "(16) https://www.bloomberg.com/news/articles/2018-07-27/bitcoin-mining-private-equity-build-wind-farm-in-morocco"
    - "(17) https://www.climatepolicylab.org/communityvoices/2020/5/13/south-africas-2019-irp-renewable-energy-targets"
    - "(18) https://www.businesswire.com/news/home/20180727005498/en/Soluna-is-Launching-the-World%E2%80%99s-First-Utility-Scale-Blockchain-Infrastructure-Company-Powered-by-Its-Own-Private-Renewable-Energy-Resources-in-the-Kingdom-of-Morocco"
- Current X pillar: None (Bitcoin-reader framing). CTA goes to /strategy, not /energy-partners.

### /blog/energy-storage-solutions-for-stranded-energy

- Status: 200. Final URL: https://nrgbloom.com/blog/energy-storage-solutions-for-stranded-energy (no redirect). In sitemap: yes.
- Title (56): Energy Storage Solutions for Stranded Energy | NRG Bloom
- Meta (44): Energy Storage Solutions for Stranded Energy
- Canonical: https://nrgbloom.com/blog/energy-storage-solutions-for-stranded-energy. Robots meta: none (indexable).
- H1: Energy Storage Solutions for Stranded Energy
- H2s (8): Understanding Stranded Energy; Challenges of Stranded Energy; The Importance of Energy Storage; Different Types of Energy Storage; Bitcoin Mining as a Solution; Future Outlook: Advancements in Energy Storage; Conclusion; Latest news updates
- Word count: 2193
- Internal hrefs (14 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (2): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 15; empty or missing alt: 5 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/65ef91d2d9c9210b9b8baa68_solutions_20-_2_ec50d04324f7.webp, ../blog_images/65ef9228d9a19064eb17cab3_solution_20-_20_407e2c23e0d0.jpeg, ../blog_images/65ef926e4ec68be09f6344ca_solutions_20-_2_8c7345ed9d18.webp, ../blog_images/65ef90e8c1d8fbcd02b3dd4a_carbon_20footpr_25de3964168c.webp)
- Number/stat lines (3):
    - "Dec 18, 2023 Energy Storage Solutions for Stranded Energy"
    - "In addition to its environmental benefits, energy storage can also have a significant economic impact. According to a report by the National Renewable Energy Laboratory, increasing the deployment of energy storage systems could save the US electricity sector up to $4 billion annually by 2030."
    - "Pumped hydro storage is capable of storing large amounts of energy, making it suitable for balancing energy supply and demand over extended periods. It has a long lifespan, providing a durable and reliable storage solution. With round-trip efficiencies typically between 70% to 85%, pumped hydro is one of the most efficient forms of energy storage."
- Current X pillar: None. CTA to /strategy.

### /blog/bitcoin---helping-the-oil-industry-to-end-gas-flaring

- Status: 200. Final URL: https://nrgbloom.com/blog/bitcoin---helping-the-oil-industry-to-end-gas-flaring (no redirect). In sitemap: yes.
- Title (65): Bitcoin - Helping the Oil Industry to End Gas Flaring | NRG Bloom
- Meta (53): Bitcoin - Helping the Oil Industry to End Gas Flaring
- Canonical: https://nrgbloom.com/blog/bitcoin---helping-the-oil-industry-to-end-gas-flaring. Robots meta: none (indexable).
- H1: Bitcoin - Helping the Oil Industry to End Gas Flaring
- H2s (4): Gas Flaring - An African Context; A Recap on Bitcoin; Bitcoin Mining Globally; Latest news updates
- Word count: 830
- Internal hrefs (14 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /discuss-partnership (noindex), /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /contact, /privacy-policy, /terms-of-service
- External links (6): https://energynews.africa/2024/05/13/bitcoin-helps-oil-industry-end-gas-flaring/, https://twitter.com/nrgbloom, https://www.forbesafrica.com/crypto/2024/02/22/ethiopia-to-become-the-first-african-country-to-start-bitcoin-mining/, https://www.linkedin.com/company/nrgbloom/, https://www.nytimes.com/2021/09/07/world/americas/el-salvador-bitcoin.html, https://ycharts.com/indicators/bitcoin_miners_revenue_per_day
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 11; empty or missing alt: 1 (../images/NRG-bloom-meta-image_1.webp)
- Number/stat lines (8):
    - "May 13, 2024 Bitcoin - Helping the Oil Industry to End Gas Flaring"
    - "NRG Bloom monetizes flared gas at the wellhead by deploying modular data centers on stranded energy sites. Bitcoin mining validates sites with low CapEx, immediate revenue, and tolerance for variable supply, turning a regulatory liability into shared revenue. Operational in Bayelsa State, Nigeria since February 2025."
    - "Over a 10-year period, Nigeria is reported to have flared 80BN cubic metres of gas, with an approximate value of $1BN a year. With the average gas flare lit 95-97% of the time, progress towards sustainability goals remains ever challenging."
    - "The environmental impact however has been catastrophic. Methane released from flaring is 80 times more potent than CO2. So despite only contributing 3% to global CO2 emissions, Africa has become an oversized contributor to the global gas flaring. 6.2% of global gas output is produced on the African continent but it accounts for 20% of global flaring emissions."
    - "Agreement to tackle the risks has largely come alongside global initiatives. The World Bank’s Zero Routine Flaring by 2030 directly takes aim at the issue. Regional initiatives such as the Gas Flaring Reduction Initiative introduced by African Petroleum Producers' Organization (APPO) aim to support regional implementation."
    - "Since the start of 2024, Bitcoin mining revenues have mostly exceeded"
    - "$50M per day . In part due to the enduring popularity of the world’s biggest cryptocurrency."
    - "partnered with the Ethiopian government to establish a high performance computing services using the Grand Ethiopia Renaissance Dam. The site is set to deliver 5GW of electricity as Africa’s largest hydroelectric facility."
- Current X pillar: Partial 3 (monetize flared gas at wellhead). CTA to /discuss-partnership.

### /blog/nrg-bloom-setting-up-in-africa

- Status: 200. Final URL: https://nrgbloom.com/blog/nrg-bloom-setting-up-in-africa (no redirect). In sitemap: yes.
- Title (44): NRG Bloom - Setting Up In Africa | NRG Bloom
- Meta (32): NRG Bloom - Setting Up In Africa
- Canonical: https://nrgbloom.com/blog/nrg-bloom-setting-up-in-africa. Robots meta: none (indexable).
- H1: NRG Bloom - Setting Up In Africa
- H2s (1): Latest news updates
- Word count: 1240
- Internal hrefs (14 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (2): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 15; empty or missing alt: 5 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/670263d68647f3b8c714234b_670261f9d09f373_9bcf179bc578.webp, ../blog_images/6702698b99faa148658be8b9_6702697817d36d0_056d01857bde.webp, ../blog_images/67026ac2fbcd7916646f274f_67026ab9f38eab0_0f836123b800.webp, ../blog_images/670263d68647f3b8c7142344_670262787d583a0_ae4c16615257.webp)
- Number/stat lines (7):
    - "Oct 4, 2024 NRG Bloom - Setting Up In Africa"
    - "NRG Bloom operates a modular data center at Ogboinbiri, Bayelsa State, Nigeria, repurposing flared associated gas under a community-based power purchase agreement. Live since February 2025: 1 MW energized of 1.5 MW developed, with a 5 MW pipeline under development. Pipeline markets: Kenya and Colombia."
    - "Oil was first discovered in 1956. Since then, multinational energy companies have gravitated towards Nigeria and a country that holds the 10th largest oil reserve in the world. Under licence from Nigerian authorities, the energy companies were able to operate without true accountability, often at the expense of local communities."
    - "Despite the $45BN (2023) in revenue from oil, Nigeria’s growth efforts have been hampered by damaging currency devaluations. The Nigerian Naira, at the time of writing, had lost 70% of its value against the US dollar."
    - "Since 2023 the speculation has heightened around the currency as a result of the physical currency shortage and decision to unpeg from the Dollar."
    - "By force of circumstance, African companies have started by finding innovative solutions to daily problems. Although many solutions remain confined within national borders due to a lack of capital. Great ideas do find willing investors but the available capital is heavily oversubscribed by investment requests. Research published by the AVCA, found that only $3.6BN (of $285.2BN) global deals in ven"
    - "Let's face it - Africa does have a power problem. For the size of the population, Africa needs an additional 250GW to meet forecasted future demand. While many businesses, locating beside a power production facility is simply not viable. For us, the close proximity access to power production (along with our focus on utilising otherwise wasted energy) was a determining factor."
- Current X pillar: Partial 1 (unreliable grid, diesel backup). CTA to /strategy and mentions Kenya/Colombia.

### /blog/why-africa-is-the-future-of-bitcoin-mining

- Status: 200. Final URL: https://nrgbloom.com/blog/why-africa-is-the-future-of-bitcoin-mining (no redirect). In sitemap: yes.
- Title (54): Why Africa is the Future of Bitcoin Mining | NRG Bloom
- Meta (42): Why Africa is the Future of Bitcoin Mining
- Canonical: https://nrgbloom.com/blog/why-africa-is-the-future-of-bitcoin-mining. Robots meta: none (indexable).
- H1: Why Africa is the Future of Bitcoin Mining
- H2s (9): I. The Rise of Bitcoin Mining and the Sustainability Challenge; II. Africa's Untapped Renewable Energy Potential; III. NRG Bloom: Pioneering Sustainable Mining in Africa; IV. Addressing Infrastructure Challenges; V. Socio-Economic Benefits for Africa; VI. The Future Outlook; Conclusion; References; Latest news updates
- Word count: 1749
- Internal hrefs (17 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/digital-gold-mine-bitcoin-mining-for-energy-innovators (noindex), /blog/the-evolution-of-bitcoin-mining-hardware (noindex), /blog/carbon-footprint-and-environmental-impact-of-bitcoin-mining (noindex), /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (4): https://digiconomist.net/bitcoin-energy-consumption, https://flaringventingregulations.worldbank.org/nigeria, https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 15; empty or missing alt: 5 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/6747f0f6311bf438c1e1fc9e_65ef8a3aff7424a_0c60693371d3.webp, ../blog_images/6747f0f6311bf438c1e1fc8e_6747f00f2fe696b_34c9afce3479.webp, ../blog_images/6747f0f6311bf438c1e1fc9b_6747f07df2a000f_0580b8acf73c.jpeg, ../blog_images/6747f0f6311bf438c1e1fc91_6747f0cc3bd5f4c_c826c16b0914.webp)
- Number/stat lines (4):
    - "Dec 1, 2024 Why Africa is the Future of Bitcoin Mining"
    - "Africa has the world's largest stranded-energy potential: 6 to 7 billion cubic meters of flared gas in Nigeria alone, plus underutilized hydro and solar. NRG Bloom deploys modular data centers at these sites. Bitcoin mining validates sites with low CapEx and immediate revenue, then sites scale to AI inference. Operational since February 2025."
    - "perform trillions of hash calculations per second, consuming significant amounts of electricity. At its peak during the 2022 bull market, Bitcoin mining consumed up to 204.5 terawatt-hours (TWh) (1) of energy annually, highlighting the immense energy-intensive nature of the process."
    - "Africa is endowed with vast untapped renewable energy resources. Only about 5% of the continent's immense hydropower potential has been utilized. The Sahara Desert offers high solar irradiance levels, presenting enormous potential for solar energy generation. Similarly, coastal regions in countries like Kenya, Tanzania, and Mozambique have favorable wind speeds suitable for wind energy installatio"
- Current X pillar: None (Bitcoin-reader framing). CTA to /strategy.

### /privacy-policy

- Status: 200. Final URL: https://nrgbloom.com/privacy-policy (no redirect). In sitemap: yes.
- Title (26): Privacy Policy | NRG Bloom
- Meta (93): NRG Bloom's privacy policy. Learn how we collect, use, and protect your personal information.
- Canonical: https://nrgbloom.com/privacy-policy. Robots meta: none (indexable).
- H1: Privacy Policy
- H2s (10): 1. Information We Collect; 2. How We Use Your Information; 3. Data Sharing; 4. Data Retention; 5. Cookies; 6. Your Rights; 7. Data Security; 8. Third-Party Links; 9. Changes to This Policy; 10. Contact Us
- Word count: 1014
- Internal hrefs (11 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /contact, /esg-impact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (3): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/, mailto:info@nrgbloom.com
- JSON-LD (2 blocks): BreadcrumbList, ListItem, WebPage, WebSite, Organization
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, og:type=set, twitter:card=set
- Images: 6; empty or missing alt: 0
- Number/stat lines (1):
    - "Last updated: March 11, 2026"
- Current X pillar: n/a (legal).

### /terms-of-service

- Status: 200. Final URL: https://nrgbloom.com/terms-of-service (no redirect). In sitemap: yes.
- Title (28): Terms of Service | NRG Bloom
- Meta (82): Terms of service for NRG Bloom's website. Review our terms for using nrgbloom.com.
- Canonical: https://nrgbloom.com/terms-of-service. Robots meta: none (indexable).
- H1: Terms of Service
- H2s (9): 1. Acceptance of Terms; 2. Use of Website; 3. Intellectual Property; 4. Partnership & Investment Information; 5. Third-Party Links; 6. AI Agent Access; 7. Limitation of Liability; 8. Changes to Terms; 9. Contact
- Word count: 805
- Internal hrefs (14 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /llms.txt, /.well-known/ai-agent.json, /robots.txt, /contact, /esg-impact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (2): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): BreadcrumbList, ListItem, WebPage, WebSite, Organization
- og/twitter tags (9): og:url=set, og:title=set, og:description=set, og:image=set, twitter:title=set, twitter:description=set, twitter:image=set, og:type=set, twitter:card=set
- Images: 6; empty or missing alt: 0
- Number/stat lines (1):
    - "Last updated: March 11, 2026"
- Current X pillar: n/a (legal).

### /blog/bitcoin-economic-impact-developing-countries-rural-areas

- Status: 200. Final URL: https://nrgbloom.com/blog/bitcoin-economic-impact-developing-countries-rural-areas (no redirect). In sitemap: no.
- Title (71): The Socioeconomic Impact of Bitcoin in Developing Countries | NRG Bloom
- Meta (59): The Socioeconomic Impact of Bitcoin in Developing Countries
- Canonical: https://nrgbloom.com/blog/bitcoin-economic-impact-developing-countries-rural-areas. Robots meta: noindex, follow.
- H1: The Socioeconomic Impact of Bitcoin in Developing Countries
- H2s (6): General Advantages and Disadvantages of Bitcoin and Bitcoin Mining; Problems and Opportunities in Developing Nations and Rural Areas: The Role of Bitcoin and Bitcoin Mining in Providing Solutions; Case Studies; Conclusion; References; Latest news updates
- Word count: 2871
- Internal hrefs (14 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (9): https://blogs.worldbank.org/developmenttalk/impact-gas-flaring-child-health-nigeria, https://news.umich.edu/flaring-allows-more-methane-into-the-atmosphere-than-we-thought/, https://twitter.com/nrgbloom, https://www.bcg.com/publications/2023/methane-global-warming-potential, https://www.iea.org/reports/africa-energy-outlook-2022/key-findings, https://www.imf.org/external/pubs/ft/fabric/backgrnd.htm, https://www.linkedin.com/company/nrgbloom/, https://www.reuters.com/world/americas/el-salvador-says-it-has-repaid-800-million-bond-maturing-january-2023-01-24/#:~:text=%22We%20announce%20that%20we%20have,in%20national%20and%20international%20media, https://www.worldbank.org/en/publication/globalfindex
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 17; empty or missing alt: 7 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/65f1d5f3a181b850cf430e19_btc-vs-fiat_15c141dd4402.webp, ../blog_images/65f1d6fc0edacba21cbfc7c7_JQ87jwT0MGPNk5i_dbc63d5db212.webp, ../blog_images/65f1d72a24051c26d2a075cd_Financial_20inc_8ed056e498dc.webp, ../blog_images/65f1d76ccd0f6b66f110a44d_Gas_20flaring_80962c2af2d4.webp, ../blog_images/65f1da8bab9042e7250f32b6_gridless-1_6e84de41cd4f.jpeg, ../blog_images/65f1da5a2d567914f5bff55c_bitcoin_el_salv_0918aabd0b13.jpg)
- Number/stat lines (11):
    - "Mar 13, 2024 The Socioeconomic Impact of Bitcoin in Developing Countries"
    - "The Bitcoin Network functions on a decentralized array of computers known as nodes. Anyone with the willingness and resources can establish a node. Each node maintains a copy of the Bitcoin Blockchain. These nodes play a crucial role in the network by either approving or denying new transactions based on their adherence to the Bitcoin Network's rules. This decentralized approach ensures the securi"
    - "In the context of Bitcoin, if someone attempted to alter the blockchain's code (such as by creating a fork that increases the maximum Bitcoin supply from 21 million to 50 million), the majority of nodes would simply reject any transactions associated with this altered, forked chain. Instead, they would continue to support the original blockchain with its established cap of 21 million bitcoins. Thi"
    - "Energy access, defined as the delivery of energy to households for basic needs like safe cooking and a minimum consumption level, is a significant problem, especially in rural areas. This issue is particularly acute in Sub-Saharan Africa, where it affects about 600 million people"
    - "Access to essential banking services, such as owning a bank account, poses a significant challenge in rural regions. This issue is particularly evident in Sub-Saharan Africa, where it is reported that only 55% of the population has access to these services, and in the Middle East and North Africa, where the figure stands at 53%"
    - "In some developing nations, such as Nigeria, the abundance of oil and natural gas offers significant economic opportunities for the industry. However, a major downside emerges from the need to flare excess gas by oil and gas companies. This practice is not only financially burdensome due to the fines incurred but also poses serious environmental threats. The release of toxic gases during flaring s"
    - "The health impacts on local communities near flare sites are also profound. For instance, in Nigeria, 2 million people living within 4 km of a gas flare face increased health risks"
    - "https://www.iea.org/reports/africa-energy-outlook-2022/key-findings"
    - "The Global Findex Database 2021,"
    - "https://www.bcg.com/publications/2023/methane-global-warming-potential"
    - "https://www.reuters.com/world/americas/el-salvador-says-it-has-repaid-800-million-bond-maturing-january-2023-01-24/#:~:text=%22We%20announce%20that%20we%20have,in%20national%20and%20international%20media"
- Current X pillar: None (noindexed Bitcoin-era post; out of scope)

### /blog/bitcoin-for-good-how-mining-can-help

- Status: 200. Final URL: https://nrgbloom.com/blog/bitcoin-for-good-how-mining-can-help (no redirect). In sitemap: no.
- Title (69): How Bitcoin Mining Can Build Schools, Hospitals, and More | NRG Bloom
- Meta (57): How Bitcoin Mining Can Build Schools, Hospitals, and More
- Canonical: https://nrgbloom.com/blog/bitcoin-for-good-how-mining-can-help. Robots meta: noindex, follow.
- H1: How Bitcoin Mining Can Build Schools, Hospitals, and More
- H2s (8): The Power of Bitcoin Mining for Social Good; Real-World Examples of Bitcoin for Community Development; Hypothetical Scenarios: Mining for a Better Tomorrow; NRG Bloom’s Vision and Initiatives; Joining the Movement: How You Can Help; Conclusion; References:; Latest news updates
- Word count: 1089
- Internal hrefs (15 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/digital-gold-mine-bitcoin-mining-for-energy-innovators (noindex), /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (3): https://ccaf.io/cbnsi/cbeci/mining_map/mining_data, https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 14; empty or missing alt: 4 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/6747f0f6311bf438c1e1fc8e_6747f00f2fe696b_34c9afce3479.webp, ../blog_images/674a72127e272446a3a00e63_674a701f64a268c_825c972ff94a.jpeg, ../blog_images/674a72127e272446a3a00e66_674a712346b1507_67c3b258a30c.webp)
- Number/stat lines (3):
    - "Dec 4, 2024 How Bitcoin Mining Can Build Schools, Hospitals, and More"
    - "Bitcoin mining offers a unique opportunity to generate wealth by obtaining Bitcoin at a cost lower than its market price. According to the Cambridge Centre for Alternative Finance, the average cost to mine one Bitcoin is approximately $46,055. As Bitcoin's value fluctuates and potentially rises, miners can accumulate rewards that may appreciate over time, creating significant economic potential."
    - "In Bayelsa State, we've deployed our first 0.5 MW container and plan to expand up to 5 MW. This initiative has already created security jobs, and we're establishing an ASIC repair center to train locals in maintaining and repairing mining equipment. The community's share of the revenue is being reinvested into enhancing local schools and hospitals, directly improving the quality of life."
- Current X pillar: None (noindexed Bitcoin-era post; out of scope)

### /blog/bitcoin-mining-pools-explained

- Status: 200. Final URL: https://nrgbloom.com/blog/bitcoin-mining-pools-explained (no redirect). In sitemap: no.
- Title (47): Deep Dive Into Bitcoin Mining Pools | NRG Bloom
- Meta (35): Deep Dive Into Bitcoin Mining Pools
- Canonical: https://nrgbloom.com/blog/bitcoin-mining-pools-explained. Robots meta: noindex, follow.
- H1: Deep Dive Into Bitcoin Mining Pools
- H2s (9): Understanding Bitcoin Mining Pools; Pros and Cons of Bitcoin Mining Pools; Mining Pool Reward Models; Prominent Bitcoin Mining Pools; Evolution of Mining Protocols; How to Join a Mining Pool; Conclusion; References; Latest news updates
- Word count: 7929
- Internal hrefs (14 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (53): https://academy.binance.com/en/glossary/51-percent-attack, https://academy.braiins.com/en/braiins-pool/rewards-and-payouts/#:~:text=You%20can%20choose%20to%20receive%20payouts%20to%20your%20wallet%20at,threshold%2C%20such%20as%200.1%20BTC, https://academy.braiins.com/en/braiins-pool/rewards-and-payouts/#payouts-and-fees, https://bitcoinmagazine.com/business/stratum-v2-will-save-bitcoin-mining#:~:text=Stratum%20V2%20is%20already%20implemented,by%20pools%20using%20Stratum%20V1, https://bitcoinmagazine.com/guides/what-are-bitcoin-mining-pools, https://bitcointalk.org/index.php?topic=12181.msg378851#msg378851, https://bitcointalk.org/index.php?topic=131376.0, https://bitcointalk.org/index.php?topic=39497.0, https://bitcointalk.org/index.php?topic=4787.0, https://braiins.com/farm-proxy, https://braiins.com/stratum-v1, https://braiins.com/stratum-v1/docs, https://braiins.com/stratum-v2, https://btc.com/stats/pool/AntPool, https://cointelegraph.com/news/new-hashprice-based-derivatives-instrument-gives-bitcoin-miners-another-way-to-hedge, https://cryptoslate.com/companies/antpool/#:~:text=AntPool%20is%20one%20of%20the,is%20headquartered%20in%20Beijing%2C%20China, https://d-central.tech/a-deep-dive-into-rejected-shares-in-mining/#:~:text=Rejected%20shares%20occur%20when%20the,Internet%20connection%2C%20among%20other%20things, https://developer.bitcoin.org/devguide/mining.html, https://en.bitcoin.it/wiki/Comparison_of_mining_pools, https://en.bitcoin.it/wiki/F2Pool, https://en.bitcoin.it/wiki/Getblocktemplate, https://en.bitcoin.it/wiki/Getwork#:~:text=3.9%20switchto-,Protocol,proof%2Dof%2Dwork%20requirements, https://en.bitcoin.it/wiki/P2Pool#Payout_logic, https://en.bitcoin.it/wiki/Pooled_mining, https://en.bitcoin.it/wiki/Slush_Pool, https://f2pool.io/mining/support/, https://f2pool.zendesk.com/hc/en-us/articles/360061042332-Payout-schemes-PPS-PPLNS-FPPS-PPS-#:~:text=The%20PPS%2B%20payment%20method%20is,Last%20N%20Share, https://foreman.mn/blog/antpool-review/, https://foreman.mn/blog/foundry-pool-review/, https://foreman.mn/blog/what-is-a-mining-pool-everything-you-need-to-know/, https://foundrydigital.com/mining-service/foundry-usa-pool/, https://luxor.tech/mining, https://medium.com/minerstat/how-mining-pool-downtime-can-affect-your-profitability-3e06bd67d0a1, https://mempool.space/graphs/mining/hashrate-difficulty#all, https://miningpoolstats.stream/bitcoin, https://networkinterview.com/http-vs-tcp-know-the-difference/, https://organofcorti.blogspot.com/2012/04/32-risks-of-smpps.html, https://pool.braiins.com/en/news/goodbye-slush-pool/, https://stratumprotocol.org/docs/, https://twitter.com/nrgbloom, https://www.binance.com/en/support/faq/frequently-asked-questions-on-binance-pool-f77a002dca084b22ab2e13ccf2f13f18, https://www.coindesk.com/tech/2021/05/07/marathon-miners-have-started-censoring-bitcoin-transactions-heres-what-that-means/, https://www.geeksforgeeks.org/what-is-long-polling-and-short-polling/, https://www.linkedin.com/company/nrgbloom/, https://www.linkedin.com/posts/marathon-digital-holdings_partner-with-us-activity-7099776741702791168-Uz20/, https://www.mara.com/, https://www.nasdaq.com/articles/mara-pool-and-bitcoin-mining-censorship-2021-05-07, https://www.nasdaq.com/articles/why-bitcoin-mining-pools-arent-incentivized-to-broadcast-blocks-quickly-2016-09-30, https://www.nicehash.com/blog/post/how-is-solo-mining-probability-calculated, https://www.nicehash.com/blog/post/how-mining-pools-distribute-rewards-pps-vs-fpps-vs-pplns, https://www.nicehash.com/support/mining-help/mining-advanced-topics/why-are-you-getting-rejected-shares, https://www.theguardian.com/technology/2014/jun/16/bitcoin-currency-destroyed-51-attack-ghash-io, https://www.viabtc.com/pricing
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 16; empty or missing alt: 6 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/65f0d37c309e759af2716a77_pools_20-_20inf_7fd28d3a87e0.webp, ../blog_images/65f0d41e1c984c9b2f0e53e8_pools_20-_20sha_1b68314c17c0.webp, ../blog_images/65f0d47ad13d67925b32b5b4_pools_20-_20ppl_60b03b8efbbc.webp, ../blog_images/65f0d5f8d143fef9b1f91c83_pools_20-_20inf_65ce3310f2d5.webp, ../blog_images/65f0d6607bf833470417317d_pools_20-_20tem_468a9b8c586a.webp)
- Number/stat lines (38, noindexed page, first 12 shown):
    - "Oct 14, 2023 Deep Dive Into Bitcoin Mining Pools"
    - "However, as interest in Bitcoin grew, the mining difficulty increased exponentially to maintain the 10-minute block time. To keep up with this growing difficulty, miners transitioned to more efficient hardware like FPGAs and, eventually, ASICs. This transition led to a dramatic increase in the hash rate, from under 1 TH/s in 2010 to over 200 EH/s today"
    - ". Alongside this ever-growing hash rate, the difficulty levels also grew significantly, from 1 in 2010 to over 50,000,000,000,000 today"
    - "Because mining pools centralize hashing power of multiple miners, they significantly increase their chances of successfully discovering a block, resulting in more frequent rewards for contributing miners. In contrast, individual miners face notably lower odds of finding a block independently, leading to sporadic income. To illustrate this point, consider one of the most efficient ASIC miners avail"
    - "As Bitcoin mining pool operators provide services, they typically request compensation in the form of pool fees. These fees can vary, typically ranging from 0% to 4% of the rewards earned by miners. Additionally, some pools may impose payout fees when miners wish to withdraw their earned bitcoins from their mining pool account"
    - "Stale shares result from late submissions, often due to high latency or connection issues. These occurrences are expected to be infrequent, typically around 1% of shares, and are considered normal."
    - "This centralization introduces the inherent risk of a 51% attack, wherein a coalition of miners commands over 50% of the total mining hash rate. Such control theoretically grants these entities the power to manipulate the blockchain. Since validated blocks require consensus from other miners, malicious participants can collectively reject these blocks, hindering their confirmation and inclusion in"
    - "However, it's crucial to note that while the potential for a 51% attack on the Bitcoin Blockchain is acknowledged, it remains highly improbable due to the network's immense size. In 2014 one mining pool, Ghash.io briefly controlled 51% of the total hash rate. Luckily they didn’t abuse this power, but this was a wakeup call for many miners that left the mining pool shortly after"
    - "Equalized Shared Maximum Pay Per Share. ESMPPS strives to maintain uniform rewards for all shares, regardless of when they were uncovered or any potential downtime. When a miner discovers a share, it enters a list with a 0% payout status. If the pool has reserves from previous rounds with lower payouts, these shares are settled immediately; otherwise, the pool awaits block confirmation. Once confi"
    - "Foundry, a subsidiary of Digital Currency Group (DCG), was established in late 2019 to address the growing institutional demand for improved access to capital, operational efficiency, and transparency in the digital asset mining and staking sector. Headquartered in Rochester, New York, Foundry swiftly ascended to the top of the mining pool landscape, currently commanding a substantial 26.5% market"
    - "AntPool, founded in 2013 by Bitmain Technologies, is a prominent Chinese mining pool renowned for its impressive hash rate of around 105 EH/s and a substantial network share of 24.57%. This pool caters to miners interested in various cryptocurrencies, including Bitcoin, Bitcoin Cash, Ethereum, Litecoin, and more."
    - "AntPool employs two primary payout methods to distribute Bitcoin rewards to miners: FPPS and PPLNS. For FPPS payouts, a flat fee of 4% is charged, while PPLNS payouts come with a 0% fee"
- Current X pillar: None (noindexed Bitcoin-era post; out of scope)

### /blog/bitcoin-mining-supply-squeeze

- Status: 200. Final URL: https://nrgbloom.com/blog/bitcoin-mining-supply-squeeze (no redirect). In sitemap: no.
- Title (135): Bitcoin mining in 2025. Does the current supply squeeze by institutions threaten to derail the very idea it was built upon? | NRG Bloom
- Meta (123): Bitcoin mining in 2025. Does the current supply squeeze by institutions threaten to derail the very idea it was built upon?
- Canonical: https://nrgbloom.com/blog/bitcoin-mining-supply-squeeze. Robots meta: noindex, follow.
- H1: Bitcoin mining in 2025. Does the current supply squeeze by institutions threaten to derail the very idea it was built upon?
- H2s (1): Latest news updates
- Word count: 812
- Internal hrefs (13 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (2): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 12; empty or missing alt: 3 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/69256f278108df82bb7fdb1b_BTC_20Pizza_7ed65ead4397.webp, ../blog_images/69256f6701e472f32257cf2e_Bitcoin_20Minin_ef491ac8f19e.webp)
- Number/stat lines (7):
    - "Bitcoin mining in 2025. Does the current supply squeeze by institutions threaten to derail the very idea it was built upon? / NRG Bloom"
    - "Nov 25, 2025 Bitcoin mining in 2025. Does the current supply squeeze by institutions threaten to derail the very idea it was built upon?"
    - "Institutional adoption of Bitcoin has grown by 587%, since Microstrategy brought the Bitcoin accumulation playbook to mainstream attention. Since August 2020, when they first started buying Bitcoin, 6.1 million BTC (31%) of circulating supply has gone into institutional ownership."
    - "Bitcoin has been around since 2009. Early adopters, “Bitcoin OGs”, would have come in many forms. From technology enthusiasts, to early investors, curious speculators and those with a desire to support mechanisms that change the financial system."
    - "The truth is far more nuanced than this. The bigger story actually lies around the wallets from the early days that have not been re-awoken. The story of how most of the earliest mined Bitcoin is permanently lost. From forgotten credentials, to users that have passed away and cases like James Howell where his hard drive (containing 7.5K Bitcoin) was mistakenly thrown out. The likelihood is that 3 "
    - "The impact is best understood when we look at the fundamental shift in how we think about Bitcoin. The most famous early transaction involving Bitcoin as an alternative currency was the purchase of a pizza by Laszlo Hanyecz for 10K BTC. A purchase that would have been worth $850M at today’s time of writing. The early ideal was that Bitcoin would be a cryptocurrency that would be used as an alterna"
    - "Until 2040 there are still 21M Bitcoins left to mine, representing about 5% of the remaining supply. Time will tell whether the current strategy of accumulation wins out over a return to the original concept of a freely traded currency. Until then, we still have a lot of mining to do."
- Current X pillar: None (noindexed Bitcoin-era post; out of scope)

### /blog/breaking-barriers-the-power-of-decentralized-bitcoin-mining

- Status: 200. Final URL: https://nrgbloom.com/blog/breaking-barriers-the-power-of-decentralized-bitcoin-mining (no redirect). In sitemap: no.
- Title (77): The Power of Decentralized Bitcoin Mining in Connecting the World | NRG Bloom
- Meta (65): The Power of Decentralized Bitcoin Mining in Connecting the World
- Canonical: https://nrgbloom.com/blog/breaking-barriers-the-power-of-decentralized-bitcoin-mining. Robots meta: noindex, follow.
- H1: The Power of Decentralized Bitcoin Mining in Connecting the World
- H2s (5): The Essence of Decentralized Bitcoin Mining; NRG Bloom’s Innovative Solutions; The Future of Decentralized Mining with NRG Bloom; References; Latest news updates
- Word count: 1300
- Internal hrefs (16 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/digital-gold-mine-bitcoin-mining-for-energy-innovators (noindex), /blog/bitcoin-mining-pools-explained (noindex), /contact, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (5): https://bitcoin.org/bitcoin.pdf, https://ocean.xyz/, https://ocean.xyz/docs/datum, https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 11; empty or missing alt: 1 (../images/NRG-bloom-meta-image_1.webp)
- Number/stat lines (2):
    - "Dec 6, 2024 The Power of Decentralized Bitcoin Mining in Connecting the World"
    - ": Reduces the risk of a single entity controlling the network, safeguarding against 51% attacks where malicious actors could manipulate the blockchain."
- Current X pillar: None (noindexed Bitcoin-era post; out of scope)

### /blog/building-wealth-with-bitcoin-how-mining-can-create-passive-income-opportunities

- Status: 200. Final URL: https://nrgbloom.com/blog/building-wealth-with-bitcoin-how-mining-can-create-passive-income-opportunities (no redirect). In sitemap: no.
- Title (92): Building Wealth with Bitcoin: How Mining Can Create Passive Income Opportunities | NRG Bloom
- Meta (80): Building Wealth with Bitcoin: How Mining Can Create Passive Income Opportunities
- Canonical: https://nrgbloom.com/blog/building-wealth-with-bitcoin-how-mining-can-create-passive-income-opportunities. Robots meta: noindex, follow.
- H1: Building Wealth with Bitcoin: How Mining Can Create Passive Income Opportunities
- H2s (9): 1. The Bitcoin Revolution: A New Frontier for Wealth Building; 2. Demystifying Bitcoin Mining; 3. How Mining Translates to Passive Income; 4. The NRG Bloom Advantage; 5. Getting Started with NRG Bloom; 6. Seize the Opportunity: The Future of Passive Income; Conclusion; References:; Latest news updates
- Word count: 1929
- Internal hrefs (17 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/digital-gold-mine-bitcoin-mining-for-energy-innovators (noindex), /blog/understanding-the-bitcoin-halving (noindex), /blog/bitcoin-mining-pools-explained (noindex), /contact, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (3): https://ccaf.io/cbnsi/cbeci/mining_map/mining_data, https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 12; empty or missing alt: 2 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/674a262cf745268d953cd479_674a2540d35c858_d5dc5806a934.webp)
- Number/stat lines (5):
    - "Dec 1, 2024 Building Wealth with Bitcoin: How Mining Can Create Passive Income Opportunities"
    - "Bitcoin has evolved remarkably since its inception in 2009. Initially embraced by cypherpunks and utilized for transactions on the dark web, Bitcoin has surged into the mainstream financial landscape. Traditional financial institutions have recognized its potential, introducing Bitcoin ETFs in 2024, which allow investors to trade or invest in Bitcoin without owning it directly. This shift has sign"
    - "Bitcoin mining offers a unique opportunity to generate wealth by obtaining Bitcoin at a cost lower than its market price. For instance, the Crypto Currency Certification Consortium (CCAF) estimates that the average cost to mine one Bitcoin is approximately $46,055. As Bitcoin’s value continues to rise, miners can accumulate Bitcoin rewards that appreciate over time, providing a robust hedge agains"
    - "Imagine allocating funds towards a mining operation with an initial investment of $10,000. Over six months, as Bitcoin’s value rises and your mining equipment operates efficiently, you could accumulate Bitcoin rewards that grow alongside the market, potentially turning your investment into a significant passive income stream."
    - "With the 2024 bull market on the horizon, the opportunity to mine Bitcoin is more promising than ever. As Bitcoin becomes harder to acquire through traditional means, mining presents a strategic avenue to secure Bitcoin at lower costs and benefit from its anticipated price appreciation."
- Current X pillar: None (noindexed Bitcoin-era post; out of scope)

### /blog/carbon-footprint-and-environmental-impact-of-bitcoin-mining

- Status: 200. Final URL: https://nrgbloom.com/blog/carbon-footprint-and-environmental-impact-of-bitcoin-mining (no redirect). In sitemap: no.
- Title (75): Carbon footprint and the environmental impact of Bitcoin mining | NRG Bloom
- Meta (63): Carbon footprint and the environmental impact of Bitcoin mining
- Canonical: https://nrgbloom.com/blog/carbon-footprint-and-environmental-impact-of-bitcoin-mining. Robots meta: noindex, follow.
- H1: Carbon footprint and the environmental impact of Bitcoin mining
- H2s (7): Why is Bitcoin Mining Energy Intensive?; Factors That Affect the Carbon Footprint of Bitcoin Mining; The Impact of Bitcoin Mining on The Environment; What Can Be Done to Reduce the Carbon Footprint of Bitcoin Mining?; Conclusion; References; Latest news updates
- Word count: 3279
- Internal hrefs (14 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (33): https://batcoinz.com/BEEST/, https://ccaf.io/cbnsi/cbeci, https://ccaf.io/cbnsi/cbeci/ghg, https://ccaf.io/cbnsi/cbeci/ghg/comparisons, https://ccaf.io/cbnsi/cbeci/ghg/methodology, https://ccaf.io/cbnsi/cbeci/methodology, https://ccaf.io/cbnsi/cbeci/mining_map, https://ceepr.mit.edu/wp-content/uploads/2021/09/2018-018.pdf, https://coinmetrics.substack.com/p/coin-metrics-state-of-the-network-375, https://cointelegraph.com/learn/proof-of-stake-vs-proof-of-work:-differences-explained, https://digiconomist.net/bitcoin-electronic-waste-monitor/, https://digiconomist.net/bitcoin-energy-consumption, https://docs.google.com/spreadsheets/d/1nE4cVbfM6me84mIZEwvIF3sIazl0EDWT/edit#gid=1818040914, https://emsginc.com/resources/basics-pcb-design-composition/#The_Composition_of_a_PCB_-_Printed_Circuit_Board_Components, https://ir.mara.com/news-events/press-releases/detail/1267/marathon-digital-holdings-expands-deployments-with-compute, https://k33.com/research/archive/articles/bitcoin-miners-can-strengthen-electricity-grids, https://semiengineering.com/knowledge_centers/standards-laws/laws/koomeys-law/, https://twitter.com/nrgbloom, https://www.asml.com/en/technology/all-about-microchips/microchip-basics, https://www.bcg.com/publications/2023/methane-global-warming-potential, https://www.blockchain.com/explorer/charts/hash-rate, https://www.coindesk.com/business/2023/11/02/bitcoin-miner-marathon-tests-btc-mining-with-methane-gas-from-waste-landfill/, https://www.ecsenvironment.com/what-is-e-waste/hazardous-substances-in-e-waste/#:~:text=and%20brain%20disorders.-,Mercury,damage%20if%20ingested%20or%20inhaled., https://www.engineering.com/story/what-raw-materials-are-used-to-make-hardware-in-computing-devices, https://www.epa.gov/lmop/basic-information-about-landfill-gas, https://www.ercot.com/gridmktinfo/dashboards/fuelmix, https://www.linkedin.com/company/nrgbloom/, https://www.nasdaq.com/articles/the-kazakhstan-mining-exodus-has-flipped-bitcoin-to-clean-energy-dominance, https://www.nature.com/articles/s41598-022-18686-8, https://www.nrel.gov/news/program/2022/reframing-curtailment.html, https://www.sciencedirect.com/science/article/abs/pii/S0921344921005103#:~:text=At%20peak%20Bitcoin%20price%20levels%20seen%20early%20in%202021%2C%20the,the%20global%20semiconductor%20supply%20chain., https://www.sciencedirect.com/science/article/abs/pii/S0957582022003160#:~:text=Toxic%20metals%20(e.g.%2C%20lead%2C,%2C%20groundwater%2C%20and%20surface%20water., https://www.sciencedirect.com/science/article/pii/S266620272200060X#:~:text=Batteries%20integration%20with%20renewable%20energy,deal%20with%20wind%20energy%20curtailments.
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 15; empty or missing alt: 5 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/6747ef1107d698d005aa5a32_65ef8f44cd87b7a_c15410a9a4e3.webp, ../blog_images/6747ef1107d698d005aa5a38_65ef8f900003b1b_87bf4393916a.webp, ../blog_images/6747ef1107d698d005aa5a35_65ef9049d9a1906_e2ca6828f20a.webp, ../blog_images/6747ef1107d698d005aa5a4d_65ef90e8c1d8fbc_97c1d56ff608.webp)
- Number/stat lines (37, noindexed page, first 12 shown):
    - "Dec 15, 2023 Carbon footprint and the environmental impact of Bitcoin mining"
    - "This escalating difficulty is the root of Bitcoin mining's substantial energy consumption. Modern ASIC miners can execute trillions of hash calculations per second, demanding substantial electricity. At the time of writing, energy consumption stood at 131.57 TWh"
    - ", but during the 2022 bull market, it surged to 204.5 TWh"
    - "Due to the close relationship between energy consumption and carbon footprint, the growing mining difficulty has significantly expanded the carbon footprint. To illustrate, a Bitcoin mined in 2021 emits 126 times the CO"
    - "e (carbon dioxide equivalent) compared to one mined in 2016, rising from 0.9 to 113 tonnes CO"
    - "e per coin from 2016 to 2021"
    - "Firstly, let's delve into the energy mix fueling Bitcoin. According to the Cambridge Center for Alternative Finance, their analysis of geographic hash rate patterns reveals that fossil fuels, predominantly coal at 36.55%, account for 62.41% of Bitcoin's energy consumption in 2022. In contrast, renewable sources contributed only 26.28%. It's important to note, however, that while this model serves "
    - "Daniel Batten introduced an alternative model, BEEST (Bitcoin Energy & Emissions Sustainability Tracker), to address the shortcomings of the CCAF model. BEEST considers several critical elements overlooked by CCAF, notably two key areas: ERCOT's (Electric Reliability Council of Texas) role and off-grid mining operations. These factors are substantial, representing 24.99% and 27.9% of total Bitcoin"
    - ". ERCOT's energy sources, as per their website, comprise 47.7% low-emission and 52.3% fossil fuel sources"
    - "Another critical area where the CCAF's data is not accurate is in the geographic distribution of hash rate, particularly in Kazakhstan. The CCAF estimated Kazakhstan's share of the global hash rate at 13.22%"
    - ". Originally, Kazakhstan was a major Bitcoin mining hub, predominantly fuelled by fossil fuels (87.6%). However, this scenario changed dramatically when Kazakh authorities cracked down on Bitcoin mining, leading to a massive exodus of mining operations. As a result, the hash rate share from Kazakhstan plummeted to an estimated 6.4%, a significant reduction from the CCAF's initial estimate"
    - "Another aspect not adequately represented in the CCAF study is the transition of Marathon Digital Holdings. They relocated 100,000 of their ASICs, approximately 325MW, from coal-based to wind and solar-powered sites, a move not reflected in CCAF's analysis"
- Current X pillar: None (noindexed Bitcoin-era post; out of scope)

### /blog/comparative-analysis-of-bitcoin-mining-pools

- Status: 200. Final URL: https://nrgbloom.com/blog/comparative-analysis-of-bitcoin-mining-pools (no redirect). In sitemap: no.
- Title (66): Comparative Analysis of the Major Bitcoin Mining Pools | NRG Bloom
- Meta (54): Comparative Analysis of the Major Bitcoin Mining Pools
- Canonical: https://nrgbloom.com/blog/comparative-analysis-of-bitcoin-mining-pools. Robots meta: noindex, follow.
- H1: Comparative Analysis of the Major Bitcoin Mining Pools
- H2s (6): Methodology; Results; Weaknesses of the Study; Conclusion & Recommendations; Resources; Latest news updates
- Word count: 1312
- Internal hrefs (15 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/bitcoin-mining-pools-explained (noindex), /live-mining-pool-data **404**, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (17): https://academy.braiins.com/en/braiins-pool/rewards-and-payouts/, https://antpoolsupport-hc.zendesk.com/hc/en-us/articles/5983010227993-Miners-Settings-Fees, https://f2pool.zendesk.com/hc/en-us/articles/360058887912-Mining-pools-info-payout-schemes-and-thresholds-at-f2pool, https://foundryusapool.com/static/Foundry_USA_Pool_Service_Agreement.pdf?utm_source=chatgpt.com, https://hashrateindex.com/hashrate/pools, https://help.cloverpool.com/hc/en-us/articles/900001116943-The-fee-settlement-mode-and-payment-threshold-of-CloverPool, https://ir.mara.com/news-events/press-releases/detail/1392/mara-announces-bitcoin-production-and-mining-operation-updates-for-march-2025, https://pool-faq.foundrydigital.com/payouts#fpps-calculations, https://sbicrypto.com/, https://support.spiderpool.com/fees, https://twitter.com/nrgbloom, https://whitebit.com/mining-pool/overview, https://www.binance.com/en/square/post/502257, https://www.linkedin.com/company/nrgbloom/, https://www.ocean.xyz/, https://www.secpool.com/, https://www.viabtc.com/pricing
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 10; empty or missing alt: 1 (../images/NRG-bloom-meta-image_1.webp)
- Number/stat lines (9):
    - "Apr 26, 2025 Comparative Analysis of the Major Bitcoin Mining Pools"
    - "over an eight-week period, from February 5 to April 2, 2025, and to examine how their fees, reward methods, and block-building strategies impact miner yields. We’ll also introduce"
    - "We applied each pool’s published fee schedule (0-4 %) to the subsidy and fee portions as appropriate."
    - "5-10 % gap:"
    - "(0.000033 - 0.000030) ÷ 0.000030 ≈ 10%"
    - "(0.0000316 - 0.000030) ÷ 0.000030 ≈ 5%"
    - ": If you include outliers like Poolin at ~0.00002157 BTC/TH, the gap to Ocean becomes ~64 %. That’s a useful extreme, but most miners choose from the core cluster, so the 5-10 % figure paints a more practical picture."
    - "While mitigates extreme luck, longer periods (6-12 months) would better smooth transaction-fee seasonality and pool-luck effects."
    - "https://ir.mara.com/news-events/press-releases/detail/1392/mara-announces-bitcoin-production-and-mining-operation-updates-for-march-2025"
- Current X pillar: None (noindexed Bitcoin-era post; out of scope)

### /blog/digital-gold-mine-bitcoin-mining-for-energy-innovators

- Status: 200. Final URL: https://nrgbloom.com/blog/digital-gold-mine-bitcoin-mining-for-energy-innovators (no redirect). In sitemap: no.
- Title (52): Bitcoin Mining 101 for Energy Innovators | NRG Bloom
- Meta (40): Bitcoin Mining 101 for Energy Innovators
- Canonical: https://nrgbloom.com/blog/digital-gold-mine-bitcoin-mining-for-energy-innovators. Robots meta: noindex, follow.
- H1: Bitcoin Mining 101 for Energy Innovators
- H2s (10): Explaining the Bitcoin Network; What is Bitcoin Mining?; What is a Bitcoin Mining Rig?; What are Bitcoin Mining Farms?; Risks and Issues in the Bitcoin Mining Industry; The Future of Bitcoin Mining; Should Energy Producers Be Mining Bitcoin?; Conclusion; References; Latest news updates
- Word count: 7586
- Internal hrefs (15 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /contact, /blog/stranded-energy-bitcoin-waste-recovery-explained, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (71): https://academy.binance.com/en/glossary/51-percent-attack, https://academy.binance.com/en/glossary/block-reward, https://academy.binance.com/en/glossary/candidate-block, https://academy.binance.com/en/glossary/nonce, https://bitcoin.clarkmoody.com/dashboard/, https://bitcoin.org/bitcoin.pdf, https://bitcoin.org/en/, https://bitcoin.org/en/bitcoin-core/, https://bitcoinmagazine.com/business/bitcoin-mining-solve-e-waste-crisis, https://bitcoinmagazine.com/business/kengen-to-provide-geothermal-energy-to-bitcoin-miners-in-kenya, https://bitcoinmagazine.com/guides/how-to-heat-your-home-with-bitcoin-mining, https://bitcointalk.org/index.php?topic=110090.0, https://bitflyer.com/en-us/s/glossary/hashrate, https://braiins.com/, https://braiins.com/stratum-v1, https://btc.com/stats/diff, https://cointelegraph.com/explained/can-quantum-computers-mine-bitcoin-faster, https://cointelegraph.com/news/canaans-new-5-nanometer-chips-to-escalate-asic-arms-race-with-bitmain, https://cointelegraph.com/news/jack-dorsey-s-nano-bitcoin-mining-chip-heads-to-prototype, https://cointelegraph.com/news/new-hashprice-based-derivatives-instrument-gives-bitcoin-miners-another-way-to-hedge, https://crypto.com/university/blockchain-scalability, https://d-central.tech/overview-of-software-issues-that-can-arise-during-asic-repairs/, https://d-central.tech/the-impact-of-temperature-on-asic-miners-performance-and-repair/, https://d-central.tech/the-lifespan-of-an-asic-miner-how-long-do-asic-miners-last/#:~:text=Modern%20ASIC%20miners%20are%20known,last%20up%20to%20a%20decade, https://data.hashrateindex.com/chart/asic-price-index, https://developer.bitcoin.org/devguide/mining.html, https://developer.bitcoin.org/reference/block_chain.html, https://en.bitcoin.it/wiki/Mining_hardware_comparison, https://genesisdigitalassets.com/greenhouse-project/, https://github.com/bitcoin/bitcoin/blob/f436bfd126adaa64daba2e78016eb707e37eabce/src/chainparams.cpp, https://github.com/bitcoin/bitcoin/blob/master/src/consensus/amount.h, https://help.coinbase.com/en/coinbase/getting-started/crypto-education/what-is-the-bitcoin-blockchain, https://hestiia.com/en, https://jetcool.com/post/five-reasons-water-cooling-is-better-than-immersion-cooling/, https://lightning.network/lightning-network-paper.pdf, https://ma.ttias.be/dissecting-code-bitcoin-halving/, https://mempool.space/graphs/mining/hashrate-difficulty, https://mintgreen.co/projects/shelter-point-distillery/, https://newhedge.io/terminal/bitcoin/difficulty-estimator, https://news.bloomberglaw.com/product/tax/bloombergtaxnews/exp/eyJpZCI6IjAwMDAwMTg5LWRiYjYtZGIyMi1hZmJiLWRiZjcwOWExMDAwMSIsImN0eHQiOiJEVE5XIiwidXVpZCI6IlBGa0FBVTZHRmJyWXFyQm9MTGhjOWc9PXBuOFlZdEt4ZXBSOWF4cVI0akV2R0E9PSIsInRpbWUiOiIxNjkxNzQ5MjI3NzI2Iiwic2lnIjoiTS9hWno4c1VJdGZlM2VodHhPek80VGxwcTg4PSIsInYiOiIxIn0=?source=newsletter&item=read-text%C2%AEion=digest, https://research.ibm.com/blog/1nm-chips-vtfet-ruthenium, https://research.ibm.com/blog/2-nm-chip, https://shop.bitmain.com/product/detail?pid=000202305192246285028Kx534wu0678, https://stratumprotocol.org/, https://twitter.com/nrgbloom, https://whattomine.com/gpus, https://wiki.bitcoinsv.io/index.php/Target, https://www.airfilterusa.com/industries-served/cryptocurrency-air-filtration, https://www.bitpanda.com/academy/en/lessons/what-is-a-bitcoin-node/, https://www.blockchain.com/explorer/charts/total-bitcoins, https://www.cdw.com/content/cdw/en/articles/hardware/cpu-vs-gpu.html#:~:text=The%20primary%20difference%20between%20a,based%20microprocessors%20in%20modern%20computers, https://www.coindesk.com/learn/bitcoin-mining-difficulty-everything-you-need-to-know/, https://www.coindesk.com/learn/open-source-what-it-is-and-why-its-critical-for-bitcoin-and-crypto/#:~:text=Open%20source%20in%20Bitcoin%20is%20important%20for%20a%20number%20of%20reasons%3A&text=Security%3A%20Open%20source%20can%20lead,secure%2C%20battle%2Dtested%20code, https://www.coindesk.com/tech/2020/04/26/the-rise-of-asics-a-step-by-step-history-of-bitcoin-mining/, https://www.coindesk.com/tech/2021/02/05/what-does-hashrate-mean-and-why-does-it-matter/, https://www.g2.com/articles/cpu-mining, https://www.hp.com/my-en/shop/tech-takes/post/integrated-vs-dedicated-graphics-cards#:~:text=You%20need%20a%20dedicated%20GPU,with%20CPUs%20with%20integrated%20graphics, https://www.ibm.com/topics/blockchain, https://www.investopedia.com/terms/m/mining-pool.asp, https://www.linkedin.com/company/nrgbloom/, https://www.linkedin.com/pulse/history-evolution-asic-miners-leo-l/, https://www.nasdaq.com/articles/what-happens-when-all-21-million-bitcoin-are-mined, https://www.okta.com/identity-101/hashing-algorithms/#:~:text=A%20hashing%20algorithm%20is%20a,And%20that's%20the%20point, https://www.oreilly.com/library/view/blockchain-quick-reference/9781788995788/113570ed-7348-41a2-adf9-bbd2cfdbce23.xhtml, https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/ch07.html, https://www.raypcb.com/fpga-vs-gpu-vs-cpu/#:~:text=The%20first%20is%20its%20speed,more%20than%20an%20equivalent%20CPU, https://www.sciencedirect.com/science/article/abs/pii/S0165993615301643, https://www.sciencedirect.com/science/article/abs/pii/S0167926020300146#:~:text=The%20mining%20hash%20rate%20using,compared%20to%20the%20standard%20technique, https://www.sciencedirect.com/science/article/abs/pii/S0921344921005103?via%3Dihub, https://www.sciencedirect.com/science/article/pii/S2772737823000147, https://www.synopsys.com/glossary/what-is-blockchain.html#:~:text=A%20blockchain%20is%20a%20decentralized,the%20consensus%20of%20the%20network
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 31; empty or missing alt: 21 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/65f0b6a9b9e5c6492cc92fb6_btc_20mining_20_30cb95a7c445.webp, ../blog_images/65f0b8d36486160fc5c8ac1a_btc_20mining_20_a8eea75ff456.webp, ../blog_images/65f0b8fbbed5f062815b724d_btc_20mining_20_2b5351068464.webp, ../blog_images/65f0b956fb58332c744f8d7b_btc_20mining_20_d189d3918cbf.webp, ../blog_images/65f0c9e3b491514edae580dd_btc_20mining_20_cf54498a9288.webp, ../blog_images/65f0ca5d9cae4a1fcef84616_btc_20mining_20_66ece6559be2.webp, ../blog_images/65f0cb95dc470d3ce0b47d2b_btc_20mining_20_6bd1c341d74e.webp, ../blog_images/65f0cc01f989c1a52365460f_btc_20mining_20_9a51d12c437f.webp, ../blog_images/65f0cc58537bb6cc2783a0d4_btc_20mining_20_c88a51c50e8d.webp)
- Number/stat lines (23, noindexed page, first 12 shown):
    - "Sep 16, 2023 Bitcoin Mining 101 for Energy Innovators"
    - "In 2009, Satoshi Nakamoto introduced Bitcoin to the world as the first decentralized digital cryptocurrency that operates on a peer-to-peer network"
    - "Bitcoin also exhibits a distinctive attribute that sets it apart from traditional fiat currencies, an inherent limitation. Satoshi intricately designed a protocol that enforces a rigid supply cap of 21 million bitcoins. With bitcoins entering circulation approximately every 10 minutes, their scarcity intensifies as time progresses. This characteristic renders the network impervious to inflationary"
    - "". The Bitcoin Network quantifies this difficulty as a numerical value, which dynamically adapts based on the average block release time over every 2016 block, a phase acknowledged as the "difficulty epoch""
    - "For comparison, consider the number of leading zeros in the hash of the first block with the hash solved on the 2nd of September 2023 at 22:09:24 UTC. It becomes evident that the number of leading zeros has increased."
    - ". This process of controlled issuance involves the halving of the bitcoin quantity within the block subsidy every 210,000 blocks or approximately every 4 years. This event is recognized as the Bitcoin halving. At the start of the Bitcoin Network, the block subsidy featured 50 bitcoins"
    - ". This figure was reduced to 25 bitcoins in 2012, further halving to 12.5 bitcoins in 2016, and now stands at 6.25 bitcoins. The upcoming halving is anticipated to occur on April 20, 2024"
    - ". It's this finite nature of halvings that contributes to Bitcoin's hard cap of 21 million coins."
    - "CPU Mining (2009 - 2010)"
    - "GPU and FPGA Mining (2010-2013)"
    - "Around 2011, a novel variant of Bitcoin mining rig gained prominence: the field programmable gate arrays (FPGAs). FPGAs represent an interconnected network of semiconductor devices that boast the distinctive capability of being reprogrammed to achieve desired functionality, achieved through the utilization of hardware description language (HDL) files. FPGAs demonstrated compatibility with Bitcoin "
    - "ASICs (2012 - now)"
- Current X pillar: None (noindexed Bitcoin-era post; out of scope)

### /blog/investment-opportunities-with-bitcoin-treasury-management

- Status: 200. Final URL: https://nrgbloom.com/blog/investment-opportunities-with-bitcoin-treasury-management (no redirect). In sitemap: no.
- Title (79): Unlocking Investment Opportunities with Bitcoin Treasury Management | NRG Bloom
- Meta (67): Unlocking Investment Opportunities with Bitcoin Treasury Management
- Canonical: https://nrgbloom.com/blog/investment-opportunities-with-bitcoin-treasury-management. Robots meta: noindex, follow.
- H1: Unlocking Investment Opportunities with Bitcoin Treasury Management
- H2s (8): The Evolving Investment Landscape; Understanding Bitcoin Treasury Management; The Importance of Diversification; Real-World Case Study: MicroStrategy's Bitcoin Treasury Strategy; Leveraging Locked Bitcoin Rewards; Practical Insights for Businesses and Individuals; Conclusion; Latest news updates
- Word count: 1740
- Internal hrefs (13 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (2): https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 13; empty or missing alt: 4 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/6754c31ff504517d4537e9e3_6754b5772eca5a3_32c92fa7311a.png, ../blog_images/6754c31ff504517d4537e9e6_6754b5ff0a834d8_31261eeff2af.png, ../blog_images/6754c31ff504517d4537e9e0_6754bdc8b6e1c38_ebefafa5adbb.png)
- Number/stat lines (4):
    - "Dec 8, 2024 Unlocking Investment Opportunities with Bitcoin Treasury Management"
    - "Bitcoin's fixed supply of 21 million tokens and its transparent, verifiable scarcity on a public blockchain position it as a strong hedge against inflation. In times of economic uncertainty and potential currency debasement, Bitcoin offers a safeguard against central banks' inflationary actions, appealing to corporate treasurers seeking stability."
    - "MicroStrategy serves as a prominent example for businesses considering incorporating Bitcoin into their treasury management strategies. Led by CEO Michael Saylor, MicroStrategy adopted Bitcoin as its primary treasury reserve asset in August 2020, becoming one of the first publicly traded companies to make such a significant investment."
    - ": The company pursued a strategy of consistently accumulating Bitcoin, even utilizing financing methods like issuing convertible notes to fund purchases. As of the first quarter of 2024, MicroStrategy held approximately 214,400 Bitcoins, valued at around $15.2 billion."
- Current X pillar: None (noindexed Bitcoin-era post; out of scope)

### /blog/the-evolution-of-bitcoin-mining-hardware

- Status: 200. Final URL: https://nrgbloom.com/blog/the-evolution-of-bitcoin-mining-hardware (no redirect). In sitemap: no.
- Title (52): The Evolution Of Bitcoin Mining Hardware | NRG Bloom
- Meta (40): The Evolution Of Bitcoin Mining Hardware
- Canonical: https://nrgbloom.com/blog/the-evolution-of-bitcoin-mining-hardware. Robots meta: noindex, follow.
- H1: The Evolution Of Bitcoin Mining Hardware
- H2s (4): What is a Bitcoin Mining Rig?; Conclusion; References; Latest news updates
- Word count: 1373
- Internal hrefs (14 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /contact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (16): https://bitcointalk.org/index.php?topic=110090.0, https://cointelegraph.com/news/canaans-new-5-nanometer-chips-to-escalate-asic-arms-race-with-bitmain, https://cointelegraph.com/news/jack-dorsey-s-nano-bitcoin-mining-chip-heads-to-prototype, https://d-central.tech/the-impact-of-temperature-on-asic-miners-performance-and-repair/, https://en.bitcoin.it/wiki/Mining_hardware_comparison, https://jetcool.com/post/five-reasons-water-cooling-is-better-than-immersion-cooling/, https://shop.bitmain.com/product/detail?pid=000202305192246285028Kx534wu0678, https://twitter.com/nrgbloom, https://whattomine.com/gpus, https://www.cdw.com/content/cdw/en/articles/hardware/cpu-vs-gpu.html#:~:text=The%20primary%20difference%20between%20a,based%20microprocessors%20in%20modern%20computers, https://www.g2.com/articles/cpu-mining, https://www.hp.com/my-en/shop/tech-takes/post/integrated-vs-dedicated-graphics-cards#:~:text=You%20need%20a%20dedicated%20GPU,with%20CPUs%20with%20integrated%20graphics, https://www.linkedin.com/company/nrgbloom/, https://www.linkedin.com/pulse/history-evolution-asic-miners-leo-l/, https://www.raypcb.com/fpga-vs-gpu-vs-cpu/#:~:text=The%20first%20is%20its%20speed,more%20than%20an%20equivalent%20CPU, https://www.sciencedirect.com/science/article/abs/pii/S0167926020300146#:~:text=The%20mining%20hash%20rate%20using,compared%20to%20the%20standard%20technique
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 13; empty or missing alt: 3 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/65f0cefd305d51915b7f51f1_btc_20mining_20_ceaabc4afef7.webp, ../blog_images/65f0cf8a3a47981d2fdc60ba_btc_20mining_20_39020e06f0d9.webp)
- Number/stat lines (7):
    - "Jan 15, 2024 The Evolution Of Bitcoin Mining Hardware"
    - "CPU Mining (2009 - 2010)"
    - "GPU and FPGA Mining (2010-2013)"
    - "ASICs (2012 - now) -"
    - "Around 2011, a novel variant of Bitcoin mining rig gained prominence: the field programmable gate arrays (FPGAs). FPGAs represent an interconnected network of semiconductor devices that boast the distinctive capability of being reprogrammed to achieve desired functionality, achieved through the utilization of hardware description language (HDL) files. FPGAs demonstrated compatibility with Bitcoin "
    - "ASICs (2012 - now)"
    - "In September 2012, a significant milestone emerged in the realm of mining rigs when Canaan Creative unveiled the Avalon, heralding the introduction of the first application-specific integrated circuit (ASIC) dedicated exclusively to bitcoin mining"
- Current X pillar: None (noindexed Bitcoin-era post; out of scope)

### /blog/understanding-the-bitcoin-halving

- Status: 200. Final URL: https://nrgbloom.com/blog/understanding-the-bitcoin-halving (no redirect). In sitemap: no.
- Title (45): Understanding the Bitcoin Halving | NRG Bloom
- Meta (33): Understanding the Bitcoin Halving
- Canonical: https://nrgbloom.com/blog/understanding-the-bitcoin-halving. Robots meta: noindex, follow.
- H1: Understanding the Bitcoin Halving
- H2s (7): What Is The Bitcoin Halving; How Does The Bitcoin Halving Work?; What Impact Does The Bitcoin Halving Have?; What Happens After The Last Bitcoin Halving; Conclusion; References; Latest news updates
- Word count: 1964
- Internal hrefs (15 unique): /, /strategy, /about-leadership, /energy-partners, /investor-relations, /insights, /contact, /blog/stranded-energy-bitcoin-waste-recovery-explained, /blog/bitcoin-mining-supply-squeeze (noindex), /blog/comparative-analysis-of-bitcoin-mining-pools (noindex), /blog/investment-opportunities-with-bitcoin-treasury-management (noindex), /esg-impact, /discuss-partnership (noindex), /privacy-policy, /terms-of-service
- External links (8): https://academy.binance.com/en/glossary/block-reward, https://bitcoin.clarkmoody.com/dashboard/, https://bitcoin.org/bitcoin.pdf, https://github.com/bitcoin/bitcoin/blob/f436bfd126adaa64daba2e78016eb707e37eabce/src/chainparams.cpp, https://github.com/bitcoin/bitcoin/blob/master/src/consensus/amount.h, https://ma.ttias.be/dissecting-code-bitcoin-halving/, https://twitter.com/nrgbloom, https://www.linkedin.com/company/nrgbloom/
- JSON-LD (2 blocks): Article, Person, Organization, ImageObject, WebPage, BreadcrumbList, ListItem
- og/twitter tags (7): og:url=set, og:description=set, og:type=set, og:image=(empty), twitter:description=set, twitter:image=(empty), twitter:card=set
- Images: 20; empty or missing alt: 10 (../images/NRG-bloom-meta-image_1.webp, ../blog_images/65f0cb95dc470d3ce0b47d2b_btc_20mining_20_6bd1c341d74e.webp, ../blog_images/65f0cc01f989c1a52365460f_btc_20mining_20_9a51d12c437f.webp, ../blog_images/65f0cc58537bb6cc2783a0d4_btc_20mining_20_c88a51c50e8d.webp, ../blog_images/65f0cc909b651eae06aa79f0_btc_20mining_20_dfe8d2c44039.webp, ../blog_images/65f0ccd19cae4a1fcefa8bc7_btc_20mining_20_0b1e2934e517.webp, ../blog_images/65f0cd87cf1cde53dbfcc8f6_btc_20mining_20_0b01ffd96550.webp, ../blog_images/65f0cdda01c1393c9747b46a_btc_20mining_20_af3fe0579656.webp, ../blog_images/65f0ce4cbce07935ce7513b4_btc_20mining_20_82034c699fe7.webp, ../blog_images/65f0d8f7cecfce05e7dcc5c1_halving_20-_20i_d23978d03289.webp)
- Number/stat lines (4):
    - "Feb 26, 2024 Understanding the Bitcoin Halving"
    - "However, unlike the traditional fiat financial system where the money supply can be adjusted arbitrarily, Bitcoin's approach to increasing its supply is finite and governed by preset rules in its code. When Bitcoin was created by Satoshi Nakamoto, the total supply was capped at 21 million bitcoins"
    - ". It then decreased to 25 bitcoins in 2012, halved again to 12.5 bitcoins in 2016, and currently sits at 6.25 bitcoins. The next halving is expected on April 19, 2024"
    - ". This finite nature of halvings contributes to Bitcoin's hard cap of 21 million coins and answers the critical question of when is the last bitcoin halving. It's this finite nature of halvings that contributes to Bitcoin's hard cap of 21 million coins."
- Current X pillar: None (noindexed Bitcoin-era post; out of scope)

