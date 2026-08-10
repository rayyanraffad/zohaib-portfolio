# Syed Zohaib Ali Portfolio — UX & Accessibility Learnings

## 2025-02-19 - Mobile Drawer Focus and Keyboard Accessibility

**Learning:** For accessible mobile navigation drawers, using transition/transform like `transform: translateX(100%)` to hide the drawer visually leaves the interactive drawer links in the document's sequential tab navigation order. Users navigating via the keyboard can tab into invisible elements offscreen. Combining CSS transform transitions with `visibility: hidden` (when closed) and `visibility: visible` (when open) solves this by removing the hidden drawer content from the keyboard navigation flow and screen reader access while closed.
**Action:** Always combine offscreen transitions with `visibility: hidden` on mobile drawers.

## 2025-02-19 - Clickable Row with Nested Buttons Accessibility

**Learning:** Nested interactive controls (e.g., placing a `<button>` inside an interactive `div` or row) are an accessibility failure (violates WCAG 4.1.2) and result in erratic screen reader/keyboard navigation behavior. To make a full row clickable/expandable:

1. Make the container row the sole interactive element using `role="button"`, `tabindex="0"`, `aria-expanded="false"`, and a suitable `aria-label`.
2. Convert nested buttons/links inside into non-interactive presentation elements (like a `<span>`) and mark them with `aria-hidden="true"`.
3. Provide hover and keyboard focus-visible states matching the primary interaction, and implement key event listeners for Enter/Space to ensure accessible operation.
   **Action:** Replace nested interactive elements in clickable container rows with presentation-only icons/spans having `aria-hidden="true"`.
