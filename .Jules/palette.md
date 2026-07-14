## 2025-05-15 - Accessible Interactive Grid Rows

**Learning:** Interactive grid rows (like `.case-row`) that act as toggles must have `role="button"`, `tabindex="0"`, and `aria-expanded` states. Importantly, any nested buttons should be converted to non-interactive elements (like `<span>`) with `aria-hidden="true"` to avoid nested interactive controls, which are a common accessibility failure. Focus states should mirror hover states to ensure keyboard users have the same visual cues.
**Action:** Always check for nested interactive elements in clickable containers. Use `aria-controls` to link the trigger to the content it reveals.
