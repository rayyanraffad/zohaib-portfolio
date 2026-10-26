## 2025-05-18 - Accordion Button Controls & ARIA Attributes
**Learning:** In static HTML landing pages with accordion rows, buttons used for toggling panels should maintain native `<button>` semantics, combined with `aria-expanded`, `aria-controls`, and descriptive `aria-label` attributes.
**Action:** When enhancing accordion items, update the `<button>` element directly rather than turning container `div`s into interactive buttons, ensuring clean accessibility trees and preventing huge reformatting diffs.
