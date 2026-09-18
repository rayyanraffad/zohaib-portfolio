## 2026-09-18 - Off-screen Navigation Drawers & Formatting Care in Static HTML

**Learning:** Off-screen navigation drawers rendered with CSS `transform: translateX(100%)` remain focusable and read aloud by screen readers when closed unless paired with `visibility: hidden`, `aria-hidden="true"`, and dynamic `aria-expanded` updates on the hamburger toggle. Additionally, running global Prettier formatters on dense HTML files like `public/site.html` can reformat thousands of lines and obscure focused micro-UX diffs.
**Action:** Use targeted `visibility` and ARIA attributes for mobile drawers to prevent keyboard focus traps, and apply manual diff edits to raw static HTML files rather than global auto-formatters.
