## 2025-05-18 - Case Study Accordions Keyboard Navigation & WCAG Compliance
**Learning:** Custom interactive rows with nested `<button>` elements trigger WCAG nested interactive controls errors and exclude keyboard/screen reader users if `role="button"`, `tabindex="0"`, `aria-expanded`, and `keydown` listeners are missing.
**Action:** Replace inner `<button>` tags with `aria-hidden="true"` decorative indicators and make the parent row container accessible with ARIA attributes, keydown listeners, and gold `:focus-visible` outline styles.
