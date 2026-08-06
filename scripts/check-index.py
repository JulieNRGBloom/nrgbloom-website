#!/usr/bin/env python3
"""Index-hygiene check for nrgbloom.com.

Enforces the four-state index policy in CLAUDE.md: every HTML file is
exactly one of indexed, noindexed, or an error page, and the sitemap
agrees with what is actually on disk.

Run from the repo root before every deploy:

    python3 scripts/check-index.py

Exit code 0 means the index is clean. Non-zero means something shipped by
accident. Filed 2026-08-06 with the founder's deliberate-index decision.
"""

import glob
import pathlib
import re
import sys

BASE = "https://nrgbloom.com"
LOC_RE = re.compile(r"<loc>\s*([^<\s]+)\s*</loc>")
ERROR_PAGES = {"/401", "/404"}
NOINDEX_RE = re.compile(r'name="robots"\s+content="noindex', re.IGNORECASE)


def url_for(path: str) -> str:
    return "/" if path == "index.html" else "/" + path[:-5]


def main() -> int:
    root = pathlib.Path(__file__).resolve().parent.parent

    # Read <loc> values with a regex rather than an XML parser. The stdlib
    # parsers are vulnerable to XXE and entity-expansion attacks, and this
    # file needs no dependencies to run in CI or on a fresh machine.
    sitemap_text = (root / "sitemap.xml").read_text()
    sitemap = {(u.replace(BASE, "") or "/") for u in LOC_RE.findall(sitemap_text)}
    if not sitemap:
        print("FAIL\n  - sitemap.xml contains no <loc> entries")
        return 1

    files = {}
    for pattern in ("*.html", "blog/*.html", "case-studies/*.html", "template/*.html"):
        for f in glob.glob(str(root / pattern)):
            rel = str(pathlib.Path(f).relative_to(root))
            files[url_for(rel)] = bool(NOINDEX_RE.search(pathlib.Path(f).read_text()))

    errors = []

    # Invariant 1: nothing is both in the sitemap and noindexed.
    for u in sorted(sitemap):
        if files.get(u):
            errors.append(f"in sitemap AND noindexed: {u}")

    # Invariant 2: nothing indexable is missing from the sitemap.
    for u, noindexed in sorted(files.items()):
        if not noindexed and u not in sitemap and u not in ERROR_PAGES:
            errors.append(f"indexable but not in sitemap: {u}")

    # Invariant 3: every sitemap entry has a file behind it.
    for u in sorted(sitemap):
        if u not in files:
            errors.append(f"in sitemap but no file on disk: {u}")

    # Invariant 4: robots.txt must not Disallow, which hides 301s from Google.
    robots = (root / "robots.txt").read_text()
    for line in robots.splitlines():
        if (
            line.strip().lower().startswith("disallow:")
            and line.split(":", 1)[1].strip()
        ):
            errors.append(
                f"robots.txt Disallow hides redirects from Google: {line.strip()}"
            )

    indexed = len(sitemap)
    noindexed = sum(files.values())
    total = len(files)

    print(f"  indexed     {indexed}")
    print(f"  noindexed   {noindexed}")
    print(f"  error pages {len(ERROR_PAGES)}")
    print("  ---------------")
    print(
        f"  {indexed} + {noindexed} + {len(ERROR_PAGES)} = {indexed + noindexed + len(ERROR_PAGES)}   files on disk: {total}"
    )
    print()

    if indexed + noindexed + len(ERROR_PAGES) != total:
        errors.append("counts do not reconcile against files on disk")

    if errors:
        print("FAIL")
        for e in errors:
            print(f"  - {e}")
        return 1

    print("PASS: index is clean")
    return 0


if __name__ == "__main__":
    sys.exit(main())
