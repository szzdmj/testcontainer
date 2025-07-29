import { Container as DOContainer } from "./container";

export { DOContainer as Container };

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    return env.container.fetch(request);
  },
};
