# Power, Not Chips post: draft for approval

Status: draft for Makir's approval. Facts verified Oct 17, 2026.
Pillar: 1 (speed to power, off-grid infrastructure).
Primary keyword: grid interconnection queue alternative.
Secondary: behind-the-meter data center, stage-gated data center, speed to power data center.
Commercial page: /strategy. Post 2 of the Task 7 cadence.

---

Title tag: Grid Interconnection Queue Alternative | NRG Bloom
Meta: The grid interconnection queue now runs over five years, and most projects never connect. Behind-the-meter power is the alternative that skips it.
Slug: /blog/grid-interconnection-queue-alternative
H1: Power, Not Chips, Is the Limit on AI Compute
Byline: Makir Volcy, Founder & CEO · Published [deploy date]
Pillar: 1

**TL;DR:** A grid interconnection queue alternative is any way to power a data center without joining the line for a grid connection. The median project built in 2025 waited over five years. Only 13% of capacity requested since 2000 was ever built. Behind-the-meter generation skips the queue.

## What is a grid interconnection queue alternative?

It is a way to energize a site without waiting for a transmission connection. Instead of requesting grid capacity and entering a study process, you generate power at the site and use it there. The data center and the generation sit behind the same meter, so nothing has to pass through a utility network.

The distinction matters more every quarter. The constraint on AI compute right now is not chip supply. It is finding a place to plug the chips in.

## How long is the grid interconnection queue?

