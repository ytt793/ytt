'use strict';

describe('Controller: NonimmediateformCtrl', function () {

  // load the controller's module
  beforeEach(module('anglarjsApp'));

  var NonimmediateformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NonimmediateformCtrl = $controller('NonimmediateformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NonimmediateformCtrl.awesomeThings.length).toBe(3);
  });
});
