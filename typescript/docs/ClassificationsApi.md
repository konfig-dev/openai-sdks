# ClassificationsApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ClassificationsApi.md#create) | **POST** /classifications | Classifies the specified &#x60;query&#x60; using provided examples.  The endpoint first [searches](/docs/api-reference/searches) over the labeled examples to select the ones most relevant for the particular query. Then, the relevant examples are combined with the query to construct a prompt to produce the final label via the [completions](/docs/api-reference/completions) endpoint.  Labeled examples can be provided via an uploaded &#x60;file&#x60;, or explicitly listed in the request using the &#x60;examples&#x60; parameter for quick tests and small scale use cases. 


# **create**

#### **POST** /classifications


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

const createResponse = await openai.classifications.create({
        "model": "model_example",
        "query": "The plot is not very attractive.",
        "examples": [["Do not see this film.","Negative"],["Smart, provocative and blisteringly funny.","Positive"]],
        "labels": ["Positive","Negative"],
        "search_model": "ada",
        "temperature": 0,
        "max_examples": 200,
        "return_prompt": false,
        "return_metadata": false,
        "expand": [],
        "user": "user-1234",
    })

console.log(createResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createClassificationRequest** | **CreateClassificationRequest**|  |


### Return type

**CreateClassificationResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


