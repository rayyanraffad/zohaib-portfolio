# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-02-18 - [Local SEO Expert Website Keyboard Navigation & Mobile Drawer A11y]
**Learning:** For landing pages using rich, custom interactive layouts (such as raw HTML site structures wrapped in React start routes), accessibility can easily be compromised. Specifically:
- **Mobile Drawer Tabbing:** Off-screen absolute or fixed layout elements (e.g., `.nav-drawer` with translation transforms) remain in the tab order unless hidden with `visibility: hidden` or `display: none`.
- **Nested Interactive Controls:** Placing a `<button>` inside an element that itself has an `onclick` handler creates nested interactive controls, which violates WCAG accessibility guidelines. Changing nested buttons to semantic/visually hidden layout tags (`<span>`) preserves styling while delegating target triggers.
- **Keyboard Triggering:** Clickable non-interactive tags/divs (like `.case-row`) must be equipped with `tabindex="0"`, `role="button"`, appropriate ARIA attributes (`aria-expanded`), and active event listeners supporting 'Enter' and 'Space' keypress triggers.

**Action:**
- Apply `visibility: hidden` to closed drawers and transition them to `visibility: visible` when toggled.
- Replace nested interactive elements in custom list templates with clean `<span>` wrappers, delegating standard ARIA features to the parent container.
- Always implement `onkeydown` listeners alongside `onclick` on elements with `role="button"`.
