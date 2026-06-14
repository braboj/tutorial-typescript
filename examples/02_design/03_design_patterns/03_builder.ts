// Builder (Creational)
// --------------------
// Constructs a complex object step by step with a readable, fluent API, instead
// of a constructor with many (often optional) parameters. Great when an object
// has lots of configuration and you want validation before it is finalized.

interface HttpRequest {
  readonly method: string;
  readonly url: string;
  readonly headers: Record<string, string>;
  readonly body?: string;
}

class HttpRequestBuilder {
  private method = "GET";
  private url = "";
  private headers: Record<string, string> = {};
  private body: string | undefined;

  // Each step returns `this`, enabling chaining.
  setMethod(method: string): this {
    this.method = method;
    return this;
  }
  setUrl(url: string): this {
    this.url = url;
    return this;
  }
  addHeader(key: string, value: string): this {
    this.headers[key] = value;
    return this;
  }
  setBody(body: string): this {
    this.body = body;
    return this;
  }

  // build() validates and produces the finished, immutable object.
  build(): HttpRequest {
    if (!this.url) throw new Error("url is required");
    return {
      method: this.method,
      url: this.url,
      headers: this.headers,
      ...(this.body !== undefined ? { body: this.body } : {}),
    };
  }
}

const request = new HttpRequestBuilder()
  .setMethod("POST")
  .setUrl("https://api.example.com/users")
  .addHeader("Content-Type", "application/json")
  .setBody('{"name":"Ada"}')
  .build();

// -> POST https://api.example.com/users
console.log(`${request.method} ${request.url}`);
// -> application/json
console.log(request.headers["Content-Type"]);
// -> {"name":"Ada"}
console.log(request.body);
