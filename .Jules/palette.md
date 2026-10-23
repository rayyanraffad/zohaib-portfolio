## 2026-10-23 - Custom Accordion Keyboard & Screen Reader Accessibility

**Learning:** Interactive accordion containers (e.g. `.case-row`) using custom `div` markup lack implicit button semantics, keyboard listeners, and focus styles, and can fail accessibility standards if nested interactive buttons exist inside them.

**Action:** Add `role="button"`, `tabindex="0"`, dynamic `aria-expanded`, and descriptive `aria-label` attributes to the container; convert nested `<button>`s into `aria-hidden="true"` decorative indicators; add `:focus-visible` styles with brand outline colors; and ensure click/keydown handlers prevent accidental collapse when interacting with expanded content.
