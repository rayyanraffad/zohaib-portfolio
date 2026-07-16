## 2025-01-24 - Large Static File Formatting
**Learning:** Running `pnpm format` on projects with large, dense, or minified static files (like `public/site.html`) can lead to massive diffs that exceed micro-UX constraints.
**Action:** Use targeted diff-based edits (like `replace_with_git_merge_diff`) instead of global formatting tools when working on large static assets to keep PRs focused.

## 2025-01-24 - Case Study Accessibility Pattern
**Learning:** Interactive rows that use `onclick` but lack ARIA roles and keyboard listeners are a common accessibility gap in custom-built landing pages.
**Action:** Always add `role="button"`, `tabindex="0"`, `aria-expanded`, and keyboard listeners (Enter/Space) to non-semantic interactive containers.
