'use strict';

describe('Controller: PrestationsCtrl', function () {

  // load the controller's module
  beforeEach(module('beautyRedSpaApp'));

  var PrestationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrestationsCtrl = $controller('PrestationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
