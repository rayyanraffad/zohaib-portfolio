# Palette Journal - Critical UX & Accessibility Learnings

## 2025-05-18 - Mobile Drawer Tab Order & ARIA State Management
**Learning:** Using `transform: translateX(100%)` to hide off-screen navigation drawers keeps interactive links in the document tab order, allowing keyboard users to focus invisible off-screen elements.
**Action:** Pair CSS `transform` transitions with `visibility: hidden` (and `pointer-events: none`) when closed, and `visibility: visible` when open. Sync `aria-expanded` on the trigger button and `aria-hidden` on the drawer container via JavaScript handlers.
