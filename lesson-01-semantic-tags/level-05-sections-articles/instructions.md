# Level 5 — Sections & Articles

## Objective

Group related content using `section` and `article` with appropriate headings.

## Benefits (SEO & accessibility)

- Using `article` and `section` clarifies which pieces of content are standalone or thematic, helping search engines generate accurate previews and cards.
- Proper grouping improves content reusability (feeds, previews) and helps assistive tech present logical content segments.

## Complete these tasks

- **Replace** non-semantic story containers with `article` or `section` as appropriate.
- **Ensure** each grouped piece has its own heading.

### Quick example

```html
<main>
  <article>
    <h2>Story title</h2>
    <p>Story content...</p>
  </article>
  <section>
    <h2>Related resources</h2>
    <!-- list -->
  </section>
</main>
```

## Hints (Socratic)

- When content can stand alone, which element is most appropriate?

## Element notes

- `<article>`: self-contained content that could stand on its own.
- `<section>`: thematic grouping, usually with its own heading.
- `<aside>`: tangential content like sidebars; not part of the main flow.

## Usage tips

- Prefer `article` for independent items and `section` for page subdivisions. Always give grouped content headings.
