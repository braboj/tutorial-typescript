// Factory (Creational)
// --------------------
// Centralizes object creation behind a function/method, so callers ask for WHAT
// they want without knowing HOW it is built or which concrete class is used.
// This decouples client code from constructors and makes new variants easy.

interface Button {
  render(): string;
}

class WindowsButton implements Button {
  render(): string {
    return "[ OK ]";
  }
}
class MacButton implements Button {
  render(): string {
    return "( OK )";
  }
}
class WebButton implements Button {
  render(): string {
    return "<button>OK</button>";
  }
}

type Platform = "windows" | "mac" | "web";

// The factory: one place that decides which concrete class to instantiate.
function createButton(platform: Platform): Button {
  switch (platform) {
    case "windows":
      return new WindowsButton();
    case "mac":
      return new MacButton();
    case "web":
      return new WebButton();
  }
}

// Callers depend only on Button and the factory - never on concrete classes.
// Prints each platform's rendered button on its own line.
for (const platform of ["windows", "mac", "web"] as const) {
  console.log(createButton(platform).render());
}

// A registry-based factory scales better than a switch when variants are many
// or plugged in dynamically:
const registry: Record<string, () => Button> = {
  windows: () => new WindowsButton(),
  mac: () => new MacButton(),
};
// -> ( OK )
console.log(registry.mac!().render());
