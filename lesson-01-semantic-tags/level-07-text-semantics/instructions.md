# Level 7 — Inline Code & Preformatted Text

## Objective

Show correct use of inline `<code>` for snippets and `<pre>` for preserved whitespace blocks.

## Benefits (SEO & accessibility)

- Semantically marking code (`<code>`, `<pre>`) helps search engines and documentation parsers recognize technical content and improves readability.
- Proper markup preserves meaning for assistive tech and improves clarity when content is reused in guides or previews.

## Complete these tasks

- **Replace** inline code-like text with `<code>`.
- **Wrap** multi-line code examples in `<pre><code>` to preserve formatting.

### Quick example

```html
<p>Run the command <code>npm install</code> in your terminal.</p>
<pre><code>function greet() {
  console.log('Hello');
}
</code></pre>
```

## Hints (Socratic)

- Does the text represent a short identifier or a block that benefits from preserved spacing?

## Element notes

- `<code>`: inline code fragments.
- `<pre>`: preserves whitespace and line breaks; often paired with `<code>`.
- `<kbd>`, `<samp>`, `<var>`: use for keyboard input, program output, and variables respectively.

## Usage tips

- Use inline `<code>` for short identifiers and `<pre><code>` for examples that need exact spacing.
