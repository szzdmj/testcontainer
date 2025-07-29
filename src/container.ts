// 这是一个空壳 Durable Object，满足 Cloudflare 的结构要求
export class Container {
  async fetch(request: Request): Promise<Response> {
    return new Response("This DO is unused");
  }
}
