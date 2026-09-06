## 2025-05-20 - Custom Accordion Rows & Nested Controls
**Learning:** Interactive card container rows (`.case-row`) with `onclick` handlers need `role="button"`, `tabindex="0"`, `aria-expanded`, and keyboard listeners (`Enter`/`Space`). Any nested `<button>` inside must be converted to a decorative element (e.g., `<span aria-hidden="true">`) to prevent invalid nested interactive controls.
**Action:** When making custom container elements interactive, apply complete ARIA role/state attributes and replace inner interactive buttons with non-interactive decorative elements.
