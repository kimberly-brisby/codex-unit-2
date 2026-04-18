# Level 4 — Lists

## Objective

Use `ul`/`ol`/`li` for related items and proper list semantics.

## Benefits (SEO & accessibility)

- Semantic lists help search engines and assistive technologies recognize related content, improving readability and snippet generation.
- Structured lists are easier for screen readers to announce and for users to scan quickly.

## Complete these tasks

- **Replace** non-semantic repeated `div` items with a semantic list (`ul` or `ol`) and `li` children.

### Quick example

```html
<h2>Ingredients</h2>
<ul>
  <li>Flour</li>
  <li>Sugar</li>
</ul>
```

## Hints (Socratic)

- When should you use `ol` versus `ul`?
- How do screen readers announce lists differently than generic divs?

## Element notes

- `<ul>`: unordered list for items where order doesn't matter.
- `<ol>`: ordered list for sequential or ranked items.
- `<li>`: list item — required child for `ul`/`ol`.
- `<dl>`/`<dt>`/`<dd>`: definition lists for term/description pairs.

## Usage tips

- Keep nested lists shallow and use headings to break complex hierarchies.
