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

const result = await client.listTools();
console.log("Connected to Excalidraw MCP!");
const shape = await client.callTool({
  name: "create_element",
  arguments: {
  type: "text",
  x: 100,
  y: 300,
  text: "Hello from MCP!",
  fontSize: 32,
  },
});

const secondText = await client.callTool({
  name: "create_element",
  arguments: {
    type: "text",
    x: 100,
    y: 400,
    text: "This is my first diagram",
    fontSize: 24,
  },
});

const box = await client.callTool({
  name: "create_element",
  arguments: {
    type: "rectangle",
    x: 70,
    y: 260,
    width: 400,
    height: 200,
  },
});

console.log(shape);	
await client.close();
