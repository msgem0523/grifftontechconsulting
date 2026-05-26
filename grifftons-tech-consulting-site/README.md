# Griffton's Tech Consulting — Static Marketing Site

A multi-page static website for **Griffton's Tech Consulting**, a freelance web development and tech support service for small businesses. Built with plain HTML, CSS, and vanilla JavaScript — no frameworks or build tools required.

---

## Overview

This site serves as the public-facing marketing and portfolio presence for Griffton's Tech Consulting. It highlights services, showcases website templates, and provides pricing and contact information.

---

## Pages

| File | Description |
|---|---|
| `index.html` | Main homepage — hero, services overview, and contact section |
| `business-websites.html` | Detail page for business website packages |
| `landing-pages.html` | Detail page for landing page services |
| `qr-pages.html` | Detail page for QR-powered link/landing pages |
| `tech-support.html` | Detail page for tech support offerings |
| `prices.html` | Pricing / "Work With Me" page (Griffton Landing Studio) |

---

## Project Structure

```
grifftons-tech-consulting-site/
├── index.html
├── business-websites.html
├── landing-pages.html
├── qr-pages.html
├── tech-support.html
├── prices.html
├── assets/              # Images and media
├── css/
│   ├── base.css         # Global layout, typography, utility styles
│   ├── brand.css        # Brand colors, nav, header/footer
│   ├── templates.css    # Template showcase styles
│   └── templates/
│       ├── boldBeautiful.css
│       ├── hybrid.css
│       ├── pricing.css
│       └── profQueen.css
├── js/
│   └── main.js          # Vanilla JS (nav toggle, interactions)
└── templates/           # Standalone HTML demos for client templates
    ├── boldBeautifulTemplate.html
    ├── hybridTemplate.html
    └── profQueenTemplate.html
```

---

## Getting Started

No build step is needed. Open any HTML file directly in a browser, or serve the folder with any static file server:

```bash
# Using the VS Code Live Server extension (recommended)
# Right-click index.html → "Open with Live Server"

# Or with npx
npx serve .

# Or with Python
python -m http.server 8080
```

---

## Services Covered

- **Business Websites** — Clean, responsive sites built for trust and conversions
- **Landing Pages** — High-impact single-page sites for campaigns and promotions
- **QR Pages** — Link-in-bio style pages powered by QR codes
- **Tech Support** — Fixes, updates, and general technical assistance

---

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript

---

## Notes

- Mobile-first responsive design throughout
- No external CSS frameworks or JS libraries
- Template demos (`/templates/`) are standalone files intended for client previews
