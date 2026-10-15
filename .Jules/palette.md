# Palette's Journal - Critical Learnings

## 2025-10-15 - Mobile Navigation Drawer Accessibility
**Learning:** Sliding navigation drawers using `transform: translateX(100%)` remain focusable by keyboard navigation and readable by screen readers when closed unless `visibility: hidden` (or `display: none`) is applied.
**Action:** Always toggle `visibility: hidden` (closed) / `visibility: visible` (open) alongside transform transitions, sync `aria-expanded` on toggle buttons, and provide an `Escape` key listener for open drawers.
