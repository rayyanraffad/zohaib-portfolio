## 2026-08-15 - Mobile Navigation Drawer Accessibility
**Learning:** Sliding mobile drawers animated via CSS `transform` remain in the tab order when hidden off-screen unless `visibility: hidden` and `pointer-events: none` are applied to the closed drawer state.
**Action:** Always combine CSS `transform` transitions with `visibility: hidden`/`pointer-events: none` for off-screen menus and set `aria-expanded` and `Escape` key listeners.
