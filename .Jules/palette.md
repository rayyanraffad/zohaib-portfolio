## 2026-08-31 - Accessible Custom Accordion Rows & Off-Screen Navigation Drawers

**Learning:** Custom interactive rows (such as `.case-row` accordions) implemented with `<div>` elements require `role="button"`, `tabindex="0"`, `aria-expanded`, `aria-controls`, keyboard event handlers (`Enter`/`Space`), and `:focus-visible` styles to ensure complete keyboard navigation and screen reader support. Converting inner `<button>` tags to `<span aria-hidden="true">` eliminates nested interactive control accessibility failures. Additionally, off-screen drawers require CSS `visibility: hidden` when closed to prevent hidden links from remaining in the tab order.

**Action:** Whenever transforming `<div>` containers into interactive controls, add complete ARIA button semantics and keyboard listeners while removing any nested `<button>` or `<a>` elements, and ensure hidden drawer menus set `visibility: hidden` when closed.
