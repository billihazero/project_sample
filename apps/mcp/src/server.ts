// src/server.ts
import { createServer } from "node:http";
import { Server } from "@modelcontextprotocol/sdk/server";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";

const port = Number(process.env.PORT ?? 8000);

function createMcpServer() {
  return new Server(
    {
      name: "mcp-basic",
      version: "0.1.0",
    },
    {
      capabilities: {
        tools: {},
        resources: {},
      },
    }
  );
}

const httpServer = createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/mcp") {
    const server = createMcpServer();
    const transport = new SSEServerTransport("/mcp/messages", res);

    await server.connect(transport);
    return;
  }

  res.writeHead(404).end("Not Found");
});

httpServer.listen(port, () => {
  console.log(`🚀 MCP server listening on http://localhost:${port}/mcp`);
});
