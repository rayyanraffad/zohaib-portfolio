# Palette's Journal

## 2025-02-18 - [Static Site Accessibility and Nested Interactive Controls]
**Learning:** In highly customized, static landing pages built with raw HTML/CSS/JS (e.g., `public/site.html`), custom interactive elements like accordions (`.case-row`) often suffer from accessibility gaps. Specifically, using nested interactive controls (like a `<button>` inside an interactive `div`) triggers nested interactive control violations for screen readers. In addition, mobile navigation drawers that transition off-screen via `transform: translateX(100%)` remain focusable via standard keyboard navigation unless explicitly hidden using `visibility: hidden` or `display: none`.
**Action:**
1. Replace nested `<button>` or `<a>` elements inside a clickable wrapper with generic non-interactive styling tags (like `<span>` or `<div>`) and apply `aria-hidden="true"`.
2. Ensure the clickable wrapper has correct ARIA attributes (`role="button"`, `tabindex="0"`, `aria-expanded`, and descriptive `aria-label`).
3. For mobile menus, transition BOTH `transform` and `visibility: hidden`/`visible` so that the elements are removed from the tab order when the menu is closed.
