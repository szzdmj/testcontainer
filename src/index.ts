import { Container as DOContainer } from "./container";

// ⚠️ 必须导出 DO class，Cloudflare 才能绑定容器
export { DOContainer as Container };

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    return env.container.fetch(request);
  },
};
