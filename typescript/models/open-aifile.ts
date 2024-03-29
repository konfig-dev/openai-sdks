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
 * @interface OpenAIFile
 */
export interface OpenAIFile {
    /**
     * 
     * @type {string}
     * @memberof OpenAIFile
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof OpenAIFile
     */
    'object': string;
    /**
     * 
     * @type {number}
     * @memberof OpenAIFile
     */
    'bytes': number;
    /**
     * 
     * @type {number}
     * @memberof OpenAIFile
     */
    'created_at': number;
    /**
     * 
     * @type {string}
     * @memberof OpenAIFile
     */
    'filename': string;
    /**
     * 
     * @type {string}
     * @memberof OpenAIFile
     */
    'purpose': string;
    /**
     * 
     * @type {string}
     * @memberof OpenAIFile
     */
    'status'?: string;
    /**
     * 
     * @type {object}
     * @memberof OpenAIFile
     */
    'status_details'?: object | null;
}

