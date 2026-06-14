// LAB - HTTP (node:http + fetch)
// ==============================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/09_http/lab.ts
//
// Covered by this chapter: creating an HTTP server with node:http, routing on
// method + url, writing status/headers/body, calling it with fetch, reading
// status/ok/headers/json/text, POSTing a JSON body, and the 4xx/5xx gotcha.
// See the numbered example files in this folder if you get stuck.

// The lab spins up one tiny local server (so it stays offline and
// deterministic), then makes several fetch calls against it. You implement the
// request handler AND the client calls.
//
// Import hint: `import { createServer } from "node:http";` and
// `import type { AddressInfo } from "node:net";`

// ---------------------------------------------------------------------------
// Task 1 - A server that pings back
// Create an HTTP server. When the request is a GET to "/ping", respond with
// status 200, a "content-type" header of "text/plain", and the body "pong".
// For anything else, respond with status 404 and body "missing".
// Keep a reference to the server in a `const server` so later tasks can use it.
// (No output yet - this just wires up the handler.)
// Tip: use req.method and req.url to decide what to send.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Start listening and grab the port
// Inside an async main(), start the server on port 0 (a free port) using a
// Promise wrapped around server.listen, then read the chosen port from
// server.address() (cast it `as AddressInfo`). Build a base URL string like
// `http://localhost:<port>` in a `const base`.
// Print whether the port is a positive number.
// Expected: true

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Fetch the ping route
// fetch `${base}/ping`. Print the response status, then on the next line print
// the body text.
// Expected: 200
// Expected: pong
// Tip: response.status is a number; await response.text() for the body.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Read a response header
// Add a "x-app" header set to "lab" to the 200 "/ping" response back in your
// handler (Task 1), then fetch "/ping" again and print the value of that
// header from the response.
// Expected: lab
// Tip: response.headers.get("x-app").

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Handle a missing route (the 4xx gotcha)
// fetch `${base}/nope`. Remember fetch does NOT throw on 404. Print response.ok
// and the status separated by a space, then if the response is not ok print
// `error: <status>`.
// Expected: false 404
// Expected: error: 404

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Echo a POSTed JSON body
// Extend the handler: when the method is POST, collect the request body chunks,
// parse it as JSON, and respond with status 201, "content-type"
// "application/json", and the JSON `{ echo: <parsed body> }`.
// Then POST `{"city":"Sofia"}` to `base`, print the created status, and on the
// next line print the parsed JSON response.
// Expected: 201
// Expected: { echo: { city: 'Sofia' } }
// Tip: collect chunks with req.on("data", ...) and finish in req.on("end", ...).
// Set method/headers/body in the fetch options object.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Close the server
// Call server.close() at the end of main() so the process can exit, then call
// main(). Print a final line once everything is done.
// Expected: done

// TODO: your code here
