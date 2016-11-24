'use strict';

describe('Controller: ValidationformCtrl', function () {

  // load the controller's module
  beforeEach(module('anglarjsApp'));

  var ValidationformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ValidationformCtrl = $controller('ValidationformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ValidationformCtrl.awesomeThings.length).toBe(3);
  });
});
