# Palette UX Journal

## 2025-06-15 - Improving Interactive Case Rows and Navigation Drawer Accessibility

**Learning:**
In single-page marketing landing pages served as raw HTML (like `public/site.html`), interactive components (e.g. accordion/case study toggles) implemented using `div` with custom onclick listeners must have full ARIA role and keyboard accessibility. Specifically:

1. Clicking a container element like a `.case-row` that contains nested `<button>` or `<a>` tags causes a 'nested interactive controls' accessibility failure. The nested elements should be converted to non-interactive icons/elements with `aria-hidden="true"`.
2. Container rows must support `:focus-visible` styling with a clear focus outline mirroring the hover state, and possess appropriate `tabindex="0"`, `role="button"`, and keyboard listeners for Enter/Space.
3. Off-screen navigation drawers transitioning with `transform: translateX` remain in the tab order unless `visibility: hidden` is applied when closed, which ensures hidden content is excluded from the tab order and screen reader announcements.

**Action:**

1. Upgrade the `.case-row` elements to have `role="button"`, `tabindex="0"`, `aria-expanded="false"`, and `aria-label`.
2. Convert nested `<button class="case-btn">` into `<span class="case-btn" aria-hidden="true">` to prevent nested interactive controls errors.
3. Update `toggleCase` to toggle `aria-expanded` attributes on `.case-row` elements.
4. Add global keyboard event listeners or inline `onkeydown` listeners on `.case-row` to trigger toggle on 'Enter' and 'Space' keys.
5. Add `:focus-visible` style rules for `.case-row` so keyboard users have a visual feedback mirroring the hover effect.
6. Apply `visibility: hidden` and `visibility: visible` transitions to `.nav-drawer` to prevent tabbing into hidden menu items.
