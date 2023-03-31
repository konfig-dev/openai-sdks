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

// May contain unused imports in some cases
// @ts-ignore
import { CreateSearchResponseDataInner } from './create-search-response-data-inner';

/**
 * 
 * @export
 * @interface CreateSearchResponse
 */
export interface CreateSearchResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateSearchResponse
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSearchResponse
     */
    'model'?: string;
    /**
     * 
     * @type {Array<CreateSearchResponseDataInner>}
     * @memberof CreateSearchResponse
     */
    'data'?: Array<CreateSearchResponseDataInner>;
}

