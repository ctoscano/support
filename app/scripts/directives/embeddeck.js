'use strict';

/**
 * @ngdoc directive
 * @name campaignntApp.directive:embedDeck
 * @description
 * # embedDeck
 */
angular.module('campaignntApp')
  .directive('embedBrowser', [function () {
    return {
      template: '<a href="{{target}}" target="_blank" class="location">{{target}}</a><div><iframe frameborder="0" ></iframe></div>',
      transclude: true,
      scope : { target : '@' },
      restrict: 'C',
      link: function postLink(scope, element) {
        element.find('iframe').attr('src', scope.target);
      }
    };
  }])
  .directive('embedDeck', ['$location', function ($location) {
    return {
      template: '<iframe frameborder="0"></iframe>',
      scope : { target : '=' },
      restrict: 'E',
      link: function postLink(scope, element) {
        var target = 'http://ntoscano.github.io/membrightVideoPlayer/app/index.html';
        var deckId = $location.search().deck;
        if (deckId) { target += '#?deck=' + deckId; }
        element.find('iframe').attr('src', target);

        scope.target = target;
      }
    };
  }]);
