'use strict';

/**
 * @ngdoc directive
 * @name campaignntApp.directive:embedDeck
 * @description
 * # embedDeck
 */
angular.module('campaignntApp')
  .directive('embedDeck', ['$location', function ($location) {
    return {
      template: '<iframe frameborder="0"></iframe>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var target = 'http://ntoscano.github.io/membrightVideoPlayer/app/index.html';
        var deckId = $location.search().deck;
        if (deckId) target += '#?deck=' + deckId;
        element.find('iframe').attr('src', target);
      }
    };
  }]);
