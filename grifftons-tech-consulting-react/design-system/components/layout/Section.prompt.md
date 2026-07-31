The page is a stack of `<Section>`s. Nothing sits outside one.

```jsx
<Section tone="inverse" pad="large">
  <SectionHead label="Selected work" title="Three years, four products, one throughline."
    action={<Button variant="inverse">All work</Button>} />
</Section>
```

Coloured tones (`raised`, `sunken`, `inverse`, `accent`) are inset 32px and rounded 28px. Use at most two coloured bands per page — the pearl `page` tone should dominate.
