#!/usr/bin/env python3
"""Fix canonical URLs to match actual page filenames (clean URLs)."""
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://srishankaracancerhospital.org"
SKIP_DIRS = {"PHPMailer", "SSCRC-Career", "tools", "node_modules", ".git"}
fixed = 0
added = 0

for dirpath, dirnames, filenames in os.walk(ROOT):
    dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
    for fname in filenames:
        if not fname.endswith(".html"):
            continue
        rel = os.path.relpath(os.path.join(dirpath, fname), ROOT).replace("\\", "/")
        folder = os.path.dirname(rel).replace("\\", "/")
        slug = fname[:-5]
        if slug == "index":
            url = f"{BASE}/{folder}" if folder else f"{BASE}/"
        else:
            url = f"{BASE}/{folder}/{slug}" if folder else f"{BASE}/{slug}"
        path = os.path.join(dirpath, fname)
        with open(path, "r", encoding="utf-8", errors="replace") as fh:
            content = fh.read()
        original = content
        canonical_tag = f'<link rel="canonical" href="{url}" />'
        if 'rel="canonical"' in content:
            content, n = re.subn(
                r'<link\s+rel="canonical"\s+href="[^"]*"\s*/?>',
                canonical_tag,
                content,
                count=1,
            )
            if n and content != original:
                fixed += 1
        else:
            m = re.search(r"(<head>\s*\n(?:\s*<meta[^>]*>\s*\n){1,4})", content)
            if m:
                content = content[: m.end()] + f"    {canonical_tag}\n" + content[m.end() :]
                added += 1
        if content != original:
            with open(path, "w", encoding="utf-8", newline="") as fh:
                fh.write(content)

print(f"Updated {fixed} canonical tags, added {added} new ones")
