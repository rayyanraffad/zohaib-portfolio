## 2025-05-18 - Expandable Accordion Text Selection Safety & ARIA Controls
**Learning:** When adding interactive expanders with toggle controls inside row containers that house readable details, click event handlers must guard against events originating inside details elements (`e.target.closest('.case-details')`) so text selection doesn't accidentally collapse the card.
**Action:** Use native `<button>` elements with dynamic `aria-expanded` and explicit `aria-label`s for expand/collapse triggers, and guard container click handlers against text interaction inside expanded content.
