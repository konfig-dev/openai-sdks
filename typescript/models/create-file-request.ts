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
 * @interface CreateFileRequest
 */
export interface CreateFileRequest {
    /**
     * Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be uploaded.  If the `purpose` is set to \"fine-tune\", each line is a JSON record with \"prompt\" and \"completion\" fields representing your [training examples](/docs/guides/fine-tuning/prepare-training-data). 
     * @type {File}
     * @memberof CreateFileRequest
     */
    'file': File;
    /**
     * The intended purpose of the uploaded documents.  Use \"fine-tune\" for [Fine-tuning](/docs/api-reference/fine-tunes). This allows us to validate the format of the uploaded file. 
     * @type {string}
     * @memberof CreateFileRequest
     */
    'purpose': string;
}

