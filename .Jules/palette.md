## 2025-02-17 - Keyboard Access and Nested Interactive Controls on Custom Expandable List Rows
**Learning:** Interactive custom list rows (e.g. accordion rows) built using custom divs often suffer from two key accessibility anti-patterns:
1. They nest interactive controls (like `<button>` toggle indicators) within clickable parents, violating WCAG standards and confusing screen readers.
2. They lack native focus, keyboard listeners, and ARIA state exposure.

To create a premium accessible experience, the inner toggle indicator should be a non-interactive styled `span` with `aria-hidden="true"`, while the outer container handles focus, ARIA role/expansion state, and keyboard events.

**Action:**
- Convert nested `<button>` or `<a>` toggle elements in list rows to `<span aria-hidden="true">`.
- Apply `role="button"`, `tabindex="0"`, and dynamic `aria-expanded="true|false"` attributes on the list row container.
- Add keyboard event listeners for space and enter keys.
- Add custom `:focus-visible` outline styles to visually guide keyboard users during navigation.
