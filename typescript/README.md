## openai-edge-streaming@1.0.0
This unofficial OpenAI library provides convenient access to the [OpenAI
API](https://platform.openai.com/docs/api-reference/). This library can be used
in browser (not recommended as you would expose your API key), edge, and server
environments. It improves upon the official library by:

1. Adding support for usage in [Next.js Edge Runtime](https://nextjs.org/docs/api-reference/edge-runtime) by passing [`useFetch: true`](#usage-in-nextjs-edge-runtime)
2. Adds
   [streaming](https://platform.openai.com/docs/api-reference/chat/create#chat/create-stream)
   support for the `/chat/completions` endpoint with
   [`openai.chat.createCompletionStream` method](./api/chat-api-custom.ts#L16) to help
   implement a ChatGPT UX. See example usage
   [here](https://github.com/konfig-dev/chatbot-ui/blob/main/utils/server/index.ts#L15)
3. Reorganizing OpenAI's endpoints into namespaces

Authored by: https://www.konfigthis.com/


### Installing

#### npm
```
npm install openai-edge-streaming --save
```

#### yarn
```
yarn add openai-edge-streaming
```



## Usage in Next.js Edge Runtime

If you are using `openai-edge-streaming` in a Next.js Edge runtime make sure to set `useFetch: true` like so:

```typescript
import { Openai } from "openai-edge-streaming"

export const config = {
    runtime: "edge",
};

export default async function handler(req: Request): Promise<Response> {
    const openai = new Openai({
        useFetch: true, // useFetch must be "true" for openai-edge-streaming to work in Next.js edge runtime
    })
    return new Response(JSON.stringify({ message: "This is from openai-edge-streaming" }), { status: 200 })
}
```


### Getting Started

```typescript
import { Openai } from "openai-edge-streaming"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    // Use native Fetch API instead of axios
    // useFetch: true,
    apiKey: 'API_KEY',

})

const createResponse = await openai.answers.create({
        "model": "model_example",
        "question": "What is the capital of Japan?",
        "examples": [["What is the capital of Canada?","Ottawa"],["Which province is Ottawa in?","Ontario"]],
        "examples_context": "Ottawa, Canada's capital, is located in the east of southern Ontario, near the city of Montréal and the U.S. border.",
        "documents": ["Japan is an island country in East Asia, located in the northwest Pacific Ocean.","Tokyo is the capital and most populous prefecture of Japan."],
        "search_model": "ada",
        "max_rerank": 200,
        "temperature": 0,
        "max_tokens": 16,
        "n": 1,
        "return_metadata": false,
        "return_prompt": false,
        "expand": [],
        "user": "user-1234",
    })

console.log(createResponse)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.openai.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AnswersApi* | [**create**](docs/AnswersApi.md#create) | **POST** /answers | Answers the specified question using the provided documents and examples.  The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions). 
*AudioApi* | [**createTranscription**](docs/AudioApi.md#createTranscription) | **POST** /audio/transcriptions | Transcribes audio into the input language.
*AudioApi* | [**createTranslation**](docs/AudioApi.md#createTranslation) | **POST** /audio/translations | Translates audio into into English.
*ChatApi* | [**createCompletion**](docs/ChatApi.md#createCompletion) | **POST** /chat/completions | Creates a completion for the chat message
*ClassificationsApi* | [**create**](docs/ClassificationsApi.md#create) | **POST** /classifications | Classifies the specified &#x60;query&#x60; using provided examples.  The endpoint first [searches](/docs/api-reference/searches) over the labeled examples to select the ones most relevant for the particular query. Then, the relevant examples are combined with the query to construct a prompt to produce the final label via the [completions](/docs/api-reference/completions) endpoint.  Labeled examples can be provided via an uploaded &#x60;file&#x60;, or explicitly listed in the request using the &#x60;examples&#x60; parameter for quick tests and small scale use cases. 
*CompletionsApi* | [**create**](docs/CompletionsApi.md#create) | **POST** /completions | Creates a completion for the provided prompt and parameters
*EditsApi* | [**create**](docs/EditsApi.md#create) | **POST** /edits | Creates a new edit for the provided input, instruction, and parameters.
*EmbeddingsApi* | [**create**](docs/EmbeddingsApi.md#create) | **POST** /embeddings | Creates an embedding vector representing the input text.
*EnginesApi* | [**createSearch**](docs/EnginesApi.md#createSearch) | **POST** /engines/{engine_id}/search | The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.  To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When &#x60;file&#x60; is set, the search endpoint searches over all the documents in the given file and returns up to the &#x60;max_rerank&#x60; number of documents. These documents will be returned along with their search scores.  The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query. 
*EnginesApi* | [**list**](docs/EnginesApi.md#list) | **GET** /engines | Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.
*EnginesApi* | [**retrieve**](docs/EnginesApi.md#retrieve) | **GET** /engines/{engine_id} | Retrieves a model instance, providing basic information about it such as the owner and availability.
*FilesApi* | [**create**](docs/FilesApi.md#create) | **POST** /files | Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit. 
*FilesApi* | [**delete**](docs/FilesApi.md#delete) | **DELETE** /files/{file_id} | Delete a file.
*FilesApi* | [**download**](docs/FilesApi.md#download) | **GET** /files/{file_id}/content | Returns the contents of the specified file
*FilesApi* | [**list**](docs/FilesApi.md#list) | **GET** /files | Returns a list of files that belong to the user\&#39;s organization.
*FilesApi* | [**retrieve**](docs/FilesApi.md#retrieve) | **GET** /files/{file_id} | Returns information about a specific file.
*FinetunesApi* | [**cancel**](docs/FinetunesApi.md#cancel) | **POST** /fine-tunes/{fine_tune_id}/cancel | Immediately cancel a fine-tune job. 
*FinetunesApi* | [**create**](docs/FinetunesApi.md#create) | **POST** /fine-tunes | Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
*FinetunesApi* | [**list**](docs/FinetunesApi.md#list) | **GET** /fine-tunes | List your organization\&#39;s fine-tuning jobs 
*FinetunesApi* | [**listEvents**](docs/FinetunesApi.md#listEvents) | **GET** /fine-tunes/{fine_tune_id}/events | Get fine-grained status updates for a fine-tune job. 
*FinetunesApi* | [**retrieve**](docs/FinetunesApi.md#retrieve) | **GET** /fine-tunes/{fine_tune_id} | Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
*ImagesApi* | [**create**](docs/ImagesApi.md#create) | **POST** /images/generations | Creates an image given a prompt.
*ImagesApi* | [**createEdit**](docs/ImagesApi.md#createEdit) | **POST** /images/edits | Creates an edited or extended image given an original image and a prompt.
*ImagesApi* | [**createVariation**](docs/ImagesApi.md#createVariation) | **POST** /images/variations | Creates a variation of a given image.
*ModelsApi* | [**delete**](docs/ModelsApi.md#delete) | **DELETE** /models/{model} | Delete a fine-tuned model. You must have the Owner role in your organization.
*ModelsApi* | [**list**](docs/ModelsApi.md#list) | **GET** /models | Lists the currently available models, and provides basic information about each one such as the owner and availability.
*ModelsApi* | [**retrieve**](docs/ModelsApi.md#retrieve) | **GET** /models/{model} | Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
*ModerationsApi* | [**create**](docs/ModerationsApi.md#create) | **POST** /moderations | Classifies if text violates OpenAI\&#39;s Content Policy

