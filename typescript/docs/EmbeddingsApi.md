# EmbeddingsApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](EmbeddingsApi.md#create) | **POST** /embeddings | Creates an embedding vector representing the input text.


# **create**

#### **POST** /embeddings


### Example


```typescript
import { Openai } from "openai-typescript-sdk"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    apiKey: 'API_KEY',

})

const createResponse = await openai.embeddings.create({
        "model": "model_example",
        "input": null,
        "user": "user-1234",
    })

console.log(createResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEmbeddingRequest** | **CreateEmbeddingRequest**|  |


### Return type

**CreateEmbeddingResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


