'use strict';

describe('Controller: ModifyingformCtrl', function () {

  // load the controller's module
  beforeEach(module('anglarjsApp'));

  var ModifyingformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModifyingformCtrl = $controller('ModifyingformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModifyingformCtrl.awesomeThings.length).toBe(3);
  });
});
