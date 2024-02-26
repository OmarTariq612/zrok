/**
 * zrok
 * zrok client access
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ResetPasswordRequestRequest model module.
 * @module model/ResetPasswordRequestRequest
 * @version 0.3.0
 */
class ResetPasswordRequestRequest {
    /**
     * Constructs a new <code>ResetPasswordRequestRequest</code>.
     * @alias module:model/ResetPasswordRequestRequest
     */
    constructor() { 
        
        ResetPasswordRequestRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResetPasswordRequestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResetPasswordRequestRequest} obj Optional instance to populate.
     * @return {module:model/ResetPasswordRequestRequest} The populated <code>ResetPasswordRequestRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResetPasswordRequestRequest();

            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResetPasswordRequestRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResetPasswordRequestRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['emailAddress'] && !(typeof data['emailAddress'] === 'string' || data['emailAddress'] instanceof String)) {
            throw new Error("Expected the field `emailAddress` to be a primitive type in the JSON string but got " + data['emailAddress']);
        }

        return true;
    }


}



/**
 * @member {String} emailAddress
 */
ResetPasswordRequestRequest.prototype['emailAddress'] = undefined;






export default ResetPasswordRequestRequest;
