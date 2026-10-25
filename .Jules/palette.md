# Palette's Journal - Critical Learnings

## 2025-05-18 - Accordion Micro-UX & Keyboard Accessibility

**Learning:** Raw HTML interactive container cards (like case study accordions) often lack focus indicators, keyboard handlers, and proper ARIA states. Having nested `<button>` elements inside a clickable card container creates conflicting interactive targets for screen readers.
**Action:** Convert nested `<button>` inside clickable cards into `<span aria-hidden="true">`, add `role="button"`, `tabindex="0"`, `aria-expanded`, and `aria-label` on the parent container, and provide explicit `:focus-visible` outline styles for keyboard navigation.
