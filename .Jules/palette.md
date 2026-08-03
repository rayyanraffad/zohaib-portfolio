## 2025-02-18 - Accessible Custom Accordions with Nested Elements

**Learning:** Nested interactive controls (like a `<button>` inside a clickable `div`) are an accessibility anti-pattern. If a row or list item behaves as a toggle or button, the parent container should be the single interactive element (with `role="button"`, `tabindex="0"`, `aria-expanded`, and keyboard listeners for 'Enter' and 'Space'), while any nested button-like icons should be converted to non-interactive decorative elements (e.g., `<span>` with `aria-hidden="true"`).
**Action:** Always convert nested `<button>` or `<a>` tags within clickable row containers to non-interactive indicators, and implement `:focus-visible` styles matching the existing `:hover` layout styles for smooth keyboard focus.
