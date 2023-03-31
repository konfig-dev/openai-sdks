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
import { CreateEmbeddingRequest } from '../models';
// @ts-ignore
import { CreateEmbeddingResponse } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmbeddingsApi - axios parameter creator
 * @export
 */
export const EmbeddingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates an embedding vector representing the input text.
         * @param {CreateEmbeddingRequest} createEmbeddingRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createEmbeddingRequest: CreateEmbeddingRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createEmbeddingRequest' is not null or undefined
            assertParamExists('create', 'createEmbeddingRequest', createEmbeddingRequest)
            const localVarPath = `/embeddings`;
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
                requestBody: createEmbeddingRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createEmbeddingRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmbeddingsApi - functional programming interface
 * @export
 */
export const EmbeddingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmbeddingsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Creates an embedding vector representing the input text.
         * @param {EmbeddingsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: EmbeddingsApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateEmbeddingResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmbeddingsApi - factory interface
 * @export
 */
export const EmbeddingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmbeddingsApiFp(configuration)
    return {
        /**
         * 
         * @summary Creates an embedding vector representing the input text.
         * @param {EmbeddingsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: EmbeddingsApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<CreateEmbeddingResponse> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in EmbeddingsApi.
 * @export
 * @interface EmbeddingsApiCreateRequest
 */
export type EmbeddingsApiCreateRequest = {
    
} & CreateEmbeddingRequest

/**
 * EmbeddingsApi - object-oriented interface
 * @export
 * @class EmbeddingsApi
 * @extends {BaseAPI}
 */
export class EmbeddingsApi extends BaseAPI {
    /**
     * 
     * @summary Creates an embedding vector representing the input text.
     * @param {EmbeddingsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmbeddingsApi
     */
    public create(requestParameters: EmbeddingsApiCreateRequest, options?: AxiosRequestConfig) {
        return EmbeddingsApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
