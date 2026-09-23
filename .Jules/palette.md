## 2025-05-20 - Accordion Container & Mobile Drawer Accessibility

**Learning:** Interactive containers (like `.case-row`) with `onclick` handlers require `role="button"`, `tabindex="0"`, `aria-expanded`, and keyboard listeners (`Enter`/`Space`) to be accessible. Any nested `<button>` inside such containers causes nested interactive control failures and must be converted to non-interactive elements with `aria-hidden="true"`. Furthermore, click event listeners on expandable containers must ignore events originating inside details elements (`e.target.closest('.case-details')`) to prevent accidental collapse when users select or interact with content. Mobile drawers hidden via CSS `transform: translateX(100%)` remain in keyboard tab order unless hidden with `visibility: hidden`.

**Action:**

1. Always add `role="button"`, `tabindex="0"`, `aria-expanded`, and keydown handlers (`Enter`/`Space`) to clickable `div` containers.
2. Change nested buttons inside clickable containers to `<span>` with `aria-hidden="true"`.
3. Check `e.target.closest('.case-details')` in accordion toggle handlers to prevent accidental closing during text selection.
4. Use `visibility: hidden` alongside CSS transforms for hidden navigation drawers.
