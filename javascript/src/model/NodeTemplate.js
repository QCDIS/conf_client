/*
 * CONF
 * Quality-Critical Manager allows application developers to plan a customized virtual infrastructure based on application level constraints on QoS and resource budgets, provisioning the virtual infrastructure, deploy application components onto the virtual infrastructure, and start execution on demand using TOSCA.
 *
 * OpenAPI spec version: 3.0.0
 * Contact: z.zhao@uva.nl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Conf) {
      root.Conf = {};
    }
    root.Conf.NodeTemplate = factory(root.Conf.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NodeTemplate model module.
   * @module model/NodeTemplate
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>NodeTemplate</code>.
   * @alias module:model/NodeTemplate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NodeTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeTemplate} obj Optional instance to populate.
   * @return {module:model/NodeTemplate} The populated <code>NodeTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
    }
    return obj;
  }

  return exports;

}));
