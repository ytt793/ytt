'use strict';

describe('Controller: TriggersformCtrl', function () {

  // load the controller's module
  beforeEach(module('anglarjsApp'));

  var TriggersformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TriggersformCtrl = $controller('TriggersformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TriggersformCtrl.awesomeThings.length).toBe(3);
  });
});
