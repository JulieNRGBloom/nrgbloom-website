#!/usr/bin/env python3
"""Render a branded NRG Bloom post cover.

Builds a 1200x675 cover from the HTML template next to this file, using
headless Chrome, then writes an optimised JPEG into blog_images/.

Usage:
  python3 tools/cover-generator/make_cover.py \
      --slug grid-interconnection-queue-alternative \
      --kicker "Interconnection queue" \
      --headline "Over five years to connect" \
      --subtitle "And only 13% of requests ever get built" \
      --source "Berkeley Lab, Queued Up 2026" \
      --photo images/site-aerial-profile.webp

Omit --photo for a brand gradient background.

The alt text it prints is a starting point. Rewrite it to describe the
cover, and never leave it empty on an indexable page.
"""

import argparse
import os
import shutil
import subprocess
import sys
import tempfile
from urllib.parse import urlencode

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
W, H = 1200, 675
MAX_KB = 500


def die(msg):
    sys.exit(f"make_cover: {msg}")


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--slug", required=True, help="post slug, used for the filename")
    p.add_argument("--kicker", default="", help="small label above the headline")
    p.add_argument(
        "--headline",
        required=True,
        help="the one number or claim the cover is built on",
    )
    p.add_argument("--subtitle", default="", help="one supporting line")
    p.add_argument("--source", default="", help="source credit, printed small")
    p.add_argument(
        "--photo", default="", help="repo-relative background image, optional"
    )
    p.add_argument("--quality", type=int, default=86)
    p.add_argument("--outdir", default="blog_images")
    args = p.parse_args()

    if not os.path.exists(CHROME):
        die(f"Chrome not found at {CHROME}")

    photo_url = ""
    if args.photo:
        photo_path = os.path.join(ROOT, args.photo)
        if not os.path.exists(photo_path):
            die(f"background image not found: {args.photo}")
        # relative to the template's own directory
        photo_url = os.path.relpath(photo_path, HERE)

    params = urlencode(
        {
            "kicker": args.kicker,
            "headline": args.headline,
            "subtitle": args.subtitle,
            "source": args.source,
            "photo": photo_url,
        }
    )
    url = "file://" + os.path.join(HERE, "cover.html") + "?" + params

    tmp = tempfile.mkdtemp(prefix="nrgcover-")
    try:
        subprocess.run(
            [
                CHROME,
                "--headless",
                "--disable-gpu",
                "--hide-scrollbars",
                "--allow-file-access-from-files",
                f"--screenshot={os.path.join(tmp, 'shot.png')}",
                f"--window-size={W},{H}",
                "--virtual-time-budget=4000",
                url,
            ],
            check=True,
            capture_output=True,
            timeout=120,
        )
        shot = os.path.join(tmp, "shot.png")
        if not os.path.exists(shot):
            die("Chrome produced no screenshot")

        from PIL import Image

        im = Image.open(shot).convert("RGB")
        if im.size != (W, H):
            im = im.resize((W, H), Image.LANCZOS)

        outdir = os.path.join(ROOT, args.outdir)
        os.makedirs(outdir, exist_ok=True)
        out = os.path.join(outdir, f"{args.slug}-cover.jpg")

        q = args.quality
        while True:
            im.save(out, "JPEG", quality=q, optimize=True, progressive=True)
            kb = os.path.getsize(out) / 1024
            if kb <= MAX_KB or q <= 60:
                break
            q -= 6

        rel = os.path.relpath(out, ROOT)
        print(f"wrote {rel}  {W}x{H}  {kb:.0f}KB  q={q}")
        if kb > MAX_KB:
            print(f"WARNING: still over {MAX_KB}KB, shrink the background photo")
        print()
        print("Paste into the post head:")
        print(f'  <meta content="https://nrgbloom.com/{rel}" property="og:image">')
        print(f'  <meta content="https://nrgbloom.com/{rel}" property="twitter:image">')
        print("Card and hero:")
        print(f'  src="{rel}" alt="REWRITE THIS: describe what the cover shows"')
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    main()
