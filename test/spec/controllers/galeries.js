'use strict';

describe('Controller: GaleriesCtrl', function () {

  // load the controller's module
  beforeEach(module('beautyRedSpaApp'));

  var GaleriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GaleriesCtrl = $controller('GaleriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
