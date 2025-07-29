import { SQLiteDurableObject } from "@cloudflare/kv-asset-handler";

export class Container extends SQLiteDurableObject {
  async fetch(request: Request): Promise<Response> {
    return new Response("Container DO active, but not used yet.");
  }
}
