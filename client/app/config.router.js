'use strict';
/*global angular,noty*/

angular.module('libApp')

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('app', {
			abstract: true,
			templateUrl: 'components/common/layout.html'
		})
		
		.state('app.home', {
			url: '/',
			templateUrl: 'components/home/home.html',
		});

}])

;