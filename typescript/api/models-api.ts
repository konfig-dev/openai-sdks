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
import { DeleteModelResponse } from '../models';
// @ts-ignore
import { ListModelsResponse } from '../models';
// @ts-ignore
import { Model } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ModelsApi - axios parameter creator
 * @export
 */
export const ModelsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete a fine-tuned model. You must have the Owner role in your organization.
         * @param {string} model The model to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete: async (model: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'model' is not null or undefined
            assertParamExists('delete', 'model', model)
            const localVarPath = `/models/{model}`
                .replace(`{${"model"}}`, encodeURIComponent(String(model)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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
         * @summary Lists the currently available models, and provides basic information about each one such as the owner and availability.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/models`;
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
         * @summary Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
         * @param {string} model The ID of the model to use for this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve: async (model: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'model' is not null or undefined
            assertParamExists('retrieve', 'model', model)
            const localVarPath = `/models/{model}`
                .replace(`{${"model"}}`, encodeURIComponent(String(model)));
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
 * ModelsApi - functional programming interface
 * @export
 */
export const ModelsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ModelsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Delete a fine-tuned model. You must have the Owner role in your organization.
         * @param {ModelsApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete(requestParameters: ModelsApiDeleteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteModelResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete(requestParameters.model, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Lists the currently available models, and provides basic information about each one such as the owner and availability.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListModelsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
         * @param {ModelsApiRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieve(requestParameters: ModelsApiRetrieveRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Model>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieve(requestParameters.model, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ModelsApi - factory interface
 * @export
 */
export const ModelsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ModelsApiFp(configuration)
    return {
        /**
         * 
         * @summary Delete a fine-tuned model. You must have the Owner role in your organization.
         * @param {ModelsApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete(requestParameters: ModelsApiDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<DeleteModelResponse> {
            return localVarFp.delete(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists the currently available models, and provides basic information about each one such as the owner and availability.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(options?: AxiosRequestConfig): AxiosPromise<ListModelsResponse> {
            return localVarFp.list(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
         * @param {ModelsApiRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve(requestParameters: ModelsApiRetrieveRequest, options?: AxiosRequestConfig): AxiosPromise<Model> {
            return localVarFp.retrieve(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for delete operation in ModelsApi.
 * @export
 * @interface ModelsApiDeleteRequest
 */
export type ModelsApiDeleteRequest = {
    
    /**
    * The model to delete
    * @type {string}
    * @memberof ModelsApiDelete
    */
    readonly model: string
    
}

/**
 * Request parameters for retrieve operation in ModelsApi.
 * @export
 * @interface ModelsApiRetrieveRequest
 */
export type ModelsApiRetrieveRequest = {
    
    /**
    * The ID of the model to use for this request
    * @type {string}
    * @memberof ModelsApiRetrieve
    */
    readonly model: string
    
}

/**
 * ModelsApi - object-oriented interface
 * @export
 * @class ModelsApi
 * @extends {BaseAPI}
 */
export class ModelsApi extends BaseAPI {
    /**
     * 
     * @summary Delete a fine-tuned model. You must have the Owner role in your organization.
     * @param {ModelsApiDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelsApi
     */
    public delete(requestParameters: ModelsApiDeleteRequest, options?: AxiosRequestConfig) {
        return ModelsApiFp(this.configuration).delete(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists the currently available models, and provides basic information about each one such as the owner and availability.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelsApi
     */
    public list(options?: AxiosRequestConfig) {
        return ModelsApiFp(this.configuration).list(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
     * @param {ModelsApiRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelsApi
     */
    public retrieve(requestParameters: ModelsApiRetrieveRequest, options?: AxiosRequestConfig) {
        return ModelsApiFp(this.configuration).retrieve(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
