The unofficial OpenAI library provides convenient access to the OpenAI API from Node.js applications. It improves upon the official library by:

1. Reorganizing OpenAI's endpoints into namespaces
2. Adding support for usage in [Next.js Edge Runtime](https://nextjs.org/docs/api-reference/edge-runtime) by passing [`useFetch: true`](#using-nextjs-edge-runtime)
3. Adds support for [streaming](https://platform.openai.com/docs/api-reference/chat/create#chat/create-stream). See example usage [here](#../examples/chatbot-ui/utils/server/index.ts)
