## 2025-05-15 - Case Study Rows Accessibility & Focus States

**Learning:** Interactive expandable containers (like `.case-row`) should be assigned `role="button"`, `tabindex="0"`, `aria-expanded`, and descriptive `aria-label`s along with keyboard event handlers (`Enter`/`Space`). Nested interactive controls inside clickable containers cause accessibility conflicts and should be converted to non-interactive decorative elements (e.g., `<span>` with `aria-hidden="true"`). Focus indicator styles (`:focus-visible`) must mirror `:hover` visual affordances and include clear focus outlines for visual clarity.

**Action:** Whenever converting clickable card or list items into accessible components, replace nested `<button>` or `<a>` elements with `aria-hidden="true"` spans, manage `aria-expanded` dynamically via JS, and add custom `:focus-visible` styles matching the existing design system tokens.
