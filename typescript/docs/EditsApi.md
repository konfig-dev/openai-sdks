# EditsApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](EditsApi.md#create) | **POST** /edits | Creates a new edit for the provided input, instruction, and parameters.


# **create**

#### **POST** /edits


### Example


```typescript
import { Openai } from "openai-typescript-sdk"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    // Use native Fetch API instead of axios
    // useFetch: true,
    apiKey: 'API_KEY',

})

const createResponse = await openai.edits.create({
        "model": "model_example",
        "input": "What day of the wek is it?",
        "instruction": "Fix the spelling mistakes.",
        "n": 1,
        "temperature": 1,
        "top_p": 1,
    })

console.log(createResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEditRequest** | **CreateEditRequest**|  |


### Return type

**CreateEditResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


