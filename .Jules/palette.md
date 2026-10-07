## 2025-05-18 - Case Study Accordion Keyboard Navigation & ARIA Focus

**Learning:**
Custom interactive accordion rows represented as `div`s with `onclick` handlers in raw HTML landing pages fail accessibility standards for screen readers and keyboard users. Furthermore, placing internal `<button>` controls inside a clickable row creates invalid nested interactive elements.

**Action:**
1. Refactor container elements to `role="button"`, `tabindex="0"`, `aria-expanded="false"`, and descriptive `aria-label`s.
2. Convert nested buttons to non-interactive `<span>`s with `aria-hidden="true"`.
3. Add `onkeydown` listeners handling `Enter` and `Space` keys.
4. Add `:focus-visible` styling matching existing `:hover` states and design tokens (`var(--gold)`).
