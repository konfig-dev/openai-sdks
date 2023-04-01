This unofficial OpenAI library provides convenient access to the [OpenAI
API](https://platform.openai.com/docs/api-reference/) from Node.js applications.
This library can be used in browser (not recommended as you woukd expose your
API key), edge, and server environments. It improves upon the official library
by:

1. Reorganizing OpenAI's endpoints into namespaces
2. Adding support for usage in [Next.js Edge Runtime](https://nextjs.org/docs/api-reference/edge-runtime) by passing [`useFetch: true`](#using-nextjs-edge-runtime)
3. Adds
   [streaming](https://platform.openai.com/docs/api-reference/chat/create#chat/create-stream)
   support for the `/chat/completions` endpoint with
   [`openai.chat.createCompletionStream` method](./api/chat-api-custom.ts) to help
   you create a ChatGPT-style UX. See example usage
   [here](../examples/chatbot-ui/utils/server/index.ts)

Authored by: https://www.konfigthis.com/
