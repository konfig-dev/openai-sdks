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
import { CreateModerationRequest } from '../models';
// @ts-ignore
import { CreateModerationResponse } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
import { ModerationsApiCustom } from "./moderations-api-custom";
/**
 * ModerationsApi - axios parameter creator
 * @export
 */
export const ModerationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Classifies if text violates OpenAI\'s Content Policy
         * @param {CreateModerationRequest} createModerationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createModerationRequest: CreateModerationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createModerationRequest' is not null or undefined
            assertParamExists('create', 'createModerationRequest', createModerationRequest)
            const localVarPath = `/moderations`;
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
                requestBody: createModerationRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createModerationRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ModerationsApi - functional programming interface
 * @export
 */
export const ModerationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ModerationsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Classifies if text violates OpenAI\'s Content Policy
         * @param {ModerationsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: ModerationsApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateModerationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ModerationsApi - factory interface
 * @export
 */
export const ModerationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ModerationsApiFp(configuration)
    return {
        /**
         * 
         * @summary Classifies if text violates OpenAI\'s Content Policy
         * @param {ModerationsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: ModerationsApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<CreateModerationResponse> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in ModerationsApi.
 * @export
 * @interface ModerationsApiCreateRequest
 */
export type ModerationsApiCreateRequest = {
    
} & CreateModerationRequest

/**
 * ModerationsApi - object-oriented interface
 * @export
 * @class ModerationsApi
 * @extends {BaseAPI}
 */
export class ModerationsApi extends ModerationsApiCustom {
    /**
     * 
     * @summary Classifies if text violates OpenAI\'s Content Policy
     * @param {ModerationsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModerationsApi
     */
    public create(requestParameters: ModerationsApiCreateRequest, options?: AxiosRequestConfig) {
        return ModerationsApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
