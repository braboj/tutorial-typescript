// LAB - Express
// =============
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/14_express/lab.ts
//
// Covered by this chapter: creating an app, JSON body middleware, GET/POST
// routes, path params (req.params), reading req.body, status codes, res.json,
// starting the server on an ephemeral port and sending requests with fetch.
// See the numbered example files in this folder if you get stuck.
//
// Hints: import express like `import express from "express";` and the types
// like `import type { Request, Response } from "express";`. The Node type for
// `server.address()` is `AddressInfo` from `node:net`.

// A tiny in-memory catalog of books to use as your "database".
const books: { id: number; title: string }[] = [
  { id: 1, title: "Clean Code" },
  { id: 2, title: "The Pragmatic Programmer" },
];

// ---------------------------------------------------------------------------
// Task 1 - Create the app and add JSON middleware
// Create an Express app and register the JSON body parser middleware so that
// POST request bodies are parsed into req.body. Print a line confirming setup.
// Expected: app ready

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - A health route
// Add a GET route at "/ping" that responds with the JSON object
// { message: "pong" }. (You will call it in Task 6.)
// Tip: use res.json(...) inside the handler.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - A route with a path parameter
// Add a GET route at "/books/:id" that finds the matching book in `books`.
// Path params arrive as strings, so convert req.params.id with Number(...).
// If found, respond with the book object. If not found, respond with status
// 404 and the JSON { error: "not found" }.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - A POST route that creates a resource
// Add a POST route at "/books" that reads req.body.title, pushes a new book
// with id = books.length + 1, and responds with status 201 and the new book.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Start the server on an ephemeral port
// Inside an async main(), call app.listen(0), wait for the "listening" event,
// then read the chosen port from server.address() (cast to AddressInfo).
// Build a base URL string `http://localhost:${port}` for the next task.
// Print the literal text below so the step is observable.
// Expected: server listening

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Send requests with fetch, then close the server
// Still inside main(), using your base URL:
//   1. GET /ping and print the parsed JSON body.
//   2. GET /books/2 and print the parsed JSON body.
//   3. POST /books with JSON body { title: "Refactoring" } (set the
//      content-type header) and print the response status and parsed body.
//   4. GET /books/99 and print only the response status.
// Finally call server.close() so the program exits. Remember to call main().
// Expected: { message: 'pong' }
// Expected: { id: 2, title: 'The Pragmatic Programmer' }
// Expected: 201 { id: 3, title: 'Refactoring' }
// Expected: 404

// TODO: your code here
