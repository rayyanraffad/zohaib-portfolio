## 2025-02-23 - Accessible Drawer and Custom Accordion Elements

**Learning:** Off-screen layout drawers must use `visibility: hidden` (when closed) and `visibility: visible` (when open) in combination with transitions to prevent keyboard/screen-reader users from tabbing into hidden links. Additionally, interactive rows like accordions implemented via `div` elements with custom click handlers must have `role="button"`, `tabindex="0"`, dynamic `aria-expanded` states, keyboard support, and no nested interactive elements.
**Action:** Always check off-screen menus and custom interactive containers for standard ARIA attributes, proper visibility/tab-order management, and appropriate keyboard focus indicator styles.
