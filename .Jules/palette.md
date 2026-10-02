## 2025-05-18 - Accordion Row Keyboard Navigation & ARIA States
**Learning:** Expanding clickable container rows that contain interactive content or text can cause nested control failures and accidental toggling if event bubbling is not handled.
**Action:** Convert container rows to `role="button"` and `tabindex="0"`, convert internal trigger buttons into decorative `aria-hidden="true"` elements, update `aria-expanded` dynamically on toggle, and ignore events originating inside `.case-details`.
