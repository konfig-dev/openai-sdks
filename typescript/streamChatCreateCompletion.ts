import { AxiosResponse } from "axios";
import { createParser } from "eventsource-parser";
import { createOnParse } from "./streamChatCreateCompletionHook";

const decoder = new TextDecoder();

export function createStream({
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
