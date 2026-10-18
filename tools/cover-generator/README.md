# Post cover generator

Makes the branded text covers for blog posts, the same pattern as the NGFCP
post's "22 of 42 awards have stalled" thumbnail. That cover worked and had no
source file, so it could never be restyled or reproduced. This replaces it
with something repeatable.

Every cover is built around the single best number in the post. For a site
whose pitch is sourced figures, that is a stronger visual identity than stock
photography, and it is entirely ours.

## Use

```
python3 tools/cover-generator/make_cover.py \
  --slug grid-interconnection-queue-alternative \
  --kicker "Interconnection queue" \
  --headline "Over five years to connect" \
  --subtitle "And only 13% of requests ever get built" \
  --source "Berkeley Lab, Queued Up 2026 Edition" \
  --photo images/site-aerial-profile.webp
```

Drop `--photo` for a brand gradient background. Output lands in
`blog_images/<slug>-cover.jpg` at 1200x675, and the script prints the
`og:image` and `twitter:image` tags to paste into the post head.

| Flag | Notes |
|---|---|
| `--slug` | Required. Sets the filename. Use the post slug |
| `--headline` | Required. The number or claim. Keep it short, it auto-shrinks past 34 and 58 characters |
| `--kicker` | Small uppercase label above the rule |
| `--subtitle` | One supporting line |
| `--source` | Printed small at bottom left. Use it whenever the headline carries a figure |
| `--photo` | Repo-relative path. Pick from the shortlist in `docs/image-library/INDEX.md` |
| `--quality` | JPEG quality, default 86. The script steps it down automatically if the file exceeds 500KB |

## Rules

- **Source every number.** If the headline states a figure, `--source` is not
  optional. The cover is read by people who will check.
- **Backgrounds come from the shortlist** in `docs/image-library/INDEX.md`.
  That file also lists what must never be published: images with identifiable
  children and no consent record, `TON_*` files from the litigation period,
  third-party trademarks, and AI renders including the "250 MW Campus" image
  that implies capacity NRG Bloom does not have.
- **Rewrite the alt text.** The script prints a placeholder. Describe what the
  cover actually shows.
- **Check the result before shipping.** Open the JPEG. Automated checks do not
  catch a headline that wrapped badly or a logo sitting on a busy patch of
  photo.

## Design

1200x675, which is the standard `og:image` ratio and crops cleanly to the
site's 16:9 cards. Brand colours `#0f172a`, `#14489b` and accent `#5b9bf0`.
Type is Switzer for the headline and Inter Tight for everything else, loaded
from `fonts/` in this repo, so covers match the site exactly.

A gradient scrim keeps the left third readable over any background photo. The
headline has three size steps so long and short headlines both fill the box.

To restyle every future cover, edit `cover.html` and rerun. Covers already
published need regenerating individually.

## Requirements

Google Chrome at the standard macOS path, plus Python with Pillow. Both are
already present on the build machine.

Output is JPEG because no WebP encoder is installed here. If you want WebP,
`brew install webp` then convert with `cwebp -q 82`, or extend the script.

## Not served publicly

`_redirects` forces `/tools/*` to 404, the same as `/docs/*`. This directory
is in the repo but is not part of the site.
