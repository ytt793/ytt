'use strict';

describe('Controller: YttCtrl', function () {

  // load the controller's module
  beforeEach(module('anglarjsApp'));

  var YttCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YttCtrl = $controller('YttCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(YttCtrl.awesomeThings.length).toBe(3);
  });
});