Over five years, for projects that actually made it. Berkeley Lab tracks interconnection queue data covering about 98% of installed US generating capacity. In its 2026 edition, the median duration from interconnection request to commercial operation ran **over five years for projects built in 2025** ([Berkeley Lab, May 2026](https://emp.lbl.gov/publications/queued-2026-edition-characteristics)).

That figure only counts the survivors. It is the wait for projects that finished.

## Do projects in the queue actually get built?

Most do not. Of all capacity that submitted interconnection requests between 2000 and 2020, only **13% had reached commercial operations** by the end of 2025. **75% had been withdrawn** and 10% was still waiting ([Berkeley Lab, May 2026](https://emp.lbl.gov/publications/queued-2026-edition-characteristics)).

Read that as a planning input, not a statistic. A grid interconnection request is not a power supply. It is a lottery ticket with a five-year expiry and roughly one-in-eight odds.

## Why is gas piling up in the queue?

Because the AI power rush arrived and went straight into the same line as everyone else. Active natural gas capacity in US interconnection queues rose **86% in 2025, to 253 GW** ([Berkeley Lab, May 2026](https://emp.lbl.gov/publications/queued-2026-edition-characteristics)). Developers know gas is the fastest firm power available. They are still queuing for it.

Meanwhile 549 GW already holds a draft or executed interconnection agreement without reaching operation. Signing the agreement is not the finish line either.

## What does behind the meter actually mean?

It means the power is generated and consumed on the same site, without passing through a utility grid. There is no interconnection request, no impact study and no queue position, because there is nothing to interconnect to.

This is not a loophole. It is a different category. Berkeley Lab's dataset says so directly: it covers generation seeking transmission connection and explicitly **"does not include load interconnection requests nor distribution-connected or behind-the-meter projects"** ([Berkeley Lab, May 2026](https://emp.lbl.gov/publications/queued-2026-edition-characteristics)). Behind-the-meter projects are absent from the queue statistics because they never enter the queue.

The US market has noticed. Developers have announced roughly **101 GW of behind-the-meter gas generation** for US data centers ([RBC Capital Markets](https://www.rbccm.com/en/insights/2026/05/natural-gas-powers-the-data-center-boom)).

## Does this work outside the US?

It works best where the gas is already being wasted. US behind-the-meter projects still have to buy gas and build a supply arrangement. At a flare site, the fuel is being destroyed for nothing, and the operator is often paying a penalty to destroy it.

We have run a modular data center on flared gas at Ogboinbiri, in Bayelsa State, Nigeria, since February 2025. The site is energized at 1 MW of 1.5 MW developed and has held 94% uptime under a community-based power purchase agreement. There was never a queue, because there was never a grid.

## What is actually hard about it?

Not the power. The operating environment. Generators in the Niger Delta face humidity, dust and a supply chain that does not deliver a spare part the next morning. We run engines below full load and take scheduled downtime, because an engine pushed to its rating in those conditions does not last.

The first-order lesson from three years of this: speed to power is an operations problem, not a procurement problem. Anyone can order a generator. Keeping it running at 94% in the delta is the part that takes practice. The [flare gas data center in Nigeria](/case-studies/bayelsa) case study has the full record.

## What does an operator do with this?

Stage it. Bitcoin mining goes first because it tolerates variable power and proves the site works before anyone commits to inference hardware. AI inference follows once the power profile is known and stable. That sequencing is the whole point of our [modular data center deployment](/strategy) model: you learn whether a site is real before you put expensive accelerators on it.

If you hold gas that is currently being flared, the queue question never arises for you. The power is already at the wellhead.

## FAQ

**How long does a grid interconnection take?** For projects built in 2025, the median was over five years from request to commercial operation, according to Berkeley Lab.

**What percentage of interconnection requests get built?** Only 13% of capacity requested between 2000 and 2020 had reached operation by the end of 2025. 75% was withdrawn.

**Is behind-the-meter power in the interconnection queue?** No. Berkeley Lab's queue dataset explicitly excludes behind-the-meter projects, because they do not seek a transmission connection.

**Why start with Bitcoin mining instead of AI?** Mining tolerates variable power, so it proves a site's real power profile before AI inference hardware is committed.

**Sitting on gas you are currently flaring?** [Tell us about your site](/energy-partners). We will tell you whether it fits.

## References

1. Rand, J., Cheyette, A., Talley, C., Zhang, S., Gorman, W., Wiser, R., Seel, J., Jeong, S., Kahrl, F. "Queued Up: 2026 Edition, Characteristics of Power Plants Seeking Transmission Interconnection As of the End of 2025". Lawrence Berkeley National Laboratory, May 2026. https://emp.lbl.gov/publications/queued-2026-edition-characteristics
2. RBC Capital Markets, "Natural gas powers the data center boom", May 2026. https://www.rbccm.com/en/insights/2026/05/natural-gas-powers-the-data-center-boom

---

## Implementation notes for Claude Code (do not publish this section)

- Build from the NGFCP post template (`/blog/ngfcp-flare-gas-award-review`): same layout, byline block, related-posts block and closing CTA style.
- Article JSON-LD (author Makir Volcy, /makir-volcy; datePublished = deploy date) and FAQPage JSON-LD mirroring the FAQ word for word.
- Add to `sitemap.xml` with `lastmod`, to the top of `/insights`, to the homepage Latest cards (becomes slot 1; NGFCP and the case study fill 2 and 3), and to the related-posts pool.
- Link from `/strategy`, anchored "grid interconnection queue alternative", in the behind-the-meter paragraph that already exists on that page.
- Featured image: reuse an existing Ogboinbiri site image. Do not source a US data center stock photo, the post is about our own position.
- Commit separately as `P1: power not chips post` so it can be approved or dropped on its own.
- Title is exactly 50 characters and meta is 146, both inside the checker's 50 to 60 and 130 to 155 bands.

## Fact-check audit (Oct 17, 2026; do not publish)

Primary source verified directly at emp.lbl.gov in session, not via an aggregator.

| # | Claim | Source | Verdict |
| --- | --- | --- | --- |
| 1 | Median duration from interconnection request to commercial operation was over five years for projects built in 2025 | LBNL Queued Up 2026 Edition, May 2026 | CONFIRMED on the publication page |
| 2 | Only 13% of capacity requested 2000 to 2020 reached operation by end 2025; 75% withdrawn; 10% active | Same | CONFIRMED |
| 3 | Active natural gas capacity in queues rose 86% in 2025 to 253 GW | Same | CONFIRMED |
| 4 | 549 GW holds a draft or executed IA without reaching operation | Same | CONFIRMED |
| 5 | Dataset covers ~98% of installed US generating capacity, >50 grid operators | Same | CONFIRMED |
| 6 | The dataset excludes load interconnection requests and behind-the-meter projects | Same, quoted verbatim from the abstract | CONFIRMED |
| 7 | ~101 GW of behind-the-meter gas generation announced for US data centers | RBC Capital Markets | CONFIRMED in v4 brief (C2 story 3), carried forward |
| 8 | Ogboinbiri live since Feb 2025; 1 MW of 1.5 MW; 94% uptime; community PPA | nrgbloom.com case study and PUBLIC-NARRATIVE.md | ON SITE, confirm with Makir (Sign-off item 5) |
| 9 | Engines run below full load with scheduled downtime | nrgbloom.com gas flaring post | ON SITE |
| 10 | Bitcoin first, AI inference second staging | nrgbloom.com /strategy | ON SITE |

**Scope precision, deliberate.** The Berkeley Lab report covers *generation* seeking transmission interconnection. It does **not** measure how long a data center waits for a *load* connection. The post never claims it does. Every LBNL figure in the draft is framed as the wait to add generation, which is the honest reading. Trade-press figures circulating for data center load waits (3 to 7 years by region, up to 12 years in isolated cases) were deliberately left out: they are secondary reporting and not needed, since the verified generation figures carry the argument.

**Not used, on purpose.** The CoinDesk miner valuation multiples (12.3x versus 5.9x) and hashprice belong to Task 7 post "Why Bitcoin Miners Are Becoming AI Companies" and would cannibalise it. No return, margin, payback or valuation language for NRG Bloom. No counterparty names. No claim that NRG Bloom operates in the United States. No Kenya or Colombia. No carbon credit claims.
