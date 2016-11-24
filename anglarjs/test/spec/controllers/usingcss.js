'use strict';

describe('Controller: UsingcssCtrl', function () {

  // load the controller's module
  beforeEach(module('anglarjsApp'));

  var UsingcssCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsingcssCtrl = $controller('UsingcssCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsingcssCtrl.awesomeThings.length).toBe(3);
  });
});
