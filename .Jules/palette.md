# Palette's UX & Accessibility Journal

## 2025-05-10 - Accordion Row Micro-UX & Keyboard Navigation

**Learning:** Static landing pages often use interactive `div` containers with `onclick` handlers for accordions/collapsibles. These lack keyboard navigation, screen reader state announcements (`aria-expanded`), and cause nested interactive control errors when inner buttons exist. Furthermore, clicking text inside expanded details can accidentally trigger container click listeners.

**Action:**
1. Convert nested `<button>` elements inside interactive container rows to non-interactive `<span aria-hidden="true">` elements.
2. Add `role="button"`, `tabindex="0"`, `aria-expanded`, and `aria-label` to the container row.
3. Mirror `:hover` styles on `:focus-visible` to give keyboard users visual feedback.
4. Filter out click events originating from expanded details (`e.target.closest('.case-details')`) to prevent unwanted collapses when users highlight or click text inside the accordion.
