# Pre-launch baseline: nrgbloom.com v4 upgrade

**Status: PRE-LAUNCH.** Every number on this page describes the site as it
stood BEFORE the v4 upgrade went live. Nothing here is a result of the
upgrade.

- v4 deployed: **2026-10-12** (merge commit `10f68a2`, "Website upgrade v4")
- Baseline captured: **2026-10-13**
- Captured by: Claude Code, read-only session against Search Console
- Comparison windows: re-run the same reports at 30, 60 and 90 days after
  2026-10-12, using the same settings recorded below.

---

## 1. Google Search Console

**Property:** `sc-domain:nrgbloom.com` (Domain property, covers www and
non-www, http and https). Owning account: makir@nrgbloom.com. Confirmed
present and collecting data.

**Settings used:** Performance report, Search type Web, all four metrics
enabled.

### Date range: read this before comparing anything

The requested window was **Sep 13 to Oct 10, 2026**. It could not be set.
The Search Console custom date dialog is malfunctioning in this browser
session: the End date field initialises to `1969-12-31`, the start field then
rejects any entry with "Date can't be after 1969-12-31", and the year
dropdown in the calendar picker renders as an empty panel. Four attempts,
including a clean page reload, all failed at the same point.

**The figures below therefore come from the "28 days" preset, which resolved
to Sep 14 to Oct 11, 2026** (x-axis read directly off the chart). That is the
same 28-day length, shifted one day later, and it is still entirely
pre-launch, since v4 deployed on Oct 12.

If the exact Sep 13 to Oct 10 window matters, set it by hand in the browser
and the table below can be re-pulled in a few minutes.

**Window actually measured: 2026-09-14 to 2026-10-11 (28 days).**

### Site totals

| Metric | Value |
|---|---|
| Total clicks | 21 |
| Total impressions | 205 |
| Average CTR | 10.2% |
| Average position | 17.8 |

Data freshness at capture: "Last update: 6.5 hours ago".

### Per page

All 16 pages that received any impression in the window. Pages in the brief's
baseline table that do not appear here recorded zero impressions.

| Page | Impressions | Clicks | CTR | Avg position |
|---|---|---|---|---|
| `/` | 69 | 14 | 20.3% | 2.7 |
| `/about-leadership` | 56 | 5 | 8.9% | 3.2 |
| `/blog/gas-flaring-explained-waste-to-energy` | 51 | 0 | 0% | 51.8 |
| `/blog/ai-infrastructure-stranded-energy-2026` | 42 | 0 | 0% | 14.0 |
| `/investor-relations` | 34 | 0 | 0% | 2.4 |
| `/energy-partners` | 33 | 0 | 0% | 2.8 |
| `/contact` | 31 | 1 | 3.2% | 2.3 |
| `/insights` | 20 | 1 | 5% | 2.5 |
| `/case-studies/bayelsa` | 20 | 1 | 5% | 5.8 |
| `/strategy` | 20 | 0 | 0% | 2.4 |
| `/partnership` | 19 | 0 | 0% | 2.3 |
| `/esg-impact` | 9 | 0 | 0% | 2.8 |
| `/blog/builders-not-theorists-operational-know-how` | 9 | 0 | 0% | 5.3 |
| `/terms-of-service` | 7 | 0 | 0% | 6.0 |
| `/gus-anyim` | 3 | 0 | 0% | 5.0 |
| `/blog/stranded-energy-bitcoin-waste-recovery-explained` | 2 | 0 | 0% | 26.5 |

Pages from the brief's table with **no impressions in this window**:
`/blog/ngfcp-flare-gas-award-review` (published with v4, so correctly absent).

**Do not add these rows up and expect the site total.** Page impressions sum
to 425 against a site total of 205, and page clicks sum to 22 against a site
total of 21. Search Console aggregates the property total by query and the
table by page, so the two are not meant to reconcile. Compare each row to
itself over time, never row-sums to totals.

### What is already ranking, and what is not

- `nrg bloom` alone: 10 of 21 clicks, 15 impressions, 66.7% CTR, position 1.0.
  Branded search is still most of the traffic.
- `stranded energy for ai`: 12 impressions, 0 clicks, position 17.2. The
  closest thing to a live non-branded commercial query.
