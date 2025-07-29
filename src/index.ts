export default {
  async fetch() {
    return new Response("container launched", {
      headers: { "content-type": "text/plain" },
    });
  },
};
