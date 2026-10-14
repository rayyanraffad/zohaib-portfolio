## 2025-05-18 - Off-screen Drawer Accessibility & Focus Indicators in Static HTML

**Learning:** CSS `transform: translateX(100%)` alone does not remove off-screen menu elements from DOM tab order or screen readers. Adding `visibility: hidden` (and `visibility: visible` when `.open`) in conjunction with CSS transitions properly isolates off-screen drawers without layout jumps. Furthermore, static single-page templates often lack explicit `:focus-visible` rules, leaving keyboard navigation invisible unless focus rings are explicitly styled with design tokens.

**Action:** When working with off-screen drawers or modals, pair `transform` transitions with `visibility: hidden/visible` and ensure toggles maintain `aria-expanded` and `aria-controls`. Add `a:focus-visible, button:focus-visible` styles with brand primary focus rings (`var(--gold)`).
