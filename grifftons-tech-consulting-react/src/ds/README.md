# Temecha Griffin — Design System

The personal brand system for **Temecha Griffin**, designer and writer. It exists so that anything
made under this name — a portfolio page, a proposal, a one-pager, a deck, a newsletter — comes out
looking like it came from the same person.

There is no product behind this brand and no company. The surfaces are:

| Surface | What it is | Recreated in |
|---|---|---|
| **Personal site** | Portfolio home, long-form case study, about + contact. | `ui_kits/site/` |
| Resume / one-pagers | Not built yet — say the word and I'll add a printable kit. | — |
| Decks & proposals | Not built yet. | — |

## Provenance
This system was derived from an earlier system in this same project. Only the palette hex values and
a warm-editorial posture were carried across; the name, identity, typeface, radii, spacing, voice,
components and screens were all built new for this brand.

**Two substitutions you should know about.** The previous system used *Heldane Display*, a
commercially licensed Klim Type Foundry face served from a third party's CDN. That could not carry
over to a personal brand, so the display face is now **Newsreader** — a free Google Fonts serif in
the same warm, high-contrast, slightly bookish register. **Inter** stays as the body face. If you
own a licence for a serif you'd rather use, hand me the files and I'll swap it in one place
(`tokens/fonts.css`).

---

## Index

**Root**
- `styles.css` — the single entry point. `@import` list only.
- `thumbnail.html` — the homepage tile.
- `SKILL.md` — Agent Skills wrapper.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radii.css`,
`elevation.css`, `motion.css`, `semantic.css`, `base.css`.

**`assets/`** — currently empty. **There is no logo file, on purpose** (see Identity below). Drop
a headshot in here and point `Avatar src` at it.

**Components** — `components/<group>/<Name>.{jsx,d.ts,prompt.md}`
- `core/` — **Wordmark**, **Text**, **Button**, **Modal**, **Callout**
- `layout/` — **Nav**, **Section**, **SectionHead**, **Footer**
- `content/` — **ProjectCard**, **Card**, **Chip**, **Stat**, **Avatar**, **Quote**
- `forms/` — **Input**, **Subscribe**

**UI kits**
- `ui_kits/site/` — the personal site: work, case study, about.

**`guidelines/`** — 18 specimen cards across Colors, Type, Spacing and Brand.

---

## Identity

**There is no logo mark.** The identity is the name, set in Newsreader Medium with tight optical
tracking. That's the whole thing. It's a deliberate choice: a personal brand that invents a symbol
usually ends up looking like a small agency. Where a mark would normally go, set the name.

- `<Wordmark />` renders it. `variant="initials"` gives you **TG** for avatars and favicons.
- `lockup` stacks an uppercase Inter role line beneath at 34% of the name size.
- Never letterspace the name wide, never set it in Inter, never enclose it in a box, circle or badge.
- The **TG** initials on a bright tint inside a circle (`<Avatar>`) is the closest thing to a mark —
  same face, same tracking.

---

## CONTENT FUNDAMENTALS

**The vibe.** Warm and plain-spoken. Competent without being formal. The voice of someone who has
done this a while, is comfortable saying what went wrong, and is not selling you anything harder
than a conversation.

**Person.** **First person, always.** "I design things people actually finish using." "I ask a lot
of questions first." "I stay until it ships." Never third person, never "we" — there is no we. The
reader is **you**, addressed directly and rarely: this brand talks about the work, not at the
visitor.

**Casing.** Sentence case for everything — headlines, buttons, nav, card titles. The only uppercase
is the micro label style (11–13px, wide tracking) used for kickers like `SELECTED WORK` and
`NORTHWIND HEALTH · 2025`. No Title Case anywhere.

**Headline shape.** A complete sentence with a full stop, not a fragment. "I design things people
actually finish using." "Three years, four products, one throughline." "I'm Temecha. I ask a lot of
questions first." The full stop is load-bearing — it makes the line read as a statement rather than
a slogan.

**Specificity over adjectives.** Never "innovative solutions" — say "cut the first-visit form from
38 fields to 9." Every claim in this system carries a number or a name. If a sentence would survive
being pasted onto a different designer's site, rewrite it.

**Admit the mess.** The brand's most distinctive move is naming the difficulty. "Mostly I show up
when a team knows something is wrong but can't quite name it yet." "One short letter a month about
design, process, and the things that went wrong on the way to shipping." Never claim a straight
line from brief to launch.

**Buttons** are 2–4 words, verb-first, sentence case: *Start a project · Read a case study · Tell me
about it · Send it · Subscribe*. Never "Learn more", never "Submit", never "Get started".

**The ellipsis and the em dash** do a lot of work here — they're how the writing sounds like
speech. Use them; don't sand them out.

**Errors** are plain and take the blame off the reader: "That address doesn't look right."

**Emoji: none.** Not in copy, not in UI, not in the newsletter. The saffron marker is the only
device this brand uses for emphasis.

**Numbers.** Real and specific. Percentages with the symbol ("41%"), multipliers with the × glyph
("2.1×"), durations spelled out ("four months").

---

## VISUAL FOUNDATIONS

**Ground.** Warm pearl `#F7F4EE` — paper, not grey. It is the default page and should be the
majority of every screen. `#FCF9F5` for a barely-sunken band, white for raised cards.

