## 2025-02-28 - Accordion and Mobile Drawer Accessibility in Static HTML Templates

**Learning:** Static HTML single-page landing templates often hide navigation drawers off-screen with CSS `transform: translateX(100%)` without `visibility: hidden`. This leaves off-screen menu links focusable in the tab order for keyboard users. Similarly, custom clickable container rows (`.case-row`) with nested `<button>` tags create nested interactive controls and lack keyboard `Enter`/`Space` listeners and proper `aria-expanded` attributes.

**Action:**
1. Combine `transform` transitions on drawer elements with `visibility: hidden` (closed) and `visibility: visible` (open) so off-screen links are excluded from keyboard tab order.
2. Ensure hamburger toggle buttons carry `aria-expanded` and `aria-controls`.
3. Give clickable row elements `role="button"`, `tabindex="0"`, `aria-expanded`, and keyboard handlers (`Enter`/`Space`), and replace nested `<button>` elements inside with non-interactive `<span aria-hidden="true">` styling elements.
4. Add global `:focus-visible` styles (`outline: 2px solid var(--gold); outline-offset: 3px`) for clear focus indicators on interactive controls.
