export default {
  async fetch(request: Request): Promise<Response> {
    return new Response("Container is running", { status: 200 });
  }
};
