# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-05-18 - Mobile Navigation Drawer Hidden Focus & ARIA States
**Learning:** Offscreen mobile navigation drawers (`transform: translateX(100%)`) remain focusable via keyboard tab navigation unless `visibility: hidden` (or `display: none`/`inert`) is applied when closed. In addition, mobile menu toggle buttons require `aria-expanded` and `aria-controls` to announce state changes properly to screen readers.
**Action:** Pair offscreen transform transitions with `visibility: hidden` -> `visibility: visible` and synchronize `aria-expanded` on the toggle button.
