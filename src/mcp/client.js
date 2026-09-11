const label = process.argv[2] || "Start";
const processLabel = process.argv[3] || "Process";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "npx",
  args: ["-y", "mcp-excalidraw-server"],
});

const client = new Client({
  name: "excalidraw-mcp-agent",
  version: "0.1.0",
});

await client.connect(transport);

await client.callTool({
  name: "clear_canvas",
  arguments: {},
});
console.log("Connected to Excalidraw MCP!");
const shape = await client.callTool({
  name: "create_element",
  arguments: {
  id:"start",
  type: "rectangle",
  width: 250,
  height: 80,
  x: 100,
  y: 300,
  text: label,
  fontSize: 32,
  },
});

const secondText = await client.callTool({
  name: "create_element",
  arguments: {
    id: "process",
    type: "rectangle",
    width: 300,
    height: 80,
    x: 400,
    y: 300,
    text: processLabel,
    fontSize: 24,
  },
});

const arrow = await client.callTool({
  name: "create_element",
  arguments: {
    type: "arrow",
    x: 225,
    y: 380,
    startElementId: "start",
    endElementId: "process",
    endArrowhead: "arrow",
  },
});

console.log(shape);	
await client.close();
