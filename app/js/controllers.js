'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('BackgroundMainCtrl', ['$scope', 'RedirectService', function($scope, RedirectService){
  RedirectService.setup();
}]);
