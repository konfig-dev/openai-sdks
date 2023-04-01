# AnswersApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](AnswersApi.md#create) | **POST** /answers | Answers the specified question using the provided documents and examples.  The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions). 


# **create**

#### **POST** /answers


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

const createResponse = await openai.answers.create({
        "model": "model_example",
        "question": "What is the capital of Japan?",
        "examples": [["What is the capital of Canada?","Ottawa"],["Which province is Ottawa in?","Ontario"]],
        "examples_context": "Ottawa, Canada's capital, is located in the east of southern Ontario, near the city of Montréal and the U.S. border.",
        "documents": ["Japan is an island country in East Asia, located in the northwest Pacific Ocean.","Tokyo is the capital and most populous prefecture of Japan."],
        "search_model": "ada",
        "max_rerank": 200,
        "temperature": 0,
        "max_tokens": 16,
        "n": 1,
        "return_metadata": false,
        "return_prompt": false,
        "expand": [],
        "user": "user-1234",
    })

console.log(createResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAnswerRequest** | **CreateAnswerRequest**|  |


### Return type

**CreateAnswerResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


