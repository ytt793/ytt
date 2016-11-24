'use strict';

describe('Controller: FormcontrolsCtrl', function () {

  // load the controller's module
  beforeEach(module('anglarjsApp'));

  var FormcontrolsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormcontrolsCtrl = $controller('FormcontrolsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FormcontrolsCtrl.awesomeThings.length).toBe(3);
  });
});
