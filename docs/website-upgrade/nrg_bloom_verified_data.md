# NRG Bloom verified data: fact-check reference sheet

**DRAFT for Makir's review. Not yet uploaded to the nrg-fact-check skill.**

Drafted 2026-10-13 to replace the version currently loaded in the skill. Two
classes of change:

1. **Flaring figures.** The old sheet carried the 2024 World Bank numbers
   (151 bcm, ~$63bn, ~389 Mt CO2e, "highest since 2007", top nine ≈ 75%).
   The site stopped using those on 2026-10-12. If the skill keeps them, it
   will revert site copy to retired numbers on the next fact-check pass.
2. **Operating figures.** The old sheet carried placeholders that do not
   describe this company: 47 MW, 8 sites, 99.7% uptime and a Permian Basin
   case study. Those are removed. The real figures are below, every one of
   them flagged **on site, confirm with Makir**, because they are published
   today but their as-of date needs a founder check before the next cycle.

Authority order: `nrg-bloom/PUBLIC-NARRATIVE.md` wins over this sheet, and
this sheet wins over anything else.

---

## 1. Operating figures

Source for all rows: live nrgbloom.com and `PUBLIC-NARRATIVE.md` (canonical,
established 2026-08-06). **Status for every row: on site, confirm with
Makir.**

| Fact | Value | Note |
|---|---|---|
| First deployment | Ogboinbiri, Bayelsa State, Nigeria | |
| Operational since | February 2025 | Never a hardcoded month count |
| Energized capacity | 1 MW | |
| Developed capacity | 1.5 MW | |
| Pipeline | 5 MW under development | "pipeline", never "operational" |
| Uptime | 94% | |
| Energy cost | $0.03/kWh | Community-based power purchase agreement |
| Carbon mitigation | 300+ tonnes CO2e | Not third-party verified |
| Local jobs | 5 at Ogboinbiri | |
| PUE | Below 1.2 | TARGET, never a result |
| Incorporated | Quebec, Canada | |
| Founded | 2023 | Founder-confirmed 2026-08-06 |

### Retired placeholders: never reintroduce

- 47 MW of anything
- 8 sites
- 99.7% uptime
- Any Permian Basin case study or US site
- "1.5 MW operational" (it is 1 MW energized, 1.5 MW developed)
- "95% uptime" (it is 94%)
- "$0.02/kWh" or "$0.02-$0.032/kWh" (it is $0.03/kWh)
- "Carbon-negative"

### Open question for Makir

The published figures carry an "as of August 2026" framing. Two things need a
founder answer before the next monthly freshness pass:

1. Are 1 MW, 94%, $0.03/kWh and 300+ tonnes still current as of October 2026?
2. The live `/case-studies/bayelsa` page says the site has run "continuously
   since February 2025", present tense. That wording was explicitly left
   untouched by the v4 upgrade and is still an open item from 2026-09-08.
   **Status 2026-10-13:** the founder deliberately deferred this pending a
   decision with Julie Peeters. The live wording is unchanged by design.
   Until they decide, the fact-check skill must not assert present-tense
   operation or current control of Ogboinbiri in either direction, and must
   not "correct" the live page toward either framing.

---

## 2. Carbon methodology

- Correct: **UNFCCC CDM methodology AM0009**, recovery and utilization of gas
  from oil fields that would otherwise be flared or vented.
- Wrong, and was published in error until 2026-08-06: Verra VCS AM0009, and
  Verra VCS VM0029 (which is a forest fire management methodology, unrelated
  to gas).
- Required pairing, always: "Aligned with UNFCCC CDM methodology AM0009. No
  credits have been issued and the mitigation figure is not third-party
  verified."
- Carbon credits are a **potential future** revenue stream. Never a current
  one.

---

## 3. Global gas flaring (2026 World Bank tracker)

Primary source for every row in this section, and the only link to use when
citing on the site:

> World Bank, **2026 Global Gas Flaring Tracker**, published June 23, 2026.
> https://www.worldbank.org/en/programs/gasflaringreduction/publication/2026-global-gas-flaring-tracker-report

The 2026 report uses an improved satellite method that also revised 2024
upward, to 157 bcm. **"151 bcm" must not appear anywhere**, and 167 bcm must
never be paired with the retired 151 bcm figure.

| Figure | Verified value (2025 data) | Replaces | Source status |
|---|---|---|---|
| Volume flared | **167 bcm**, the third straight annual rise | 151 bcm in 2024 | On the World Bank report page |
| Historic high | **Highest since 2019** | "Highest since 2007" | On the World Bank report page |
| Value wasted | **~$54 billion** of gas | ~$63 billion of energy | On the World Bank report page |
| Scale comparison | 2025 flaring **matches Africa's annual gas consumption** | unchanged | On the World Bank report page |
| Emissions | **~429 Mt CO2e**, including **~50 Mt** from unburned methane | ~389 Mt CO2e, 46 Mt methane | Report as quoted by two independent outlets |
| Concentration | Top nine countries, **Nigeria among them, = 83%** of flaring while producing **46%** of oil | top nine ≈ 75% | Report as quoted by two independent outlets |
| Nigeria trend | **Nigeria's flaring rose 8% in 2025**, in step with an 8% rise in oil output | (new row) | Report as quoted by two independent outlets |
| 2024 Nigeria | Nigeria flaring rose 12% in 2024 | keep, cite to the **2025** report | Unchanged |

