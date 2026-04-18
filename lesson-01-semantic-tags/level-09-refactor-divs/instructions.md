# Level 9 — From div to Semantic Elements

## Objective

Refactor a non-semantic layout to use semantic HTML while preserving meaning and visual layout.

## Benefits (SEO & accessibility)

- Replacing generic `div` containers with semantic elements improves machine readability, which benefits SEO and assistive technologies.
- Semantic structure simplifies automated tooling, indexing, and future maintenance.

## Complete these tasks

- **Identify** top-level `div` containers that have a clear role.
- **Replace** those `div`s with semantic elements like `header`, `nav`, `main`, `footer`, `article`, or `section`.

### Quick example

```html
<!-- before: many divs -->
<div class="site-header">...logo...</div>
<div class="nav">...links...</div>
<div class="content">...articles...</div>
<div class="site-footer">...footer...</div>

<!-- after: semantic elements -->
<header>...logo...</header>
<nav>...links...</nav>
<main>...articles...</main>
<footer>...footer...</footer>
```

## Hints (Socratic)

- Which `div` elements act like a page header, navigation, main content, or footer?

## Mapping notes

- `div` -> use semantic element when purpose is clear:
  - page header -> `<header>`
  - navigation -> `<nav>`
  - primary content -> `<main>`
  - footer -> `<footer>`
  - repeated content -> `<article>`
  - grouped subsections -> `<section>`

## Usage tips

- Preserve visual layout; swap semantics without breaking headings to keep the document outline intact.
