# Palette Journal

## 2025-05-18 - Accordion Keyboard & Accessibility Pattern
**Learning:** Raw HTML custom accordion containers implemented as `div` elements with `onclick` lack keyboard accessibility and create illegal nested controls if they contain nested `<button>` elements. Additionally, text selection or interaction inside detail panels trigger container click handlers if not isolated.
**Action:** Always convert container `div`s to `role="button"` with `tabindex="0"`, `aria-expanded`, and keyboard listeners (`Enter`/`Space`). Convert nested `<button>` tags to `<span aria-hidden="true">` to prevent nested interactive controls, and guard click events with `e.target.closest('.case-details')` checks.
