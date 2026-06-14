// Decorators: Classes, Fields & Accessors
// ---------------------------------------
// Beyond methods, decorators can target the class itself, fields, and
// `accessor`
// properties. Each kind receives a differently-typed context.

// 1. CLASS decorator: runs with the class; can register or replace it.
const registry = new Map<string, unknown>();
function entity(name: string) {
  return function <T extends new (...args: never[]) => object>(
    value: T,
    _context: ClassDecoratorContext,
  ): T {
    registry.set(name, value);
    return value; // could return a subclass to augment behaviour
  };
}

// 2. FIELD decorator: returns an initializer that transforms the initial value.
function uppercase(
  _target: undefined,
  _context: ClassFieldDecoratorContext<unknown, string>,
) {
  return (initial: string): string => initial.toUpperCase();
}

// 3. ACCESSOR decorator: wraps the auto-generated get/set of an `accessor`
// field.
function clamp(min: number, max: number) {
  return function (
    target: ClassAccessorDecoratorTarget<unknown, number>,
    _context: ClassAccessorDecoratorContext<unknown, number>,
  ): ClassAccessorDecoratorResult<unknown, number> {
    return {
      get(this: unknown): number {
        return target.get.call(this);
      },
      set(this: unknown, value: number): void {
        target.set.call(this, Math.min(max, Math.max(min, value)));
      },
    };
  };
}

@entity("user")
class User {
  @uppercase name = "ada";
  @clamp(0, 100) accessor score = 50;
}

const u = new User();
// -> ADA   (field initializer transformed it)
console.log(u.name);

// -> 50
console.log(u.score);
u.score = 150; // clamped to the max
// -> 100
console.log(u.score);
u.score = -20; // clamped to the min
// -> 0
console.log(u.score);

// -> true
console.log(registry.has("user"));

// Decorators power frameworks like Angular (@Component), NestJS (@Injectable),
// and TypeORM (@Entity/@Column) - now on a standardized footing.
