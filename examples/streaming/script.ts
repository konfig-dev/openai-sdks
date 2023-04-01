import {
  ChatCompletionRequestMessageRoleEnum,
  Openai,
} from "../../typescript/index";
const formElem = document.getElementById("formElem");
const inputElem = document.getElementById("input");
if (
  formElem &&
  formElem instanceof HTMLFormElement &&
  inputElem &&
  inputElem instanceof HTMLInputElement
) {
  formElem.onsubmit = async (e) => {
    e.preventDefault();

    const openai = new Openai({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      useFetch: true,
    });
    console.log(import.meta.env.VITE_OPENAI_API_KEY);

    const input = {
      model: { id: "gpt-3.5-turbo", name: "GPT-3.5" },
      systemPrompt:
        "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",
      messages: [
        {
          role: "user" as ChatCompletionRequestMessageRoleEnum,
          content: inputElem.value,
        },
      ],
    };

    const response = await openai.chat.createCompletion({
      model: input.model.id,
      max_tokens: 1000,
      messages: [
        {
          role: "system",
          content: input.systemPrompt,
        },
        ...input.messages,
      ],
      temperature: 1,
      stream: true,
    });
    console.log(response);
  };
}
