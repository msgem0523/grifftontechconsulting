# Personal site kit — temechagriffin.com

Three screens, clickable: **Work** (home), **Case study**, **About**.

| File | What it holds |
|---|---|
| `index.html` | Entry point. Loads `styles.css` + `_ds_bundle.js`, then the JSX files in order. |
| `data.js` | Project and writing fixtures. |
| `chrome.jsx` | `SiteNav`, `SiteFooter` — thin wrappers over `Nav` and `Footer`. |
| `home.jsx` | Hero, filterable work grid, forest quote + stats band, writing index, newsletter. |
| `casestudy.jsx` | Long-form case study: hero, prose column, callout, stats band, quote, saffron CTA card. |
| `about.jsx` | Bio, three principles, capabilities, working contact form. |
| `app.jsx` | Route state. |

## Flow to click through
Work → filter chips → any project card → case study → *All work* back, or *Tell me about it* → About → fill the form → success state.

## What to copy from it
- The hero is **type only** — no image, no illustration. Display XXL at 88px capped near 15 characters per line, with a label kicker above and one long body paragraph below.
- **One coloured band per screen.** Home gets the forest quote/stats band; the case study gets a sunken stats band; About gets one sunken band. The pearl page carries everything else.
- Section rhythm is 96px, 160px around the hero. Do not tighten it.
- Work grid is two columns with a **64px row gap** — vertical air is what makes the grid read as editorial rather than as a product listing.
- Saffron appears exactly three ways: link underlines, the focus ring, and one accent CTA card per page.
