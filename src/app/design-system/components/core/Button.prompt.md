Solid-fill call to action; use when the reader takes one primary action on the view.

```jsx
<Button variant="primary" onClick={submit}>Read the spec</Button>
<Button variant="secondary">Secondary action</Button>
```

Variants: `primary` (Cobalt fill, white label) and `secondary` (Misty Blue fill, ink label) — no outline/ghost/text buttons exist in this system. `surface="dark"` swaps primary to a Baby Blue fill for use on ink sections (cobalt is never a button fill on black — 2.9:1). One primary button per view; secondary and links can repeat.
