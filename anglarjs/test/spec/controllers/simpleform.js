'use strict';

describe('Controller: SimpleformCtrl', function () {

  // load the controller's module
  beforeEach(module('anglarjsApp'));

  var SimpleformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SimpleformCtrl = $controller('SimpleformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SimpleformCtrl.awesomeThings.length).toBe(3);
  });
});
