# Palette's UX Journal

## 2025-02-18 - [Accessible Interactive Rows and Hidden Drawer Navigation]

**Learning:** Nested interactive controls like `<button>` inside clickable `div`s lead to bad accessibility/focus trees. Interactive cards/rows with expandable details should behave as semantic buttons/expandables themselves. Keyboard-navigable custom drawers must use `visibility: hidden` and `visibility: visible` rather than just translateX to ensure focus order skips hidden components.
**Action:** Always make the card container the focusable interactive element with role="button", tabindex="0", and aria-expanded. Convert inner buttons to purely decorative visual cues (e.g., span) with aria-hidden="true". Ensure navigation drawers toggle `visibility` alongside transitions.
