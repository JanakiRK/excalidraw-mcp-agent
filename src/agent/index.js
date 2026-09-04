const prompt = process.argv.slice(2).join(" ").trim();

if (!prompt) {
  console.error("Usage: node src/agent/index.js \"Describe the diagram\"");
  process.exit(1);
}

const plan = {
  type: "diagram_request",
  prompt,
  status: "planned",
  next: "Convert this plan into Excalidraw MCP operations"
};

console.log(JSON.stringify(plan, null, 2));
