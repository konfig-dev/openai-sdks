# FinetunesApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel**](FinetunesApi.md#cancel) | **POST** /fine-tunes/{fine_tune_id}/cancel | Immediately cancel a fine-tune job. 
[**create**](FinetunesApi.md#create) | **POST** /fine-tunes | Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
[**list**](FinetunesApi.md#list) | **GET** /fine-tunes | List your organization\&#39;s fine-tuning jobs 
[**listEvents**](FinetunesApi.md#listEvents) | **GET** /fine-tunes/{fine_tune_id}/events | Get fine-grained status updates for a fine-tune job. 
[**retrieve**](FinetunesApi.md#retrieve) | **GET** /fine-tunes/{fine_tune_id} | Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 


# **cancel**

#### **POST** /fine-tunes/{fine_tune_id}/cancel


### Example


```typescript
import { Openai } from "openai-edge-streaming"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    apiKey: process.env.OPENAI_API_KEY,
})

const cancelResponse = await openai.finetunes.cancel({
        "fineTuneId": "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
    })

console.log(cancelResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fineTuneId** | [**string**] | The ID of the fine-tune job to cancel  | defaults to undefined


### Return type

**FineTune**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **create**

#### **POST** /fine-tunes


### Example


```typescript
import { Openai } from "openai-edge-streaming"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    apiKey: process.env.OPENAI_API_KEY,
})

const createResponse = await openai.finetunes.create({
        "training_file": "file-ajSREls59WBbvgSzJSVWxMCB",
        "validation_file": "file-XjSREls59WBbvgSzJSVWxMCa",
        "model": "curie",
        "n_epochs": 4,
        "prompt_loss_weight": 0.01,
        "compute_classification_metrics": false,
        "classification_betas": [0.6,1,1.5,2],
    })

console.log(createResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFineTuneRequest** | **CreateFineTuneRequest**|  |


### Return type

**FineTune**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **list**

#### **GET** /fine-tunes


### Example


```typescript
import { Openai } from "openai-edge-streaming"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    apiKey: process.env.OPENAI_API_KEY,
})

const listResponse = await openai.finetunes.list()

console.log(listResponse)

```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListFineTunesResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listEvents**

#### **GET** /fine-tunes/{fine_tune_id}/events


### Example


```typescript
import { Openai } from "openai-edge-streaming"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    apiKey: process.env.OPENAI_API_KEY,
})

const listEventsResponse = await openai.finetunes.listEvents({
        "fineTuneId": "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
        "stream": false,
    })

console.log(listEventsResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fineTuneId** | [**string**] | The ID of the fine-tune job to get events for.  | defaults to undefined
 **stream** | [**boolean**] | Whether to stream events for the fine-tune job. If set to true, events will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available. The stream will terminate with a `data: [DONE]` message when the job is finished (succeeded, cancelled, or failed).  If set to false, only events generated so far will be returned.  | (optional) defaults to false


### Return type

**ListFineTuneEventsResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **retrieve**

#### **GET** /fine-tunes/{fine_tune_id}


### Example


```typescript
import { Openai } from "openai-edge-streaming"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    apiKey: process.env.OPENAI_API_KEY,
})

const retrieveResponse = await openai.finetunes.retrieve({
        "fineTuneId": "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
    })

console.log(retrieveResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fineTuneId** | [**string**] | The ID of the fine-tune job  | defaults to undefined


### Return type

**FineTune**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


