import { Openai } from "openai-typescript-sdk";

const input = {
  model: { id: "gpt-3.5-turbo", name: "GPT-3.5" },
  systemPrompt:
    "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",
  key: "",
  messages: [{ role: "user", content: "test" }],
};
