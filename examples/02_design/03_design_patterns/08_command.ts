// Command (Behavioural)
// ---------------------
// Turns a request into a standalone object holding everything needed to perform
// it - and, crucially, to UNDO it. This enables queues, history, macros, and
// undo/redo.

interface Command {
  execute(): void;
  undo(): void;
}

// A simple receiver the commands act upon:
class TextDocument {
  content = "";
}

class AppendCommand implements Command {
  constructor(
    private doc: TextDocument,
    private text: string,
  ) {}
  execute(): void {
    this.doc.content += this.text;
  }
  undo(): void {
    this.doc.content = this.doc.content.slice(0, -this.text.length);
  }
}

// The invoker runs commands and keeps a history for undo.
class Editor {
  private history: Command[] = [];
  run(command: Command): void {
    command.execute();
    this.history.push(command);
  }
  undo(): void {
    const command = this.history.pop();
    command?.undo();
  }
}

const doc = new TextDocument();
const editor = new Editor();

editor.run(new AppendCommand(doc, "Hello"));
editor.run(new AppendCommand(doc, ", World"));
// -> Hello, World
console.log(doc.content);

editor.undo(); // undo the ", World"
// -> Hello
console.log(doc.content);

editor.undo(); // undo the "Hello"
// -> ""
console.log(JSON.stringify(doc.content));
