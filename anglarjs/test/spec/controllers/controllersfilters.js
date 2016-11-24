'use strict';

describe('Controller: ControllersfiltersCtrl', function () {

  // load the controller's module
  beforeEach(module('anglarjsApp'));

  var ControllersfiltersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ControllersfiltersCtrl = $controller('ControllersfiltersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ControllersfiltersCtrl.awesomeThings.length).toBe(3);
  });
});
