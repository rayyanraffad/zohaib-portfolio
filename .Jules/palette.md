# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-05-15 - Improving Interactive Case Rows & Mobile Drawers
**Learning:**
1. Elements that behave as interactive triggers (such as `.case-row` toggling a details view) must be accessible to screen readers and keyboard users. Using a native `<button>` or custom element with `role="button"`, `tabindex="0"`, `aria-expanded`, and keyboard triggers for `Enter` and `Space` ensures compatibility.
2. Nesting interactive elements like a `<button>` inside another clickable container (`.case-row`) causes HTML validation failures, accessibility violations, and keyboard navigation issues (nested interactive controls). Replacing nested buttons with non-interactive indicator elements like `<span>` with `aria-hidden="true"` resolves this cleanly.
3. For mobile drawer drawers/menus, keeping them `transform: translateX(100%)` only hides them visually but keeps them focusable/announcable in the tab sequence. Adding `visibility: hidden;` when closed and `visibility: visible;` when open, combined with a CSS transition, completely removes them from the tab order when hidden.

**Action:**
- Always ensure clickable lists/grids have correct keyboard focus-visible styles, support `Enter`/`Space` activation, and declare `aria-expanded` when toggling.
- Avoid nesting buttons/links inside parent elements that are themselves clickable/interactive; use semantic presentation wrappers instead.
- Use `visibility: hidden/visible` on hidden navigation draw-outs to prevent keyboard users from tabbing into hidden drawers.
