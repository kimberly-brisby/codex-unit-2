# Level 3 — Landmark Elements

## Objective

Introduce `header`, `nav`, `main`, and `footer` as structural landmarks to improve page navigation and accessibility.

## Benefits (SEO & accessibility)

- Landmarks signal the page's primary areas (navigation, main content, footer) to assistive tech and search crawlers, improving content discovery.
- Proper landmarks make automated tools and screen readers locate important content faster, improving UX and SEO relevance.

## Complete these tasks

- **Replace** non-semantic containers with appropriate landmark elements (`header`, `nav`, `main`, `footer`).
- **Place** navigation links inside `nav` and primary page content inside `main`.

### Quick example

```html
<header>
  <h1>Site name</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>
<main>
  <h1>Page heading</h1>
  <!-- content -->
</main>
<footer>© 2026</footer>
```

## Hints (Socratic)

- Which landmark should contain the main document heading?
- Where should global navigation live so assistive tech finds it quickly?

## Element notes

- `<header>`: introductory content for a page or section.
- `<nav>`: navigation links; prefer lists inside `nav`.
- `<main>`: primary page content; only one `main` per page and not nested inside other landmarks.
- `<footer>`: footer content for page/section.
- `<aside>`: tangential content (sidebars).

## Accessibility tip

- Put the primary `h1` inside `main` unless the design requires a site-level heading in the header.
