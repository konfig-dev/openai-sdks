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
import { CreateClassificationResponseSelectedExamplesInner } from './create-classification-response-selected-examples-inner';

/**
 * 
 * @export
 * @interface CreateClassificationResponse
 */
export interface CreateClassificationResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateClassificationResponse
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateClassificationResponse
     */
    'model'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateClassificationResponse
     */
    'search_model'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateClassificationResponse
     */
    'completion'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateClassificationResponse
     */
    'label'?: string;
    /**
     * 
     * @type {Array<CreateClassificationResponseSelectedExamplesInner>}
     * @memberof CreateClassificationResponse
     */
    'selected_examples'?: Array<CreateClassificationResponseSelectedExamplesInner>;
}
