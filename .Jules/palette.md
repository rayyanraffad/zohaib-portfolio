## 2025-05-22 - Precision in Micro-UX Enhancements
**Learning:** Micro-UX tasks should be implemented with surgical precision. Global formatting tools (like `pnpm format`) can cause massive diffs in large static files (e.g., `public/site.html`), which violates the "Keep changes under 50 lines" boundary and complicates code review.
**Action:** Use `replace_with_git_merge_diff` for targeted changes in large files instead of overwriting or running global formatters. Always verify that changes are confined to the intended logic and don't include unrelated dependency or formatting noise.
