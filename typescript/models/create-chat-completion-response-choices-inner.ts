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
import { ChatCompletionResponseMessage } from './chat-completion-response-message';

/**
 * 
 * @export
 * @interface CreateChatCompletionResponseChoicesInner
 */
export interface CreateChatCompletionResponseChoicesInner {
    /**
     * 
     * @type {number}
     * @memberof CreateChatCompletionResponseChoicesInner
     */
    'index'?: number;
    /**
     * 
     * @type {ChatCompletionResponseMessage}
     * @memberof CreateChatCompletionResponseChoicesInner
     */
    'message'?: ChatCompletionResponseMessage;
    /**
     * 
     * @type {string}
     * @memberof CreateChatCompletionResponseChoicesInner
     */
    'finish_reason'?: string;
}
