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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Conf);
  }
}(this, function(expect, Conf) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CloudCredentialDB', function() {
      beforeEach(function() {
        instance = new Conf.CloudCredentialDB();
      });

      it('should create an instance of CloudCredentialDB', function() {
        // TODO: update the code to test CloudCredentialDB
        expect(instance).to.be.a(Conf.CloudCredentialDB);
      });

    });
  });

}));
