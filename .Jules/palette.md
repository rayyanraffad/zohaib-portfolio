# Palette's Journal - Critical Learnings

## 2025-05-18 - Case Row Expandable Accordion Accessibility

**Learning:** Raw HTML interactive case study rows (`.case-row`) with toggleable details require `role="button"`, `tabindex="0"`, dynamic `aria-expanded` states, and `:focus-visible` styling to be accessible to keyboard and screen reader users. Also, click events must ignore clicks originating inside expanded detail cards (`.case-details`) to prevent accidental collapse when users highlight text or click links inside.
**Action:** Always provide full keyboard listeners (`Enter`, `Space`), update `aria-expanded` and toggle button text on state change, and check `e.target.closest('.case-details')` in click/keydown handlers.
