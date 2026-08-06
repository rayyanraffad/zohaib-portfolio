# Palette Journal

## 2025-02-18 - [Accessible Drawers & Non-Nested Controls]

**Learning:**

1. Mobile navigation drawers that are hidden off-screen with `transform: translateX(100%)` remain in the keyboard focus tab order unless `visibility: hidden` (or `display: none`) is applied when they are closed.
2. In clickable lists (like `.case-row`), nesting interactive buttons inside other interactive click-handlers causes "nested interactive controls" accessibility errors and screen reader confusion. Converting the nested `<button>` to a non-interactive styled element (like `<span>`) with `aria-hidden="true"` solves this completely.
3. Hover effects on clickable elements must have corresponding `:focus-visible` styles with a clear, high-contrast outline (using design tokens like `var(--gold)`) for keyboard-only navigation.

**Action:**

1. Apply `visibility: hidden` to closed mobile nav drawers and transition it in CSS.
2. Ensure interactive elements do not contain nested buttons or anchors. Use `aria-hidden="true"` or convert them to non-interactive styling cues.
3. Apply `:focus-visible` to interactive lists or items that mirror hover states and provide high-visibility focus indicator rings.
