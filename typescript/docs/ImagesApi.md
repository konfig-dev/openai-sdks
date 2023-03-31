# ImagesApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ImagesApi.md#create) | **POST** /images/generations | Creates an image given a prompt.
[**createEdit**](ImagesApi.md#createEdit) | **POST** /images/edits | Creates an edited or extended image given an original image and a prompt.
[**createVariation**](ImagesApi.md#createVariation) | **POST** /images/variations | Creates a variation of a given image.


# **create**

#### **POST** /images/generations


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

const createResponse = await openai.images.create({
        "prompt": "A cute baby sea otter",
        "n": 1,
        "size": "1024x1024",
        "response_format": "url",
        "user": "user-1234",
    })

console.log(createResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createImageRequest** | **CreateImageRequest**|  |


### Return type

**ImagesResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createEdit**

#### **POST** /images/edits


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

const createEditResponse = await openai.images.createEdit({
        "image": open('/path/to/file', 'rb'),
        "prompt": "A cute baby sea otter wearing a beret",
        "n": 1,
        "size": "1024x1024",
        "response_format": "url",
        "user": "user-1234",
    })

console.log(createEditResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | [**File**] | The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask. | defaults to undefined
 **prompt** | [**string**] | A text description of the desired image(s). The maximum length is 1000 characters. | defaults to undefined
 **mask** | [**File**] | An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where `image` should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as `image`. | (optional) defaults to undefined
 **n** | [**number**] | The number of images to generate. Must be between 1 and 10. | (optional) defaults to 1
 **size** | '256x256', '512x512', '1024x1024' | The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`. | (optional) defaults to '1024x1024'
 **responseFormat** | 'url', 'b64_json' | The format in which the generated images are returned. Must be one of `url` or `b64_json`. | (optional) defaults to 'url'
 **user** | [**string**] | A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).  | (optional) defaults to undefined


### Return type

**ImagesResponse**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createVariation**

#### **POST** /images/variations


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

const createVariationResponse = await openai.images.createVariation({
        "image": open('/path/to/file', 'rb'),
        "n": 1,
        "size": "1024x1024",
        "response_format": "url",
        "user": "user-1234",
    })

console.log(createVariationResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | [**File**] | The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square. | defaults to undefined
 **n** | [**number**] | The number of images to generate. Must be between 1 and 10. | (optional) defaults to 1
 **size** | '256x256', '512x512', '1024x1024' | The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`. | (optional) defaults to '1024x1024'
 **responseFormat** | 'url', 'b64_json' | The format in which the generated images are returned. Must be one of `url` or `b64_json`. | (optional) defaults to 'url'
 **user** | [**string**] | A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).  | (optional) defaults to undefined


### Return type

**ImagesResponse**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


