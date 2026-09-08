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
  y: 100,
  text: "Hello from MCP!",
  fontSize: 32,
  },
});

console.log(shape);	
await client.close();
