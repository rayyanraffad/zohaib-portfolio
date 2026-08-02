# Palette UX Journal

## 2025-05-18 - [Fixing nested interactive elements and keyboard navigation in static site.html]

**Learning:** In static pages like `site.html`, when elements have custom click handlers (e.g. `onclick` on `div`), nesting buttons/links inside them causes "nested interactive controls" accessibility violations. Moreover, these elements are completely omitted from the tab order. Converting nested buttons to non-interactive decorative `span`s with `aria-hidden="true"` and elevating the parent to a semantic, focusable keyboard-accessible button via `role="button"` and `tabindex="0"` creates a much better accessible experience.
**Action:** Always verify keyboard focus states and tab order of interactive elements, and never nest clickable buttons/links inside parent elements with custom click handlers.
