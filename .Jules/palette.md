## 2026-09-17 - Accessible Custom Accordion Rows

**Learning:** When making container elements (like custom accordion rows) interactive, converting nested `<button>` elements to `aria-hidden="true"` `<span>` elements prevents invalid nested interactive controls while maintaining accessible keyboard navigation (`role="button"`, `tabindex="0"`, `aria-expanded`) and high-contrast `:focus-visible` outlines.

**Action:** Ensure custom interactive cards/rows have appropriate ARIA roles, keyboard listeners (`Enter`/`Space`), dynamic `aria-expanded` attributes, and non-interactive visual indicators.
