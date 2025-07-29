// 只转发请求到容器，不走 Durable Object
export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    return env.container.fetch(request);
  },
};
