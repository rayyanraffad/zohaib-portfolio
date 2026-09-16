## 2026-09-16 - Accessible Mobile Navigation Drawers
**Learning:** Sliding mobile drawers hidden via `transform: translateX(100%)` remain focusable via keyboard tabbing and remain readable to screen readers when off-screen if not properly hidden using `visibility: hidden`.
**Action:** Always combine `transform` transitions on off-screen drawers with `visibility: hidden` (when closed) and `visibility: visible` (when open), alongside `aria-expanded` and `aria-controls` on the toggle button.
