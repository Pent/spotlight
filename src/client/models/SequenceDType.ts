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
import type { Dtype1 } from './Dtype1';
import { Dtype1FromJSON, Dtype1FromJSONTyped, Dtype1ToJSON } from './Dtype1';

/**
 *
 * @export
 * @interface SequenceDType
 */
export interface SequenceDType {
    /**
     *
     * @type {string}
     * @memberof SequenceDType
     */
    name?: SequenceDTypeNameEnum;
    /**
     *
     * @type {Dtype1}
     * @memberof SequenceDType
     */
    dtype: Dtype1;
    /**
     *
     * @type {string}
     * @memberof SequenceDType
     */
    length?: string;
}

/**
 * @export
 */
export const SequenceDTypeNameEnum = {
    Sequence: 'Sequence',
} as const;
export type SequenceDTypeNameEnum =
    typeof SequenceDTypeNameEnum[keyof typeof SequenceDTypeNameEnum];

/**
 * Check if a given object implements the SequenceDType interface.
 */
export function instanceOfSequenceDType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && 'dtype' in value;

    return isInstance;
}

export function SequenceDTypeFromJSON(json: any): SequenceDType {
    return SequenceDTypeFromJSONTyped(json, false);
}

export function SequenceDTypeFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): SequenceDType {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !exists(json, 'name') ? undefined : json['name'],
        dtype: Dtype1FromJSON(json['dtype']),
        length: !exists(json, 'length') ? undefined : json['length'],
    };
}

export function SequenceDTypeToJSON(value?: SequenceDType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        dtype: Dtype1ToJSON(value.dtype),
        length: value.length,
    };
}
