# Excalidraw MCP Diagram Agent

## Progress

- Node.js 22.17.1 installed
- npm 10.9.2 installed
- Excalidraw MCP Server 2.0.0 tested
- Local Excalidraw canvas server running
- Excalidraw canvas accessible at localhost:3000
- Project Git repository initialized
## Build Progress

### Day 3 — Create our first Excalidraw element

- Called the `create_element` MCP tool from Node.js
- Created a rectangle on the Excalidraw canvas
- Confirmed the element was successfully synced to the canvas

**Current flow:**

```text
User prompt
    ↓
Node.js agent
    ↓
MCP client
    ↓
Excalidraw MCP server
    ↓
create_element
    ↓
🎨 Excalidraw canvas
### Day 4 — Create text with Excalidraw MCP

- Changed the element type from rectangle to text
- Added text content with the `text` property
- Created "Hello from MCP!" on the canvas

### Day 5 — Change text size

- Added the `fontSize` property
- Created text with a font size of 32
- Confirmed the change on the Excalidraw canvas

### Day 6 — Create multiple Excalidraw elements

- Learned how `x` controls left/right position
- Learned how `y` controls up/down position
- Created two text elements
- Created a rectangle around the text
- Used multiple `create_element` calls to build one diagram

