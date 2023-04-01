import { EventSourceParseCallback } from "eventsource-parser";

const encoder = new TextEncoder();

export function createOnParse({
  controller,
}: {
  controller: ReadableStreamDefaultController;
}): EventSourceParseCallback {
  return (event) => {
    if (event.type === "event") {
      const data = event.data;

      if (data === "[DONE]") {
        controller.close();
        return;
      }

      try {
        const json = JSON.parse(data);
        const text = json.choices[0].delta.content;
        const queue = encoder.encode(text);
        controller.enqueue(queue);
      } catch (e) {
        controller.error(e);
      }
    }
  };
}

export function requestChatCreateCompletionStreamParameterHook({
  parameters,
}: {
  parameters: any;
}) {
  parameters["stream"] = true;
}
