'use strict';

describe('Controller: PledgeCtrl', function () {

  // load the controller's module
  beforeEach(module('campaignntApp'));

  var PledgeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PledgeCtrl = $controller('PledgeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a pledge object to the scope', function () {
    expect(typeof scope.pledge).toBe('object');
  });
});
