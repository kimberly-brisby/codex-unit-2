# Level 8 — Details & Summary

## Objective

Introduce `details` and `summary` for optional explanations and progressive disclosure.

## Benefits (SEO & accessibility)

- `details`/`summary` improve user experience by keeping optional content collapsed while allowing access, which helps content scannability.
- Use them thoughtfully: search engines may treat hidden content differently, so keep essential content visible while placing extras in `details`.

## Complete these tasks

- **Replace** the non-semantic container with a `details` element.
- **Add** a `summary` describing the hidden content as the first child.

### Quick example

```html
<details>
  <summary>Show more about accessibility</summary>
  <p>Additional explanation and tips...</p>
</details>
```

## Hints (Socratic)

- Is the content essential for understanding the page or optional extra help?

## Element notes

- `<details>`: collapsible container; can be opened with the `open` attribute.
- `<summary>`: visible label for `details`; should be the first child for accessibility.

## Usage tips

- Use `details` for optional clarifications and ensure `summary` clearly describes what will be revealed.
