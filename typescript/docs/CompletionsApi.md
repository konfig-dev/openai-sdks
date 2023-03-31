# CompletionsApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](CompletionsApi.md#create) | **POST** /completions | Creates a completion for the provided prompt and parameters


# **create**

#### **POST** /completions


### Example


```typescript
import { Openai } from "openai-typescript-sdk"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    apiKey: 'API_KEY',

})

const createResponse = await openai.completions.create({
        "model": "model_example",
        "suffix": "test.",
        "max_tokens": 16,
        "temperature": 1,
        "top_p": 1,
        "n": 1,
        "stream": false,
        "echo": false,
        "presence_penalty": 0,
        "frequency_penalty": 0,
        "best_of": 1,
        "user": "user-1234",
    })

console.log(createResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCompletionRequest** | **CreateCompletionRequest**|  |


### Return type

**CreateCompletionResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


