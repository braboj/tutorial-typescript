// Express - Web Framework (npm: express)
// --------------------------------------
// Express is the most widely used Node web framework. It adds routing,
// middleware, and convenient request/response helpers on top of node:http.
// We start the app on an ephemeral port, send a few requests, then close it so
// the example self-terminates.

import express from "express";
import type { Request, Response } from "express";
import type { AddressInfo } from "node:net";

const app = express();

// Middleware: parse JSON request bodies into req.body. Middleware runs in order
// for every matching request.
app.use(express.json());

// A simple in-memory "database":
const users: { id: number; name: string }[] = [{ id: 1, name: "Ada" }];

// Routes: app.METHOD(path, handler). Path params are in req.params.
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.get("/users/:id", (req: Request, res: Response) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) {
    res.status(404).json({ error: "not found" });
    return;
  }
  res.json(user);
});

app.post("/users", (req: Request, res: Response) => {
  const user = { id: users.length + 1, name: String(req.body.name) };
  users.push(user);
  res.status(201).json(user);
});

async function main(): Promise<void> {
  const server = app.listen(0);
  await new Promise<void>((resolve) => server.once("listening", resolve));
  const { port } = server.address() as AddressInfo;
  const base = `http://localhost:${port}`;

  // -> { status: 'ok' }
  console.log(await (await fetch(`${base}/health`)).json());

  // -> { id: 1, name: 'Ada' }
  console.log(await (await fetch(`${base}/users/1`)).json());

  const created = await fetch(`${base}/users`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: "Linus" }),
  });
  // -> 201 { id: 2, name: 'Linus' }
  console.log(created.status, await created.json());

  const missing = await fetch(`${base}/users/999`);
  // -> 404
  console.log(missing.status);

  server.close();
}

main();
