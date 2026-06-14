// Polymorphism
// ------------
// Polymorphism = "many forms": the same call works on many types, and the right
// behaviour is selected automatically. Two flavours show up in TypeScript:
//
//   1. Subtype polymorphism  - one interface, many implementations (this file).
//   2. Parametric polymorphism - generics (see ../../01_language/10_generics).

interface Notification {
  send(message: string): string;
}

class EmailNotification implements Notification {
  send(message: string): string {
    return `Email: ${message}`;
  }
}
class SmsNotification implements Notification {
  send(message: string): string {
    return `SMS: ${message}`;
  }
}
class PushNotification implements Notification {
  send(message: string): string {
    return `Push: ${message}`;
  }
}

// This function knows nothing about the concrete types. Each object responds in
// its own way - that is dynamic dispatch / polymorphism.
function broadcast(channels: Notification[], message: string): void {
  for (const channel of channels) console.log(channel.send(message));
}

// Prints the message once per channel, prefixed by type: Email/SMS/Push.
broadcast(
  [new EmailNotification(), new SmsNotification(), new PushNotification()],
  "Server is down",
);

// Adding a new channel requires ZERO changes to broadcast() - just a new class.
// This is what makes polymorphic code easy to extend.
class SlackNotification implements Notification {
  send(message: string): string {
    return `Slack: ${message}`;
  }
}
// -> Slack: Deploy finished
broadcast([new SlackNotification()], "Deploy finished");
