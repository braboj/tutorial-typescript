// Async Error Handling
// --------------------
// With async/await, use ordinary try/catch. A rejected awaited promise throws.

function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) reject(new Error(`invalid id: ${id}`));
      else resolve({ id, name: "Ada" });
    }, 10);
  });
}

async function main(): Promise<void> {
  try {
    const user = await fetchUser(1);
    // -> ok: Ada
    console.log("ok:", user.name);

    await fetchUser(-1); // this rejects
  } catch (err) {
    // In TS, a caught error is `unknown` - narrow before using it.
    if (err instanceof Error) {
      // -> handled: invalid id: -1
      console.log("handled:", err.message);
    }
  } finally {
    // -> cleanup always runs
    console.log("cleanup always runs");
  }
}

main();

// Tip: an unhandled rejected promise crashes Node. Always await inside
// try/catch
// or attach a .catch().
