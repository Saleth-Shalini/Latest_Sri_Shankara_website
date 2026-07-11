#!/usr/bin/env python3
"""Generate sitemap.xml from HTML pages in the site."""
import os
from datetime import date, datetime
from xml.sax.saxutils import escape

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://srishankaracancerhospital.org"
SKIP_DIRS = {"PHPMailer", "SSCRC-Career", "tools", "node_modules", ".git", "headerbutton/uploads"}
SKIP_FILES = {"404.html", "demo.html"}
urls = []

for dirpath, dirnames, filenames in os.walk(ROOT):
    dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
    for fname in sorted(filenames):
        if not fname.endswith(".html") or fname in SKIP_FILES:
            continue
        full = os.path.join(dirpath, fname)
        rel = os.path.relpath(full, ROOT).replace("\\", "/")
        folder = os.path.dirname(rel).replace("\\", "/")
        slug = fname[:-5]
        if slug == "index":
            loc = f"{BASE}/{folder}" if folder else f"{BASE}/"
        else:
            loc = f"{BASE}/{folder}/{slug}" if folder else f"{BASE}/{slug}"
        priority = "1.0" if loc == f"{BASE}/" else "0.8"
        if folder.startswith("Doctors/Dr-") or folder.startswith("Doctors/Ms-") or folder.startswith("Doctors/Mrs-"):
            priority = "0.5"
        lastmod = datetime.fromtimestamp(os.path.getmtime(full)).strftime("%Y-%m-%d")
        urls.append((loc, priority, lastmod))

urls = sorted(set(urls), key=lambda x: x[0])
lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
]
for loc, priority, lastmod in urls:
    lines.append("  <url>")
    lines.append(f"    <loc>{escape(loc)}</loc>")
    lines.append(f"    <lastmod>{lastmod}</lastmod>")
    lines.append(f"    <changefreq>monthly</changefreq>")
    lines.append(f"    <priority>{priority}</priority>")
    lines.append("  </url>")
lines.append("</urlset>")

out = os.path.join(ROOT, "sitemap.xml")
with open(out, "w", encoding="utf-8", newline="\n") as fh:
    fh.write("\n".join(lines) + "\n")
print(f"Wrote {len(urls)} URLs to sitemap.xml")
