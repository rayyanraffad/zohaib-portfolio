# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-05-18 - Interactive Custom Container Accordions
**Learning:** Making container elements (like `.case-row`) interactive with `role="button"` and `tabindex="0"` improves keyboard navigation accessibility, but any child interactive elements (e.g. `<button>`) must be converted to non-interactive decorative elements (e.g., `<span aria-hidden="true">`) to avoid 'nested interactive controls' accessibility violations. Furthermore, click/key event handlers must ignore events originating inside expanded detail panels (`e.target.closest('.case-details')`) to allow users to select or copy detail text without inadvertently collapsing the accordion.
**Action:** When converting custom container elements into accordions, ensure child buttons are non-interactive and add event target checking in the event handler.
