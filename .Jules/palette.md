## 2025-06-15 - Mobile Drawer and Custom Row Keyboard Accessibility

**Learning:** Custom interactive rows (e.g., `.case-row`) constructed from non-interactive container tags like `div` are completely invisible to keyboard-only and screen reader users unless manually enriched with `tabindex`, correct ARIA roles/states, and explicit keydown event handling (like Enter or Space). Additionally, nesting actual `<button>` tags inside such custom container buttons causes nested-interactive validation failures. Furthermore, off-screen absolute/fixed drawers transition nicely with `transform: translateX(100%)` but their links remain in the tab navigation order unless `visibility` is toggled alongside the transition.

**Action:**
- Ensure any custom `div`-based buttons are given `tabindex="0"`, `role="button"`, and appropriate `aria-*` attributes (e.g. `aria-expanded`).
- Always strip/convert nested actual interactive tags (like `<button>` or `<a>`) to non-interactive elements (like `<span>`) with `aria-hidden="true"`.
- Sync `visibility: hidden` (closed) and `visibility: visible` (open) with CSS transform transitions for all slide-out / off-canvas drawers to completely remove inactive items from the tab focus ring.
