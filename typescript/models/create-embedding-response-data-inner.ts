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


/**
 * 
 * @export
 * @interface CreateEmbeddingResponseDataInner
 */
export interface CreateEmbeddingResponseDataInner {
    /**
     * 
     * @type {number}
     * @memberof CreateEmbeddingResponseDataInner
     */
    'index': number;
    /**
     * 
     * @type {string}
     * @memberof CreateEmbeddingResponseDataInner
     */
    'object': string;
    /**
     * 
     * @type {Array<number>}
     * @memberof CreateEmbeddingResponseDataInner
     */
    'embedding': Array<number>;
}
