## 2025-10-06 - Accessible Accordions and Mobile Drawer Interaction

**Learning:** Interactive containers with `onclick` handlers need keyboard listeners, `role="button"`, `tabindex="0"`, and `aria-expanded` attributes. Nested `<button>` elements inside clickable containers create invalid nested controls, and offscreen drawer navigation links remain tabbable unless `visibility: hidden` is applied when closed. Additionally, accordion container click handlers must ignore click events stemming from inside detail panels to prevent unexpected collapse during text selection.

**Action:**
1. Use `visibility: hidden` when closed and `visibility: visible` when open alongside `transform` on navigation drawers.
2. Replace nested `<button>` tags within interactive rows with `<span aria-hidden="true">`.
3. Add `e.target.closest('.case-details')` checks in toggle handlers.
4. Style `:focus-visible` with high-contrast outline tokens.
