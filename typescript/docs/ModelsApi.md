# ModelsApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](ModelsApi.md#delete) | **DELETE** /models/{model} | Delete a fine-tuned model. You must have the Owner role in your organization.
[**list**](ModelsApi.md#list) | **GET** /models | Lists the currently available models, and provides basic information about each one such as the owner and availability.
[**retrieve**](ModelsApi.md#retrieve) | **GET** /models/{model} | Retrieves a model instance, providing basic information about the model such as the owner and permissioning.


# **delete**

#### **DELETE** /models/{model}


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

const deleteResponse = await openai.models.delete({
        "model": "curie:ft-acmeco-2021-03-03-21-44-20",
    })

console.log(deleteResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**string**] | The model to delete | defaults to undefined


### Return type

**DeleteModelResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **list**

#### **GET** /models


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

const listResponse = await openai.models.list()

console.log(listResponse)

```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListModelsResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **retrieve**

#### **GET** /models/{model}


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

const retrieveResponse = await openai.models.retrieve({
        "model": "text-davinci-001",
    })

console.log(retrieveResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**string**] | The ID of the model to use for this request | defaults to undefined


### Return type

**Model**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


