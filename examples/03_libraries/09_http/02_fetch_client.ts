// HTTP Client (fetch)
// -------------------
// `fetch` is built into modern Node (and browsers) - no axios/node-fetch
// needed.
// It returns a Promise<Response>. We run a tiny local server to call against,
// so
// this example is offline and deterministic.

import { createServer } from "node:http";
import type { AddressInfo } from "node:net";

const server = createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      res.writeHead(201, { "content-type": "application/json" });
      res.end(JSON.stringify({ received: JSON.parse(body || "{}") }));
    });
    return;
  }
  if (req.url === "/missing") {
    res.writeHead(404);
    res.end();
    return;
  }
  res.writeHead(200, { "content-type": "application/json", "x-demo": "1" });
  res.end(JSON.stringify({ method: req.method, url: req.url }));
});

async function main(): Promise<void> {
  await new Promise<void>((resolve) => server.listen(0, resolve));
  const { port } = server.address() as AddressInfo;
  const base = `http://localhost:${port}`;

  // GET with a query string. Read JSON and a response header.
  const res = await fetch(`${base}/items?limit=2`);
  // -> true 200
  console.log(res.ok, res.status);
  // -> 1
  console.log(res.headers.get("x-demo"));
  // -> { method: 'GET', url: '/items?limit=2' }
  console.log(await res.json());

  // POST JSON: set method, headers, and a stringified body.
  const created = await fetch(base, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: "ada" }),
  });
  // -> 201
  console.log(created.status);
  // -> { received: { name: 'ada' } }
  console.log(await created.json());

  // GOTCHA: fetch does NOT reject on 4xx/5xx. Always check `res.ok` yourself.
  const bad = await fetch(`${base}/missing`);
  // -> false
  console.log(bad.ok);
  // -> request failed: 404
  if (!bad.ok) console.log(`request failed: ${bad.status}`);

  server.close();
}

main();
