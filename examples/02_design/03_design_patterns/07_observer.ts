// Observer (Behavioural)
// ----------------------
// Defines a one-to-many dependency: when one object (the subject) changes
// state,
// all its dependents (observers) are notified automatically. This is the engine
// behind event systems, reactive UIs, and pub/sub.

type Observer<T> = (value: T) => void;

class Subject<T> {
  private observers: Set<Observer<T>> = new Set();

  // subscribe returns an unsubscribe function (a common, ergonomic API).
  subscribe(observer: Observer<T>): () => void {
    this.observers.add(observer);
    return () => this.observers.delete(observer);
  }

  notify(value: T): void {
    for (const observer of this.observers) observer(value);
  }
}

// Example: a temperature sensor that several displays react to.
const temperature = new Subject<number>();

const unsubscribeLog = temperature.subscribe((t) => console.log(`Log: ${t}C`));
temperature.subscribe((t) => {
  if (t > 30) console.log(`Alert: it's hot (${t}C)`);
});

// -> Log: 25C
temperature.notify(25);
// Prints the log line and, since 32 > 30, the hot-weather alert line.
temperature.notify(32);

// Observers can detach themselves - here we stop logging:
unsubscribeLog();
// -> Alert: it's hot (31C)
temperature.notify(31);