**Colour vibe.** Deep forest `#064C37` is the primary: the footer, one section band per page, the
primary button. Saffron `#F2D63F` is the single accent and it is used **three ways only** — link
underlines, the focus ring, and one accent CTA per page. The bright set (coral, berry, sky, moss,
indigo, blush) exists for category tints and card grounds; use the **pale tint**, never the
saturated value as a large fill. **No gradients.** Warm, bright, high-key — the whole palette leans
sunny, and the deep green is what keeps it from going saccharine.

**Type.** Two families. **Newsreader** — a warm high-contrast serif — for every heading, every big
number, and the wordmark, running 88 → 22px with heavy negative tracking (−2.5px at 88, −0.3px at
22) and tight leading. **Inter** for body and labels, on deliberately generous leading (21/34,
18/30) because this is reading copy, not UI copy. Newsreader *italic* appears in exactly one place:
pull quotes. Prose is capped at 66ch.

**The saffron marker.** The signature detail. Links carry `inset 0 -2px 0` saffron at rest and swell
to `inset 0 -0.7em 0` on hover — a highlighter sweeping across the word. The active nav item uses the
same 2px underline. Hovered project titles get the same sweep. `::selection` is saffron too. It is
the one interaction flourish in the system and it appears everywhere, which is what makes it read as
identity rather than decoration.

**Corners.** Rounder than a product system on purpose — this is the "soft and playful" register.
Cards **28px**, media **20px**, inputs **14px**, buttons and chips **fully round**. Nothing is ever
sharper than 8px, and nothing is ever a square corner.

**Cards.** White or pale-tint fill, 28px radius, 32px padding, one soft low-opacity shadow. **Never a
border and a shadow together** — outline cards get a hairline `1px solid #ECECEC` and no shadow.
No left-accent stripes, no coloured borders.

**Shadows.** Three, all soft and warm-black: `0 4px 16px rgba(7,6,7,.06)` at rest, `0 10px 30px
rgba(7,6,7,.07)` for cards, `0 20px 50px rgba(7,6,7,.12)` when lifted. No inner shadows.

**Spacing.** Generous is the point. Sections are 96px vertically, 160px around a hero. The work grid
uses a **64px row gap** — the vertical air is what makes it read as editorial rather than as a
product listing. Content caps: 680px prose, 1080px content, 1360px wide. Page gutter 32px.

**Layout rules.** Coloured section bands are **inset 32px and 28px-rounded** so the pearl page shows
as a margin around them; the `page` tone runs edge to edge. **At most two coloured bands per
screen.** The nav is sticky; nothing else is fixed except the modal scrim.

**Hover.** Buttons rise **1px** and darken. Cards rise 3px and deepen their shadow. Project media
rises 4px and its image scales 1.03 over 0.5s. Links swell their saffron underline. That's the whole
vocabulary.

**Press.** No shrink, no ripple. The pressed state is the hover state held.

**Disabled.** `#EFEFEF` fill, `#89818A` text, `pointer-events: none`. Never reduced opacity.

**Focus.** A forest border plus a 3px `--saffron-light` ring. Visible, warm, and unmistakably part of
the brand — never the browser default.

**Motion.** Everything is **0.25s** on `cubic-bezier(.22,1,.36,1)` — a soft out-curve that settles
rather than snaps. Entrances fade up 12px. **No bounce, no spring, no overshoot, no looping
animation anywhere.**

**Transparency & blur.** Alpha only, as a token set (`--white-70/50/20`, `--black-60/30/15/08`), for
type and dividers on the forest ground and for the modal scrim. **No blur, no frosted panels.**

**Imagery.** The hero is **type only** — no illustration, no photograph, no abstract shape. Project
media sits in 20px-rounded frames on a pale brand tint, which doubles as the loading colour. A
headshot appears once, on About, as a large rounded portrait. No stock photography, no icon
illustrations, no decorative SVG.

---

## ICONOGRAPHY

**This system is almost entirely iconless, and that is a decision.** Meaning is carried by type,
colour and space; adding an icon set would dilute the editorial register.

The only glyphs in use:

1. **Typographic arrows** — `→` as the `iconRight` on buttons and `←` on back links. Set in Inter,
   inherited colour, nudging 3px right on hover. These are characters, not artwork.
2. **The TG initials** in `<Avatar>` — Newsreader Medium on a bright tint, the closest thing to a mark.
3. **Nothing else.** No icon font, no sprite, no SVG icon set, no emoji, no unicode symbols beyond
   the arrows, the middot separator (`·`), the multiplication sign in stats (`2.1×`) and the ellipsis.

**If you genuinely need an icon set** — a social row, a resume, a dense dashboard — use **Lucide**
from CDN at `strokeWidth={1.6}`, 24px, round caps, in `currentColor`. That weight sits closest to
Inter's stroke and won't fight the serif. **Flag it as an addition wherever you use it** and keep it
to one surface; it is not part of the core brand.

---

## Using this system

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Text, Section, ProjectCard } = window.FableDesignSystem_270490;
</script>
```

*(`FableDesignSystem_270490` is a stable generated identifier assigned when the project was created. It is not editable and does not change when the project is renamed — treat it as an opaque key, not a brand name.)*

Rules of thumb: reach for a semantic token (`--surface-page`, `--text-muted`, `--action-bg`) before a
raw one; set every piece of type through `<Text>`; wrap every band in a `<Section>`; write in first
person with a number in it; and if you're about to add a gradient, a bounce, an emoji or a logo
symbol — don't.
