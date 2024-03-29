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
import { CreateCompletionResponseChoicesInner } from './create-completion-response-choices-inner';
// May contain unused imports in some cases
// @ts-ignore
import { CreateCompletionResponseUsage } from './create-completion-response-usage';

/**
 * 
 * @export
 * @interface CreateEditResponse
 */
export interface CreateEditResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateEditResponse
     */
    'object': string;
    /**
     * 
     * @type {number}
     * @memberof CreateEditResponse
     */
    'created': number;
    /**
     * 
     * @type {Array<CreateCompletionResponseChoicesInner>}
     * @memberof CreateEditResponse
     */
    'choices': Array<CreateCompletionResponseChoicesInner>;
    /**
     * 
     * @type {CreateCompletionResponseUsage}
     * @memberof CreateEditResponse
     */
    'usage': CreateCompletionResponseUsage;
}

