Modal overlay, ink scrim, white 2px-radius panel. Pass `actions` as one or more `<Button>`s.

```jsx
<Dialog open={open} title="Revoke operator key" onClose={close} actions={<><Button variant="secondary" onClick={close}>Cancel</Button><Button variant="primary" onClick={revoke}>Revoke</Button></>}>
  This key stops signing leaves immediately. This is a deliberate scope decision, not reversible.
</Dialog>
```
