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
import { CreateEmbeddingResponseDataInner } from './create-embedding-response-data-inner';
// May contain unused imports in some cases
// @ts-ignore
import { CreateEmbeddingResponseUsage } from './create-embedding-response-usage';

/**
 * 
 * @export
 * @interface CreateEmbeddingResponse
 */
export interface CreateEmbeddingResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateEmbeddingResponse
     */
    'object': string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmbeddingResponse
     */
    'model': string;
    /**
     * 
     * @type {Array<CreateEmbeddingResponseDataInner>}
     * @memberof CreateEmbeddingResponse
     */
    'data': Array<CreateEmbeddingResponseDataInner>;
    /**
     * 
     * @type {CreateEmbeddingResponseUsage}
     * @memberof CreateEmbeddingResponse
     */
    'usage': CreateEmbeddingResponseUsage;
}

