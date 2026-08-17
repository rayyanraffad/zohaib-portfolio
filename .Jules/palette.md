## 2025-05-20 - Accessible Off-Canvas Mobile Navigation Drawers
**Learning:** For CSS-animated off-canvas mobile drawer menus using `transform: translateX()`, offscreen interactive links remain in the keyboard focus tab order and screen reader accessibility tree unless explicitly hidden.
**Action:** Always combine `transform` transitions with `visibility: hidden` (closed) / `visibility: visible` (open) or `display: none`/`inert` to properly restrict tab focus and announcements when the navigation drawer is closed.
