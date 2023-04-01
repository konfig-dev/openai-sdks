# AudioApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTranscription**](AudioApi.md#createTranscription) | **POST** /audio/transcriptions | Transcribes audio into the input language.
[**createTranslation**](AudioApi.md#createTranslation) | **POST** /audio/translations | Translates audio into into English.


# **createTranscription**

#### **POST** /audio/transcriptions


### Example


```typescript
import { Openai } from "openai-edge-streaming"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    apiKey: process.env.OPENAI_API_KEY,
})

const createTranscriptionResponse = await openai.audio.createTranscription({
        "file": open('/path/to/file', 'rb'),
        "model": "model_example",
        "response_format": "json",
        "temperature": 0,
    })

console.log(createTranscriptionResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**File**] | The audio file to transcribe, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm.  | defaults to undefined
 **model** | [**string**] | ID of the model to use. Only `whisper-1` is currently available.  | defaults to undefined
 **prompt** | [**string**] | An optional text to guide the model\\\'s style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should match the audio language.  | (optional) defaults to undefined
 **responseFormat** | [**string**] | The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.  | (optional) defaults to 'json'
 **temperature** | [**number**] | The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.  | (optional) defaults to 0
 **language** | [**string**] | The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy and latency.  | (optional) defaults to undefined


### Return type

**CreateTranscriptionResponse**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createTranslation**

#### **POST** /audio/translations


### Example


```typescript
import { Openai } from "openai-edge-streaming"

const openai = new Openai({
    // Defining the base path is optional and defaults to https://api.openai.com/v1
    // basePath: "https://api.openai.com/v1",
    apiKey: process.env.OPENAI_API_KEY,
})

const createTranslationResponse = await openai.audio.createTranslation({
        "file": open('/path/to/file', 'rb'),
        "model": "model_example",
        "response_format": "json",
        "temperature": 0,
    })

console.log(createTranslationResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**File**] | The audio file to translate, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm.  | defaults to undefined
 **model** | [**string**] | ID of the model to use. Only `whisper-1` is currently available.  | defaults to undefined
 **prompt** | [**string**] | An optional text to guide the model\\\'s style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should be in English.  | (optional) defaults to undefined
 **responseFormat** | [**string**] | The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.  | (optional) defaults to 'json'
 **temperature** | [**number**] | The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.  | (optional) defaults to 0


### Return type

**CreateTranslationResponse**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


