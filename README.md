# Image Overlay Compare

Free online, **browser-only** tool to overlay and compare two images. Upload two pictures and instantly spot pixel-level differences with adjustable opacity, CSS blend modes (`difference`, `multiply`, `screen`, …), drag, resize/stretch and cursor-anchored zoom.

🔗 **Live**: https://andy7076.github.io/overlay_image/

## Features

- Overlay two images with adjustable opacity (0–100%)
- CSS blend modes (Difference, Multiply, Screen, Overlay, Darken, Lighten, Exclusion)
- Drag to reposition Image 2
- Resize / stretch via 8 handles (Shift-drag corner = preserve aspect ratio)
- Cursor-anchored scroll-wheel zoom
- Hide / show overlay toggle
- Fit-to-stage, 1:1 actual size, match-base-size quick actions
- Bilingual UI (English / 简体中文)
- **Privacy-first**: images never leave your browser

## Tech

Pure static site — no build step, no dependencies.

- `index.html` — markup + SEO meta + JSON-LD structured data
- `styles.css` — white, minimalist styling
- `script.js` — all interactions + i18n

## SEO

Ships with:

- Rich `<title>` / `meta description` / Open Graph / Twitter Card tags (bilingual, kept in sync with the UI language)
- `hreflang` alternates for `en` and `zh-CN`
- Canonical URL
- JSON-LD structured data (`WebApplication` + `FAQPage`)
- `robots.txt` + `sitemap.xml`
- Web App Manifest + SVG favicon
- Semantic `<header>`, `<main>`, `<aside>`, `<section>`, `<article>`, `<footer>` landmarks
- `<details>`-based FAQ for better indexability

## Local preview

```bash
open index.html
```

Or serve with any static server:

```bash
npx serve .
```

## License

MIT
