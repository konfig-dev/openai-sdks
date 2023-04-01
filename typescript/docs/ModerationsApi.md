# ModerationsApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ModerationsApi.md#create) | **POST** /moderations | Classifies if text violates OpenAI\&#39;s Content Policy


# **create**

#### **POST** /moderations


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

const createResponse = await openai.moderations.create({
        "input": null,
        "model": "text-moderation-stable",
    })

console.log(createResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createModerationRequest** | **CreateModerationRequest**|  |


### Return type

**CreateModerationResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


