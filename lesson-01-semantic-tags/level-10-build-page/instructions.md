# Level 10 — Build a Semantic Page

## Objective

Create a short, accessible page using semantic elements learned across earlier levels.

## Benefits (SEO & accessibility)

- A fully semantic page (proper headings, landmarks, metadata, and `alt` text) is easier for search engines to index and for assistive tech to navigate.
- Semantic structure increases the chances of useful rich snippets and improves long-term maintainability and content reuse.

## Complete these tasks

- **Build** a small page including `header`, `nav`, `main`, and `footer`.
- **Include** exactly one `h1`, sections with lists, and images with `alt` text.
- **Keep** content brief and focus on semantic structure and accessibility.

### Quick example

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Your page title</title>
  </head>
  <body>
    <header>
      <h1>Page title</h1>
      <nav>...links...</nav>
    </header>
    <main>
      <section>
        <h2>Section</h2>
        <p>Content...</p>
      </section>
      <article>
        <h2>Article</h2>
        <p>Content...</p>
      </article>
    </main>
    <footer>© 2026</footer>
  </body>
</html>
```

## Hints (Socratic)

- Which components should be landmarks and which should be grouped as sections or articles?

## Element notes

- Required structure: one `h1`, `header`, `nav`, `main`, and `footer`.
- Use `section`/`article` for grouping and `ul`/`ol` for lists; images need `alt`.
