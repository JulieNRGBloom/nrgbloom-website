# NGFCP post: publish-ready draft

Status: draft for Makir's approval (Sign-off item 7). Facts verified Oct 11, 2026.
Pillars: 2 (NGFCP awards at risk) and 4 (the owner's problem first).
Primary keyword: NGFCP flare gas award. Commercial page: /energy-partners.

---

Title tag: NGFCP Flare Gas Award: What Holders Can Do | NRG Bloom
Meta: Nigeria's gas minister says 22 of 42 NGFCP awardees have yet to make significant progress. What the review means and how on-site power helps.
Slug: /blog/ngfcp-flare-gas-award-review
H1: Stalled NGFCP Flare Awards: What Award Holders Can Do Before Review
Byline: Makir Volcy, Founder & CEO · Published [deploy date]

**TL;DR:** An NGFCP flare gas award gives a company the right to capture gas that Nigerian oil producers would otherwise flare. In October 2026, Nigeria's gas minister said roughly 22 of the 42 awardees had yet to make significant progress. NUPRC can revoke awards that stall. On-site power is the fastest way to show progress, because it needs no pipeline and no grid.

## What is an NGFCP flare gas award?

It is a right to commercialise gas at a specific flare site in Nigeria. The Nigerian Gas Flare Commercialisation Programme (NGFCP) awards those rights to third-party companies. The goal is simple: capture associated gas and put it to use instead of burning it.

## How many NGFCP awardees have stalled?

About 22 of 42. Ekperikpe Ekpo, Minister of State for Petroleum Resources (Gas), said about 20 companies had made significant progress. That leaves roughly 22, or 52.4%, yet to reach that level. He based the figure on a NUPRC report on awardee activity ([Guardian Nigeria, Oct 5, 2026](https://guardian.ng/news/gas-commercialisation-falters-as-22-of-42-awardees-struggle-to-develop-flare-sites/)).

The minister also said some investors had met resistance gaining access to flare sites. Access is a real problem, and it is worth naming.

## What happens to an award that stalls?

It can be revoked. NUPRC evaluates each award one year after it is granted. Where progress is insufficient, the Commission says it will act, up to revoking the award ([BusinessDay, Sep 2026](https://businessday.ng/energy/article/nuprc-to-revoke-gas-flare-permits-over-inaction/)).

The minister was direct about the choice. Companies can develop the technology to capture the gas, or allow qualified investors to commercialise it.

## Why does flare gas sit unused in Nigeria?

Because most capture plans wait on infrastructure that does not exist yet. The World Bank names the barriers: missing pipelines, thin gas markets, scarce capital and weak enforcement ([World Bank, 2026](https://www.worldbank.org/en/programs/gasflaringreduction/publication/2026-global-gas-flaring-tracker-report)).

The cost of waiting is large. Nigeria flared about 301.6 billion cubic feet of gas between January 2025 and June 2026 ([Guardian Nigeria](https://guardian.ng/news/gas-commercialisation-falters-as-22-of-42-awardees-struggle-to-develop-flare-sites/)). Nigeria is also among the nine countries that account for 83% of global flaring ([World Bank, 2026](https://www.worldbank.org/en/programs/gasflaringreduction/publication/2026-global-gas-flaring-tracker-report)).

## How does on-site power put flare gas to work?

It uses the gas where it comes out of the ground. Gas generators sit next to the flare and turn associated gas into electricity. A modular data center beside them uses that power on site.

There is no pipeline to build and no grid queue to join. That is why on-site power can show progress on a timeline measured in months, not years. Our standard path runs from first call to first power in under 90 days.

## What does it look like in the field?

We have run a modular data center on flared gas at Ogboinbiri, in Bayelsa State, since February 2025. The site is energized at 1 MW of 1.5 MW developed. It has held 94% uptime under a community-based power purchase agreement.

The hard part is not the technology. It is operating in the Niger Delta: logistics, humidity, generator maintenance and community agreements. We run generators below full load, with scheduled downtime, to keep them alive in those conditions. Read the [flare gas data center in Nigeria](/case-studies/bayelsa) case study for the full record.

## What does it earn the gas owner?

Revenue from gas that was being burned. The owner sells gas it would otherwise flare, and NRG Bloom deploys, owns and operates the compute on site. Flaring at the wellhead falls as the gas is used.

Bitcoin mining goes first because it tolerates variable power and proves the site. AI inference follows once the site is proven. Our [modular data center deployment](/strategy) model sets out the stages.

## What comes next for award holders?

The review clock is already running. An award holder with no capture plan should decide soon whether to build, partner or risk revocation. A working on-site deployment is clear evidence of progress.

## FAQ

**What is the NGFCP?** The Nigerian Gas Flare Commercialisation Programme awards third parties the right to capture and use gas at specific flare sites. Its aim is to end routine flaring.

**Can an NGFCP award be revoked?** Yes. NUPRC evaluates each award one year after it is granted and can revoke awards where progress is insufficient.

**Does flare gas need a pipeline to earn revenue?** No. On-site generation turns the gas into power where it is produced, and on-site compute uses that power.

**How long does an on-site deployment take?** Our standard path runs from first call to first power in under 90 days, depending on the site.

**Holding an NGFCP flare site award with no capture plan yet?** [Tell us about your site](/energy-partners). We will tell you whether it fits.

## References

1. Guardian Nigeria, "Gas commercialisation falters as 22 of 42 awardees struggle to develop flare sites", Oct 5, 2026. https://guardian.ng/news/gas-commercialisation-falters-as-22-of-42-awardees-struggle-to-develop-flare-sites/
2. BusinessDay, "NUPRC to revoke gas flare permits over inaction", Sep 2026. https://businessday.ng/energy/article/nuprc-to-revoke-gas-flare-permits-over-inaction/
3. World Bank GFMR, 2026 Global Gas Flaring Tracker Report, June 23, 2026. https://www.worldbank.org/en/programs/gasflaringreduction/publication/2026-global-gas-flaring-tracker-report

---

## Implementation notes for Claude Code (do not publish this section)

- Build the page from the gas flaring post's template (`/blog/gas-flaring-explained-waste-to-energy`): same layout, byline block, related-posts block and closing CTA style.
- Add Article JSON-LD (author Makir Volcy, /makir-volcy; datePublished = deploy date) and FAQPage JSON-LD mirroring the FAQ word for word.
- Add to sitemap.xml with lastmod, to the top of `/insights`, to the homepage Latest cards (it becomes slot 1; the case study and gas flaring post fill slots 2 and 3), and to the related-posts pool.
- Link to it from the `/energy-partners` NGFCP block: anchor "what a stalled NGFCP flare gas award means".
- Featured image: reuse `/images/ogboinbiri-expansion-site.webp` with alt "NRG Bloom modular data center at the Ogboinbiri site, Bayelsa State, Nigeria". Do not use a photo of the minister.
- Commit separately as `P1: NGFCP post` so Makir can approve or drop it on its own.
- Run `nrg_check.py`; the new URL must pass title 50 to 60 and meta 130 to 155.

## Fact-check audit (nrg-fact-check, Oct 11, 2026; do not publish)

| # | Claim | Source | Verdict |
| --- | --- | --- | --- |
| 1 | About 20 of 42 NGFCP awardees made significant progress; roughly 22 (52.4%) had not | Guardian Nigeria, Oct 5, 2026, citing Minister Ekpo and a NUPRC report | CONFIRMED |
| 2 | Some investors met resistance gaining access to flare sites | Same article | CONFIRMED |
| 3 | Companies can develop capture technology or allow qualified investors to commercialise | Same article (paraphrased) | CONFIRMED |
| 4 | NUPRC evaluates each award one year after grant and can revoke | BusinessDay, Sep 2026; also in the Guardian article | CONFIRMED |
| 5 | Nigeria flared ~301.6 bcf, Jan 2025 to Jun 2026 | Guardian Nigeria, Oct 5, 2026 | CONFIRMED (single trade source; attributed inline) |
| 6 | Nine countries, Nigeria among them, = 83% of global flaring | World Bank 2026 tracker, as quoted by Down To Earth and Nairametrics | CONFIRMED |
| 7 | Barriers: pipelines, markets, capital, enforcement | World Bank 2026 tracker page | CONFIRMED |
| 8 | Live at Ogboinbiri since Feb 2025; 1 MW of 1.5 MW; 94% uptime; community PPA | nrgbloom.com case study; wording closed by Makir | ON SITE. Reference sheet lacks it (VERIFY WITH USER, Sign-off item 5) |
| 9 | First call to first power in under 90 days | nrgbloom.com /energy-partners | ON SITE (same note) |
| 10 | Generators run below full load with scheduled downtime | nrgbloom.com gas flaring post | ON SITE |
| 11 | NRG Bloom deploys, owns and operates compute; owner sells gas | nrgbloom.com /energy-partners | ON SITE |

Not used, on purpose: NUPRC's separate statement that 27 of 43 identified sites were awarded. It counts sites, not companies, and would confuse the 42-awardee figure. No claim that NRG Bloom holds or partners on an NGFCP award. No return, margin or CapEx language.

Reference sheet note: `nrg_bloom_verified_data.md` still lists the 2024 flaring figures (151 bcm, 389 Mt, ~75%) and old placeholder operating figures (47 MW, 8 sites, 99.7% uptime). Update it to the 2026 tracker and the live-site figures, or future fact-checks will push content back to wrong numbers.
