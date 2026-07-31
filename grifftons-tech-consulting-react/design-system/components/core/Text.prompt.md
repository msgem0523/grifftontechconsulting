All type flows through this. Three roles only.

```jsx
<Text type="display" sizing="XL" as="h1">I design things people actually finish using.</Text>
<Text type="body" sizing="L" measure color="var(--text-secondary)">Fifteen years of…</Text>
<Text type="label" sizing="M" color="var(--text-muted)">Selected work</Text>
```

`display` runs 88 → 22px in Newsreader with heavy negative tracking. `body` runs 21 → 12px in Inter with generous leading (21/34, 18/30) — this is reading copy, not UI copy. `label` is uppercase Inter with wide tracking. Use `measure` on any paragraph longer than two lines.
