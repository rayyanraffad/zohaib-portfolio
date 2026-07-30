## 2025-03-05 - [A11y/UX] Accessible Mobile Navigation Drawers & Clickable Row Cards
**Learning:**
1. Interactive mobile drawer elements can remain keyboard-focusable even when visually hidden off-screen (e.g. `transform: translateX(100%)`). Toggling CSS property `visibility: hidden` (when closed) and `visibility: visible` (when open) ensures closed drawer elements are completely removed from the tab order.
2. Clicking container rows (e.g., case studies) with nested `<button>` or `<a>` tags causes an accessibility issue known as 'nested interactive controls'. Replacing the nested elements with non-interactive layout tags (like `<span>` with `aria-hidden="true"`) keeps parent container triggers keyboard-accessible with `tabindex="0"`, `role="button"`, and appropriate ARIA labels.

**Action:**
1. Use `visibility: hidden` combined with sliding transitions for drawer menus to maintain logical focus order.
2. Make clickable row elements fully keyboard friendly with `role="button"`, `tabindex="0"`, `aria-expanded`, and keyboard listeners for 'Enter' and 'Space' keys.
3. Replace nested inner buttons with `aria-hidden="true"` styling representations instead of true interactive tags to prevent invalid nested control hierarchies.
