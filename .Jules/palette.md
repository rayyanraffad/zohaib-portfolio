# Palette Journal - Critical Learnings

## 2025-05-10 - Accordion Accessibility & Mobile Drawer Visibility
**Learning:** Interactive containers (like case study rows) with nested `<button>` elements trigger accessibility issues for nested interactive controls. Replacing nested `<button>` with `<span aria-hidden="true">` while adding `role="button"`, `tabindex="0"`, and `aria-expanded` to the parent container ensures full keyboard accessibility without invalid HTML semantics. Additionally, preventing accordion toggle when clicking inside open `.case-details` prevents accidental collapse when users highlight text.
**Action:** Always make container elements full keyboard targets with proper ARIA attributes, mark decorative inner buttons as `aria-hidden="true"`, and ignore clicks originating from within expanded detail containers.
