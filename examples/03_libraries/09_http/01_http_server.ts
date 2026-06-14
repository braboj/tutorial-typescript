// HTTP Server (node:http)
// -----------------------
// The built-in way to run an HTTP server with zero dependencies. (For real
// apps,
// most people use Express - see ../14_express - but it's good to know the
// core.)
// We start the server on an ephemeral port (0 = "pick a free one"), make a few
// requests against it, then close it, so the example self-terminates.

import { createServer } from "node:http";
import type { AddressInfo } from "node:net";

const server = createServer((req, res) => {
  // Tiny router based on method + url:
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }
  if (req.method === "GET" && req.url?.startsWith("/greet")) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("hello");
    return;
  }
  res.writeHead(404, { "content-type": "text/plain" });
  res.end("not found");
});

async function main(): Promise<void> {
  // listen(0) chooses a free port; the callback fires once it's ready.
  await new Promise<void>((resolve) => server.listen(0, resolve));
  const { port } = server.address() as AddressInfo;
  const base = `http://localhost:${port}`;

  const health = await fetch(`${base}/health`);
  // -> 200
  console.log(health.status);
  // -> { status: 'ok' }
  console.log(await health.json());

  const greet = await fetch(`${base}/greet`);
  // -> hello
  console.log(await greet.text());

  const missing = await fetch(`${base}/nope`);
  // -> 404
  console.log(missing.status);

  server.close(); // stop listening so the process can exit
}

main();
