import { AxiosResponse } from "axios";
import { createParser } from "eventsource-parser";
import { EventSourceParseCallback } from "eventsource-parser";

const decoder = new TextDecoder();

export function createChatCreateCompletionStream({
  response,
}: {
  response: AxiosResponse<ReadableStreamDefaultReader<Uint8Array>>;
}) {
  return new ReadableStream({
    async start(controller) {
      const parser = createParser(createOnParse({ controller }));

      const reader = response.data;
      let done = false;
      while (!done) {
        const { value: chunk, done: doneReading } = await reader.read();
        done = doneReading;
        parser.feed(decoder.decode(chunk));
      }
    },
  });
}

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
