// Template Literals
// -----------------
// Backtick strings support interpolation (${...}) and span multiple lines.
// They are the preferred way to build strings in modern TS/JS.

const name = "Ada";
const age = 36;

// -> Ada is 36 years old.
console.log(`${name} is ${age} years old.`);

// Any expression works inside ${} -> Next year: 37
console.log(`Next year: ${age + 1}`);

// Multi-line strings need no \n. Prints the indented <ul>/<li> block for Ada:
const html = `
  <ul>
    <li>${name}</li>
  </ul>`;
console.log(html);

// Tagged templates: a function processes the parts. Useful for escaping,
// i18n, or building safe SQL/HTML.
function upper(strings: TemplateStringsArray, ...values: unknown[]): string {
  return strings.reduce(
    (acc, str, i) => acc + str + String(values[i] ?? "").toUpperCase(),
    "",
  );
}
// -> hello ADA!
console.log(upper`hello ${name}!`);
