'use strict';

/**
 * @ngdoc function
 * @name campaignntApp.controller:PledgeCtrl
 * @description
 * # PledgeCtrl
 * Controller of the campaignntApp
 */
angular.module('campaignntApp')
    .controller('PledgeCtrl', ['$scope', '$firebase', function ($scope, $firebase) {
        var ref = new Firebase('https://campaignnt.firebaseio.com/pledges');
        var sync = $firebase(ref);
        $scope.sync = sync;
        $scope.pledges = sync.$asArray();
        $scope.pledge = {
            encourage : {
                name : '',
                email : '',
                msg : ''
            },
            support : {
                value : '',
                type : ''
            },
            promote : {
                value : ''
            }
        };
        $scope.email = '';
        $scope.showThanks = false;
        $scope.showValidation = false;
        window.scope123 = $scope;

        $scope.go = function (pledge) {
            $scope.showValidation = true;
            if ($scope.pledgeForm.$valid) {
                $scope.pledges.$add(pledge);
                $scope.email = pledge.encourage.email;
                $scope.showThanks = true;
                mixpanel.track('pledge', pledge);
            }
        };
    }]);
