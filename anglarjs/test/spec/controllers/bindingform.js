'use strict';

describe('Controller: BindingformCtrl', function () {

  // load the controller's module
  beforeEach(module('anglarjsApp'));

  var BindingformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BindingformCtrl = $controller('BindingformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BindingformCtrl.awesomeThings.length).toBe(3);
  });
});
