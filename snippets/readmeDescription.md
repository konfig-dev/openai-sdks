This unofficial OpenAI library provides convenient access to the [OpenAI
API](https://platform.openai.com/docs/api-reference/). This library can be used
in browser (not recommended as you would expose your API key), edge, and server
environments. It improves upon the official library by:

1. Adding support for usage in [Next.js Edge Runtime](https://nextjs.org/docs/api-reference/edge-runtime) by passing [`useFetch: true`](#usage-in-nextjs-edge-runtime)
2. Adds
   [streaming](https://platform.openai.com/docs/api-reference/chat/create#chat/create-stream)
   support for the `/chat/completions` endpoint with
   [`openai.chat.createCompletionStream` method](./api/chat-api-custom.ts#L16). See
   example usage in a ChatGPT clone
   [here](https://github.com/konfig-dev/chatbot-ui/blob/main/utils/server/index.ts#L15)
3. Reorganizing OpenAI's endpoints into namespaces

Authored by: https://www.konfigthis.com/
