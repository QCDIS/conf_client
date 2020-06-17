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
    describe('Provisioner', function() {
      beforeEach(function() {
        instance = new Conf.Provisioner();
      });

      it('should create an instance of Provisioner', function() {
        // TODO: update the code to test Provisioner
        expect(instance).to.be.a(Conf.Provisioner);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property toscaInterfaceType (base name: "tosca_interface_type")', function() {
        // TODO: update the code to test the property toscaInterfaceType
        expect(instance).to.have.property('toscaInterfaceType');
        // expect(instance.toscaInterfaceType).to.be(expectedValueLiteral);
      });

    });
  });

}));