'use strict';

describe('Controller: BindingCtrl', function () {

  // load the controller's module
  beforeEach(module('anglarjsApp'));

  var BindingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BindingCtrl = $controller('BindingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BindingCtrl.awesomeThings.length).toBe(3);
  });
});
