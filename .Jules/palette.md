# Palette UX Journal

## 2025-05-18 - [Accordion and Navigation Drawer Accessibility Insights]

**Learning:**

1. Nested interactive controls are major accessibility blockers. Inside `.case-row` elements (which act as toggles), having an inner `<button class="case-btn">` confuses screen readers and forms an invalid HTML hierarchy. Converting nested buttons to non-interactive `<span>` tags with `aria-hidden="true"` completely fixes this issue while maintaining the visual style.
2. Mobile navigation drawers that slide off-screen using `transform: translateX(100%)` are still accessible to screen readers and keyboard tab navigation unless explicitly hidden. To prevent focus leaks, `visibility: hidden` (when closed) and `visibility: visible` (when open) should always be used in combination with CSS transitions.

**Action:**

- Never nest `<button>` or `<a>` inside other interactive `div` elements without properly converting them to screen-reader hidden icons or spans.
- Always apply `visibility: hidden` / `visible` to mobile menu drawers or dialogs that transition off-screen.