- Every flaring query sits deep: `gas flaring` position 84.0, `sour gas
  flaring` 69.0, `flare gas` 88.0, `what is methane flaring` 88.5.
- `bitcoin mining with stranded energy`: 4 impressions, position 51.2 in this
  window. The brief records a #48 Semrush alert for the same term in Oct 2026,
  which is consistent.
- The commercial pages all hold strong average positions (`/energy-partners`
  2.8, `/investor-relations` 2.4, `/strategy` 2.4) on near-zero impressions,
  which is the signature of branded-only visibility, not of ranking for the
  Task 6 keywords.

### Indexing (Page indexing report, last updated 2026-10-08)

| State | Pages |
|---|---|
| **Indexed** | **16** |
| Not indexed | 55 |

Against the 24-URL sitemap target in the brief, that is **16 of 24 indexed**
at baseline.

Why the 55 are not indexed:

| Reason | Source | Pages |
|---|---|---|
| Page with redirect | Website | 21 |
| Excluded by 'noindex' tag | Website | 15 |
| Discovered, currently not indexed | Google systems | 8 |
| Crawled, currently not indexed | Google systems | 5 |
| Not found (404) | Website | 3 |
| Duplicate without user-selected canonical | Website | 2 |
| Alternate page with proper canonical tag | Website | 1 |

The 21 redirects and 15 noindex pages are mostly intended (the `_redirects`
work and the retired Bitcoin-era posts). The 3 x 404 and the 13 in the two
"currently not indexed" buckets are the ones worth watching at 30 days.

---

## 2. Netlify Forms: NOT CAPTURED

**Blocked.** `app.netlify.com` presented a login screen (Google, GitHub,
GitLab, Bitbucket, email, SSO). Session rules forbid entering credentials, so
nothing was read.

Still outstanding:

| Month | `partnership` | `investor-pack` | `contact` | Spam filtered |
|---|---|---|---|---|
| Jul 2026 | | | | |
| Aug 2026 | | | | |
| Sep 2026 | | | | |

Also still outstanding: whether email notifications on the `partnership` form
are on, and where they are sent.

---

## 3. Semrush Position Tracking: NOT CAPTURED

**Blocked.** `semrush.com/projects/` redirected to the logged-out marketing
homepage. Same rule applies, nothing was read.

Outstanding: current positions for all 33 Task 6 keywords across NG mobile,
NG desktop, US mobile, US desktop and CA desktop; per-keyword search volume
per location; and the plan's keyword and location limits, which must be
checked before anything is added.

The single Semrush data point carried in the brief: `bitcoin mining with
stranded energy` at **#48** on an Oct 2026 alert, NG mobile.

---

## 4. Google Analytics 4

**A property already exists.** No new property was created and none is
needed.

| Field | Value |
|---|---|
| Google account | makir@nrgbloom.com |
| Analytics account | "Google Ads Account", ID `320232253` |
| Property | `www.nrgbloom.com`, ID `448522480` |
| Measurement ID | **G-T54EQRG4B0** |
| Web data stream | `www.nrgbloom.com`, stream ID `8428377611` |
| Status at baseline | "No data received from your website yet" |

This account is separate from the Coldstorm Analytics account
(`389858158`, under volcy@coldstorm.org), which is correct and must stay that
way. NRG Bloom must never be added under the Coldstorm account, for the same
reason the Search Console property is not there.

**Analytics baseline is therefore zero by definition.** The site has never had
a tag installed, so there is no historical traffic, event or conversion data
to compare against. The 30-day target ("lead and CTA events recorded on every
form and owner CTA") is measured from first data, not against a prior period.

Mailto clicks likewise have no baseline.

---

## 5. Capture checklist for the 30, 60 and 90 day re-runs

- [ ] GSC Performance, Search type Web, 28 days, all four metrics, Pages tab.
      Record the window actually measured, not the one intended.
- [ ] GSC Page indexing: indexed count and the "why not indexed" breakdown.
- [ ] Netlify Forms: per-form monthly counts and spam filtered.
- [ ] Semrush Position Tracking: all 33 keywords, 5 location and device
      combinations.
- [ ] GA4: `generate_lead`, `contact_click`, `cta_click` counts, and whether
      the first two are marked as key events.