Secondary outlets, for verification only. Cite the World Bank report itself
on the site, not these:

- Energy Connects, June 2026:
  https://www.energyconnects.com/opinion/features/2026/june/global-gas-flaring-rising-twice-as-fast-as-oil-production-world-bank-says/
- Down To Earth:
  https://www.downtoearth.org.in/energy/nine-countries-responsible-for-83-of-global-gas-flaring-in-2025-says-world-bank-report
- Nairametrics, June 23, 2026:
  https://nairametrics.com/2026/06/23/nigeria-8-others-account-for-83-of-global-gas-flaring-world-bank/

Usage rule: use each figure **once per page area**. Do not repeat 167 bcm in
both a TL;DR and the body of the same section.

---

## 4. Nigeria regulatory and market context

| Fact | Value | Source |
|---|---|---|
| NGFCP awardee progress | About **20 of 42** awardees had made significant progress, leaving roughly **22 (52.4%)** short, per a NUPRC report cited by the Minister of State for Petroleum Resources (Gas), Ekperikpe Ekpo | [Guardian Nigeria, Oct 5, 2026](https://guardian.ng/news/gas-commercialisation-falters-as-22-of-42-awardees-struggle-to-develop-flare-sites/) |
| NGFCP review risk | NUPRC evaluates each award one year after grant and has warned it can revoke awards without progress | [BusinessDay, Sep 2026](https://businessday.ng/energy/article/nuprc-to-revoke-gas-flare-permits-over-inaction/) |
| Nigeria flared volume | About **301.6 billion cubic feet** flared between January 2025 and June 2026, per NUPRC data | Guardian Nigeria, Oct 5, 2026 (as above) |
| Nigeria flaring rate | **7.48% in August 2026**, the highest since October 2025, per NUPRC | [Nairametrics, Sep 17, 2026](https://nairametrics.com/2026/09/17/nigerias-gas-flaring-hits-7-48-in-august-highest-since-october-2025/) |

**Hard guardrail:** never state or imply that NRG Bloom is a qualified or
approved NGFCP investor.

---

## 5. Third-party market context

Market context only. Name the source every time. Never frame any of this as
NRG Bloom economics, returns or valuation.

| Fact | Value | Source |
|---|---|---|
| Miner valuation split | Miners with AI hosting contracts traded at **12.3x** enterprise value versus **5.9x** for pure-play miners | [CoinDesk, Aug 18, 2026](https://www.coindesk.com/business/2026/08/18/bitcoin-miners-ai-pivot-pays-off-but-mining-could-revive-with-one-twist) |
| Hashprice | Fell to about **$31.80 per PH/s** | CoinDesk, Aug 18, 2026 (as above) |
| US behind-the-meter gas | Roughly **101 GW** of behind-the-meter gas generation announced for US data centers | [RBC Capital Markets](https://www.rbccm.com/en/insights/2026/05/natural-gas-powers-the-data-center-boom) |

---

## 6. Publication guardrails

Never publish, on any surface including JSON-LD, `llms.txt`, `llms-full.txt`
and `ai-agent.json`:

- Any counterparty, client, partner or prospect name, including attributed
  quotes, without that party's written consent
- Capital plans, raise ladders, amounts sought
- Revenue projections and their assumptions
- Commercial terms: floor payments, revenue-share percentages, carbon credit
  splits
- Claims about private competitors' numbers, unless they published the figure
  themselves and it is cited
- NEXUS, Pathfinder, or any patent-pending or IP claim (founder decision,
  2026-08-06)
- Return, margin, payback, breakeven or valuation language for NRG Bloom
- Kenya or Colombia as an NRG market, on any surface, until a site is signed.
  That includes page copy, schema `areaServed`, the llms files,
  `ai-agent.json` and Semrush tracking locations. **Resolved 2026-10-13:** the
  founder confirmed Nigeria only in public, and `PUBLIC-NARRATIVE.md` was
  corrected to match the shipped site. Kenya and Colombia stay real internal
  pipeline and are named normally in internal files. The boundary is
  publication.

Style rules that the fact-check pass should also enforce: no em dashes, no en
dashes outside genuine numeric ranges, no hype words, and sentences under 25
words in new copy.

---

## 7. Changelog

| Date | Change |
|---|---|
| 2026-10-13 | Drafted. Flaring figures moved to the 2026 World Bank tracker. Placeholder operating figures (47 MW, 8 sites, 99.7% uptime, Permian case study) removed and replaced with the live-site figures. Nigeria regulatory and market context sections added. |
| 2026-10-13 | Founder resolved the Kenya and Colombia contradiction: Nigeria only in public, both stay internal pipeline. `PUBLIC-NARRATIVE.md` corrected to match. Ogboinbiri present-tense wording deliberately deferred to Makir and Julie; the skill must not move it in either direction. |
