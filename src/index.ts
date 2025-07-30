export class Container {
  constructor(state: any, env: any) {}
  async fetch(request: Request) {
    return new Response("Durable Object stub");
  }
}

export default {
  async fetch(request: Request) {
    return new Response("Test container up");
  }
};
