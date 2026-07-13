# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - [Accessible Drawers]
**Learning:** For accessible mobile navigation drawers, using `transform` alone is insufficient as the content remains in the tab order even when hidden. Using `visibility: hidden` (when closed) and `visibility: visible` (when open) ensures the drawer's content is correctly removed from screen reader announcements and tab navigation while hidden.

**Action:** Always pair `transform` with `visibility` for off-canvas elements.
