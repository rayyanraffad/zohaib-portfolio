# Palette's Journal - Critical Learnings

## 2025-02-15 - Accessible Accordion and Drawer Elements
**Learning:** Interactive containers like case study rows with nested buttons create nested interactive controls, failing accessibility specs. Converting the nested trigger into a non-interactive styled element and moving the interactive role, focus states, and keydown listeners to the row container solves this. For drawers, off-screen translations (`transform: translateX(100%)`) do not prevent screen readers or keyboard tab orders from accessing hidden links; adding toggled `visibility` properties addresses this perfectly.
**Action:** Always make accordion/list rows focusable and keyboard accessible if they are clickable. Prevent nested controls by using styled non-interactive span/div indicators. Implement visibility toggles alongside transforms for drawer navigation panels.
