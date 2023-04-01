# ChatApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompletion**](ChatApi.md#createCompletion) | **POST** /chat/completions | Creates a completion for the chat message


# **createCompletion**

#### **POST** /chat/completions


### Example


```typescript
import { Openai } from "openai-edge-streaming"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    // Use native Fetch API instead of axios
    // useFetch: true,
    apiKey: 'API_KEY',

})

const createCompletionResponse = await openai.chat.createCompletion({
        "model": "model_example",
        "messages": [
            {
                "role": "system",
                "content": "content_example",
            }
        ],
        "temperature": 1,
        "top_p": 1,
        "n": 1,
        "stream": false,
        "max_tokens": 99999999,
        "presence_penalty": 0,
        "frequency_penalty": 0,
        "user": "user-1234",
    })

console.log(createCompletionResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createChatCompletionRequest** | **CreateChatCompletionRequest**|  |


### Return type

**CreateChatCompletionResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


