## 2026-10-24 - Interactive Row Accordions & Nested Controls
**Learning:** HTML `div` containers used as accordion toggles lack keyboard support and ARIA states by default, and nesting `<button>` elements inside them causes accessibility issues (nested interactive controls).
**Action:** Convert clickable container rows into `role="button"` elements with `tabindex="0"`, `aria-expanded`, and keyboard listeners (`Enter`/`Space`), and convert nested inner `<button>` elements to `aria-hidden="true"` presentation spans.
