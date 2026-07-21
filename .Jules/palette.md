# Palette's Journal - Critical UX/Accessibility Learnings

This journal documents critical learnings discovered while optimizing user experiences, micro-interactions, and accessibility across projects.

## 2025-03-03 - [Keyboard and Screen Reader Friendly Mobile Drawers]

**Learning:** Offscreen mobile navigation drawers with `transform: translateX(100%)` are visually hidden but still part of the DOM tab order. Assistive technologies and keyboard navigators can still focus on links inside a hidden drawer, leading to a broken and confusing focus state.
**Action:** Use `visibility: hidden` (when closed) and `visibility: visible` (when open) in conjunction with CSS transitions. This ensures that when the drawer is closed, its content is fully removed from the tab order and screen reader announcements.

## 2025-03-03 - [Semantic Accordions with Interactive Rows]

**Learning:** Placing interactive `<button>` tags nested inside a clickable `.case-row` container causes "nested interactive controls" accessibility failures and invalid HTML structures.
**Action:** Convert nested buttons/links to non-interactive decorative elements (like `<span>` with `aria-hidden="true"`) and implement ARIA roles (`role="button"`, `tabindex="0"`, `aria-expanded`, and keyboard listeners) directly on the parent row container, ensuring complete keyboard accessibility and a clean screen reader outline.
