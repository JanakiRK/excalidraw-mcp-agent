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
console.log(`Available tools: ${result.tools.length}`);

for (const tool of result.tools) {
  console.log(`- ${tool.name}`);
}
await client.close();
