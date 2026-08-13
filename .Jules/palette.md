# Palette's Journal - Critical UX/A11y Learnings

This file tracks critical user experience and accessibility learnings discovered during optimization of this application's components.

## 2025-08-13 - Nesting Interactive Controls and Off-Screen Element Tab Order

**Learning:**
1. Interactive elements should never be nested inside other interactive containers (e.g., `<button>` or `<a>` inside a clickable `.case-row` container), as this causes nested interactive control failures in screen readers and keyboard navigation.
2. Mobile drawers or overlays that slide off-screen using `transform: translateX(...)` must be hidden using `visibility: hidden` (or `display: none`) to ensure they are excluded from the document tab order when closed.
3. Adding interactive behaviors to custom non-interactive elements (like a `div`) requires setting explicit keyboard event listeners (for both `Enter` and `Space`), proper ARIA attributes (`role="button"`, `tabindex="0"`, `aria-expanded`, `aria-label`), and highly visible `:focus-visible` styles.

**Action:**
1. Convert any inner buttons/anchors of a clickable container into non-interactive visually matching elements (e.g., `<span>` with `aria-hidden="true"`) to resolve nested interactive controls accessibility failures.
2. Use CSS transitions pairing `transform` with `visibility: hidden` (when closed) and `visibility: visible` (when open) for mobile navigation drawers to correctly manage accessibility tab order.
3. Apply clear and prominent outlines using `:focus-visible` to custom keyboard accessible button containers.
