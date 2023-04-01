import globalAxios, {
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { createParser, EventSourceParseCallback } from "eventsource-parser";
import fetchAdapter from "konfig-axios-fetch-adapter";
import { BaseAPI, BASE_PATH } from "../base";
import { createRequestFunction } from "../common";
import {
  ChatApiAxiosParamCreator,
  ChatApiCreateCompletionRequest,
} from "./chat-api";

export class ChatApiCustom extends BaseAPI {
  public async createCompletionStream(
    requestParameters: ChatApiCreateCompletionRequest,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ReadableStream>> {
    requestParameters.stream = true;
    if (options === undefined) options = {};
    options.responseType = "stream";
    options.adapter = fetchAdapter;
    const args = await ChatApiAxiosParamCreator(
      this.configuration
    ).createCompletion(requestParameters, options);
    const request = createRequestFunction(
      args,
      globalAxios,
      BASE_PATH,
      this.configuration
    );
    const response: AxiosPromise<ReadableStream<Uint8Array>> = request(
      this.axios,
      this.basePath
    );
    return response.then((res) => {
      return {
        ...res,
        data: createChatCreateCompletionStream({ response: res }),
      };
    });
  }
}

const decoder = new TextDecoder();
const encoder = new TextEncoder();

export function createChatCreateCompletionStream({
  response,
}: {
  response: AxiosResponse<ReadableStream<Uint8Array>>;
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
