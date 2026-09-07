## 2026-09-07 - Case Study Accordion Accessibility & Keyboard Navigation
**Learning:** Custom interactive containers (`div.case-row`) using `onclick` lack keyboard accessibility and screen reader support. Converting inner `<button>` to non-interactive `<span aria-hidden="true">` avoids nested interactive controls while making the outer container a full `role="button"` with `tabindex="0"`, `aria-expanded`, and keyboard listeners (`Enter`/`Space`).
**Action:** Always check interactive custom elements/card rows for keyboard focusability and ARIA expansion states.
