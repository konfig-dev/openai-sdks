import { AxiosResponse } from "axios";
import { createParser } from "eventsource-parser";
import { createOnParse } from "./streamHook";

const decoder = new TextDecoder();

export function createStream({
  response,
}: {
  response: AxiosResponse<ReadableStream>;
}) {
  return new ReadableStream({
    async start(controller) {
      const parser = createParser(createOnParse({ controller }));

      const reader = response.data.getReader();
      let done = false;
      while (!done) {
        const { value: chunk, done: doneReading } = await reader.read();
        done = doneReading;
        parser.feed(decoder.decode(chunk));
      }
    },
  });
}
