# EnginesApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSearch**](EnginesApi.md#createSearch) | **POST** /engines/{engine_id}/search | The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.  To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When &#x60;file&#x60; is set, the search endpoint searches over all the documents in the given file and returns up to the &#x60;max_rerank&#x60; number of documents. These documents will be returned along with their search scores.  The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query. 
[**list**](EnginesApi.md#list) | **GET** /engines | Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.
[**retrieve**](EnginesApi.md#retrieve) | **GET** /engines/{engine_id} | Retrieves a model instance, providing basic information about it such as the owner and availability.


# **createSearch**

#### **POST** /engines/{engine_id}/search


### Example


```typescript
import { Openai } from "openai-typescript-sdk"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    apiKey: 'API_KEY',

})

const createSearchResponse = await openai.engines.createSearch({
        "engineId": "davinci",
        "query": "the president",
        "documents": ["White House","hospital","school"],
        "max_rerank": 200,
        "return_metadata": false,
        "user": "user-1234",
    })

console.log(createSearchResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSearchRequest** | **CreateSearchRequest**|  |
 **engineId** | [**string**] | The ID of the engine to use for this request.  You can select one of `ada`, `babbage`, `curie`, or `davinci`. | defaults to undefined


### Return type

**CreateSearchResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **list**

#### **GET** /engines


### Example


```typescript
import { Openai } from "openai-typescript-sdk"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    apiKey: 'API_KEY',

})

const listResponse = await openai.engines.list()

console.log(listResponse)

```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListEnginesResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **retrieve**

#### **GET** /engines/{engine_id}


### Example


```typescript
import { Openai } from "openai-typescript-sdk"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    apiKey: 'API_KEY',

})

const retrieveResponse = await openai.engines.retrieve({
        "engineId": "davinci",
    })

console.log(retrieveResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **engineId** | [**string**] | The ID of the engine to use for this request  | defaults to undefined


### Return type

**Engine**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


