/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Set layout request model.
 * @export
 * @interface SetLayoutRequest
 */
export interface SetLayoutRequest {
    /**
     *
     * @type {object}
     * @memberof SetLayoutRequest
     */
    layout: object;
}

/**
 * Check if a given object implements the SetLayoutRequest interface.
 */
export function instanceOfSetLayoutRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && 'layout' in value;

    return isInstance;
}

export function SetLayoutRequestFromJSON(json: any): SetLayoutRequest {
    return SetLayoutRequestFromJSONTyped(json, false);
}

export function SetLayoutRequestFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): SetLayoutRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        layout: json['layout'],
    };
}

export function SetLayoutRequestToJSON(value?: SetLayoutRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        layout: value.layout,
    };
}