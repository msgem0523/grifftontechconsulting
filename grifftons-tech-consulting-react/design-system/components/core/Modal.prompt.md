`Modal` for contact/booking sheets; `Callout` for a tinted note inside a case study.

```jsx
<Modal title="Let's talk" onClose={close} footer={<Button fullWidth>Send</Button>}>
  <Input label="Email" />
</Modal>

<Callout tone="forest" label="Outcome">Support tickets dropped 41% in the first quarter.</Callout>
```
