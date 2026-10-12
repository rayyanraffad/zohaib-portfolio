## 2025-05-18 - Accordion Interactive Containers and Keyboard Navigation

**Learning:** Making entire rows in an accordion clickable requires converting nested interactive controls (like `<button>`) into non-interactive spans (`aria-hidden="true"`) to avoid nested interactive controls while giving the container `role="button"`, `tabindex="0"`, `aria-expanded`, and keyboard listeners (`Enter`/`Space`). Furthermore, clicks inside expanded accordion content (`.case-details`) must be ignored so selecting or interacting with text inside does not collapse the card.
**Action:** Always check interactive containers for nested buttons/links, ensure dynamic `aria-expanded` updates, support keyboard activation, and ignore event targets inside expanded content containers.
