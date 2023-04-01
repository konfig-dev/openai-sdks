/* tslint:disable */
/* eslint-disable */
/**
 * OpenAI API
 * APIs for sampling from and fine-tuning language models
 *
 * The version of the OpenAPI document: 1.2.0
 * 
 *
 * NOTE: This file is auto generated by Konfig (https://konfigthis.com).
 * https://konfigthis.com
 * Do not edit the class manually.
 */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateChatCompletionRequest } from '../models';
// @ts-ignore
import { CreateChatCompletionResponse } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
import fetchAdapter from 'konfig-axios-fetch-adapter';
import { createChatCreateCompletionStream } from '../streamChatCreateCompletion';
import { requestChatCreateCompletionStreamParameterHook } from '../streamChatCreateCompletionHook';

/**
 * ChatApi - axios parameter creator
 * @export
 */
export const ChatApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates a completion for the chat message
         * @param {CreateChatCompletionRequest} createChatCompletionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCompletion: async (createChatCompletionRequest: CreateChatCompletionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createChatCompletionRequest' is not null or undefined
            assertParamExists('createCompletion', 'createChatCompletionRequest', createChatCompletionRequest)
            const localVarPath = `/chat/completions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "Authorization", configuration, prefix: "Bearer " })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createChatCompletionRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createChatCompletionRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ChatApi - functional programming interface
 * @export
 */
export const ChatApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChatApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Creates a completion for the chat message
         * @param {ChatApiCreateCompletionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCompletion(requestParameters: ChatApiCreateCompletionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateChatCompletionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCompletion(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        async createCompletionStream(requestParameters: ChatApiCreateCompletionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadableStreamDefaultReader<Uint8Array>>> {
            requestChatCreateCompletionStreamParameterHook({parameters: requestParameters})
            if (options === undefined) options = {}
            options.responseType = "stream"
            options.adapter = fetchAdapter
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCompletion(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ChatApi - factory interface
 * @export
 */
export const ChatApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChatApiFp(configuration)
    return {
        /**
         * 
         * @summary Creates a completion for the chat message
         * @param {ChatApiCreateCompletionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCompletion(requestParameters: ChatApiCreateCompletionRequest, options?: AxiosRequestConfig): AxiosPromise<CreateChatCompletionResponse> {
            return localVarFp.createCompletion(requestParameters, options).then((request) => request(axios, basePath));
        },

        createCompletionStream(requestParameters: ChatApiCreateCompletionRequest, options?: AxiosRequestConfig): AxiosPromise<ReadableStreamDefaultReader<Uint8Array>> {
            return localVarFp.createCompletionStream(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCompletion operation in ChatApi.
 * @export
 * @interface ChatApiCreateCompletionRequest
 */
export type ChatApiCreateCompletionRequest = {
    
} & CreateChatCompletionRequest

/**
 * ChatApi - object-oriented interface
 * @export
 * @class ChatApi
 * @extends {BaseAPI}
 */
export class ChatApi extends BaseAPI {
    /**
     * 
     * @summary Creates a completion for the chat message
     * @param {ChatApiCreateCompletionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    public createCompletion(requestParameters: ChatApiCreateCompletionRequest, options?: AxiosRequestConfig) {
        return ChatApiFp(this.configuration).createCompletion(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    public createCompletionStream(requestParameters: ChatApiCreateCompletionRequest, options?: AxiosRequestConfig) {
        const request = ChatApiFp(this.configuration).createCompletionStream(requestParameters, options).then((request) => request(this.axios, this.basePath));
        return request.then((response) => {
          return { ...response, data: createChatCreateCompletionStream({ response }) };
        });
    }
}
