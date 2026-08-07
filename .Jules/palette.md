## 2025-02-15 - Interactive Container Rows & Keyboard Accessibility
**Learning:** Container elements that act as interactive rows (like `.case-row` toggles) must be accessible to keyboard and screen readers. They require `role="button"`, `tabindex="0"`, custom `:focus-visible` styles matching hover effects, dynamic `aria-expanded` attributes, and dedicated JavaScript keydown listeners for Enter/Space keys. Additionally, any nested buttons or controls inside them should be turned into non-interactive spans with `aria-hidden="true"` to prevent 'nested interactive controls' accessibility failures.

**Action:** When creating clickable list items or grid rows, add role, tabindex, aria attributes, keydown listeners, and convert nested interactive elements to aria-hidden spans.

## 2025-02-15 - Mobile Drawer Focus Control
**Learning:** Mobile navigation drawers that slide off-screen can still be tab-navigated by keyboard users or announced by screen readers if they are merely hidden with `transform: translateX(100%)`. To properly remove drawer content from the page's tab order and screen reader flows while hidden, toggle `visibility: hidden` (when closed) and `visibility: visible` (when open) alongside CSS slide transitions.

**Action:** Always combine off-screen transform animations for mobile drawers with `visibility` style toggling to ensure solid keyboard and screen reader accessibility.
