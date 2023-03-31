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
import { CreateFineTuneRequest } from '../models';
// @ts-ignore
import { FineTune } from '../models';
// @ts-ignore
import { ListFineTuneEventsResponse } from '../models';
// @ts-ignore
import { ListFineTunesResponse } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * FinetunesApi - axios parameter creator
 * @export
 */
export const FinetunesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Immediately cancel a fine-tune job. 
         * @param {string} fineTuneId The ID of the fine-tune job to cancel 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancel: async (fineTuneId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fineTuneId' is not null or undefined
            assertParamExists('cancel', 'fineTuneId', fineTuneId)
            const localVarPath = `/fine-tunes/{fine_tune_id}/cancel`
                .replace(`{${"fine_tune_id"}}`, encodeURIComponent(String(fineTuneId)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
         * @param {CreateFineTuneRequest} createFineTuneRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createFineTuneRequest: CreateFineTuneRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createFineTuneRequest' is not null or undefined
            assertParamExists('create', 'createFineTuneRequest', createFineTuneRequest)
            const localVarPath = `/fine-tunes`;
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
                requestBody: createFineTuneRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createFineTuneRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List your organization\'s fine-tuning jobs 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/fine-tunes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "Authorization", configuration, prefix: "Bearer " })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get fine-grained status updates for a fine-tune job. 
         * @param {string} fineTuneId The ID of the fine-tune job to get events for. 
         * @param {boolean} [stream] Whether to stream events for the fine-tune job. If set to true, events will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available. The stream will terminate with a &#x60;data: [DONE]&#x60; message when the job is finished (succeeded, cancelled, or failed).  If set to false, only events generated so far will be returned. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEvents: async (fineTuneId: string, stream?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fineTuneId' is not null or undefined
            assertParamExists('listEvents', 'fineTuneId', fineTuneId)
            const localVarPath = `/fine-tunes/{fine_tune_id}/events`
                .replace(`{${"fine_tune_id"}}`, encodeURIComponent(String(fineTuneId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "Authorization", configuration, prefix: "Bearer " })
            if (stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
         * @param {string} fineTuneId The ID of the fine-tune job 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve: async (fineTuneId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fineTuneId' is not null or undefined
            assertParamExists('retrieve', 'fineTuneId', fineTuneId)
            const localVarPath = `/fine-tunes/{fine_tune_id}`
                .replace(`{${"fine_tune_id"}}`, encodeURIComponent(String(fineTuneId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "Authorization", configuration, prefix: "Bearer " })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FinetunesApi - functional programming interface
 * @export
 */
export const FinetunesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FinetunesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Immediately cancel a fine-tune job. 
         * @param {FinetunesApiCancelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancel(requestParameters: FinetunesApiCancelRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FineTune>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancel(requestParameters.fineTuneId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
         * @param {FinetunesApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: FinetunesApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FineTune>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List your organization\'s fine-tuning jobs 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListFineTunesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get fine-grained status updates for a fine-tune job. 
         * @param {FinetunesApiListEventsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listEvents(requestParameters: FinetunesApiListEventsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListFineTuneEventsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listEvents(requestParameters.fineTuneId, requestParameters.stream, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
         * @param {FinetunesApiRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieve(requestParameters: FinetunesApiRetrieveRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FineTune>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieve(requestParameters.fineTuneId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FinetunesApi - factory interface
 * @export
 */
export const FinetunesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FinetunesApiFp(configuration)
    return {
        /**
         * 
         * @summary Immediately cancel a fine-tune job. 
         * @param {FinetunesApiCancelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancel(requestParameters: FinetunesApiCancelRequest, options?: AxiosRequestConfig): AxiosPromise<FineTune> {
            return localVarFp.cancel(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
         * @param {FinetunesApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: FinetunesApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<FineTune> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List your organization\'s fine-tuning jobs 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(options?: AxiosRequestConfig): AxiosPromise<ListFineTunesResponse> {
            return localVarFp.list(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get fine-grained status updates for a fine-tune job. 
         * @param {FinetunesApiListEventsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEvents(requestParameters: FinetunesApiListEventsRequest, options?: AxiosRequestConfig): AxiosPromise<ListFineTuneEventsResponse> {
            return localVarFp.listEvents(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
         * @param {FinetunesApiRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve(requestParameters: FinetunesApiRetrieveRequest, options?: AxiosRequestConfig): AxiosPromise<FineTune> {
            return localVarFp.retrieve(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for cancel operation in FinetunesApi.
 * @export
 * @interface FinetunesApiCancelRequest
 */
export type FinetunesApiCancelRequest = {
    
    /**
    * The ID of the fine-tune job to cancel 
    * @type {string}
    * @memberof FinetunesApiCancel
    */
    readonly fineTuneId: string
    
}

/**
 * Request parameters for create operation in FinetunesApi.
 * @export
 * @interface FinetunesApiCreateRequest
 */
export type FinetunesApiCreateRequest = {
    
} & CreateFineTuneRequest

/**
 * Request parameters for listEvents operation in FinetunesApi.
 * @export
 * @interface FinetunesApiListEventsRequest
 */
export type FinetunesApiListEventsRequest = {
    
    /**
    * The ID of the fine-tune job to get events for. 
    * @type {string}
    * @memberof FinetunesApiListEvents
    */
    readonly fineTuneId: string
    
    /**
    * Whether to stream events for the fine-tune job. If set to true, events will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available. The stream will terminate with a `data: [DONE]` message when the job is finished (succeeded, cancelled, or failed).  If set to false, only events generated so far will be returned. 
    * @type {boolean}
    * @memberof FinetunesApiListEvents
    */
    readonly stream?: boolean
    
}

/**
 * Request parameters for retrieve operation in FinetunesApi.
 * @export
 * @interface FinetunesApiRetrieveRequest
 */
export type FinetunesApiRetrieveRequest = {
    
    /**
    * The ID of the fine-tune job 
    * @type {string}
    * @memberof FinetunesApiRetrieve
    */
    readonly fineTuneId: string
    
}

/**
 * FinetunesApi - object-oriented interface
 * @export
 * @class FinetunesApi
 * @extends {BaseAPI}
 */
export class FinetunesApi extends BaseAPI {
    /**
     * 
     * @summary Immediately cancel a fine-tune job. 
     * @param {FinetunesApiCancelRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FinetunesApi
     */
    public cancel(requestParameters: FinetunesApiCancelRequest, options?: AxiosRequestConfig) {
        return FinetunesApiFp(this.configuration).cancel(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
     * @param {FinetunesApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FinetunesApi
     */
    public create(requestParameters: FinetunesApiCreateRequest, options?: AxiosRequestConfig) {
        return FinetunesApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List your organization\'s fine-tuning jobs 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FinetunesApi
     */
    public list(options?: AxiosRequestConfig) {
        return FinetunesApiFp(this.configuration).list(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get fine-grained status updates for a fine-tune job. 
     * @param {FinetunesApiListEventsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FinetunesApi
     */
    public listEvents(requestParameters: FinetunesApiListEventsRequest, options?: AxiosRequestConfig) {
        return FinetunesApiFp(this.configuration).listEvents(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
     * @param {FinetunesApiRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FinetunesApi
     */
    public retrieve(requestParameters: FinetunesApiRetrieveRequest, options?: AxiosRequestConfig) {
        return FinetunesApiFp(this.configuration).retrieve(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}