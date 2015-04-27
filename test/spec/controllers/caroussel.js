'use strict';

describe('Controller: CarousselCtrl', function () {

  // load the controller's module
  beforeEach(module('beautyRedSpaApp'));

  var CarousselCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarousselCtrl = $controller('CarousselCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
