'use strict';

describe('Directive: embedDeck', function () {

  // load the directive's module
  beforeEach(module('campaignntApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<embed-deck></embed-deck>');
    element = $compile(element)(scope);
    expect(element.find('iframe').attr('src')).toBe('http://ntoscano.github.io/membrightVideoPlayer/app/index.html');
  }));
});
