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
import { CreateCompletionRequest } from '../models';
// @ts-ignore
import { CreateCompletionResponse } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
import { CompletionsApiCustom } from "./completions-api-custom";
/**
 * CompletionsApi - axios parameter creator
 * @export
 */
export const CompletionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates a completion for the provided prompt and parameters
         * @param {CreateCompletionRequest} createCompletionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createCompletionRequest: CreateCompletionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createCompletionRequest' is not null or undefined
            assertParamExists('create', 'createCompletionRequest', createCompletionRequest)
            const localVarPath = `/completions`;
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
                requestBody: createCompletionRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createCompletionRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CompletionsApi - functional programming interface
 * @export
 */
export const CompletionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CompletionsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Creates a completion for the provided prompt and parameters
         * @param {CompletionsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: CompletionsApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateCompletionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CompletionsApi - factory interface
 * @export
 */
export const CompletionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CompletionsApiFp(configuration)
    return {
        /**
         * 
         * @summary Creates a completion for the provided prompt and parameters
         * @param {CompletionsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: CompletionsApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<CreateCompletionResponse> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in CompletionsApi.
 * @export
 * @interface CompletionsApiCreateRequest
 */
export type CompletionsApiCreateRequest = {
    
} & CreateCompletionRequest

/**
 * CompletionsApi - object-oriented interface
 * @export
 * @class CompletionsApi
 * @extends {BaseAPI}
 */
export class CompletionsApi extends CompletionsApiCustom {
    /**
     * 
     * @summary Creates a completion for the provided prompt and parameters
     * @param {CompletionsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompletionsApi
     */
    public create(requestParameters: CompletionsApiCreateRequest, options?: AxiosRequestConfig) {
        return CompletionsApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
