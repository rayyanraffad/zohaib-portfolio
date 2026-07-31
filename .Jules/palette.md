# Palette Journal

## 2025-02-18 - [Accessible Accordion & Mobile Drawer Patterns]

**Learning:** In highly interactive custom web layouts, combining click elements with nested buttons creates 'nested interactive controls' accessibility failures. Converting nested buttons to `aria-hidden="true"` spans and turning the parent container into a keyboard-focusable, semantic `role="button"` container resolves this. For mobile drawers, using `transform` alone leaves offscreen links focusable via keyboard tab order. Adding `visibility: hidden` (when closed) and `visibility: visible` (when open) coupled with transitions ensures the closed drawer's content is completely removed from keyboard navigation.
**Action:** Apply these patterns consistently across custom static HTML layouts in this repository.
