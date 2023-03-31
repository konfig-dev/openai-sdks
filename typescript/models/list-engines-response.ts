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
import { Engine } from './engine';

/**
 * 
 * @export
 * @interface ListEnginesResponse
 */
export interface ListEnginesResponse {
    /**
     * 
     * @type {string}
     * @memberof ListEnginesResponse
     */
    'object': string;
    /**
     * 
     * @type {Array<Engine>}
     * @memberof ListEnginesResponse
     */
    'data': Array<Engine>;
}

