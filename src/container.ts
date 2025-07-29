export class Container {
  state: DurableObjectState;

  constructor(state: DurableObjectState) {
    this.state = state;
  }

  async fetch(req: Request): Promise<Response> {
    return new Response("✅ Container is alive!", {
      headers: { "content-type": "text/plain" },
    });
  }
}

export default {
  async fetch(req: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const id = env.container.idFromName("singleton");
    const stub = env.container.get(id);
    return await stub.fetch(req);
  },
};
