'use strict';
/*jshint node:true, quotmark:false*/
/*global angular,alert*/
angular.module('libApp')
	.controller('libCtrl', ['$scope', '$http', 'baseUrl', '$rootScope', '$state', function ($scope, $http, baseUrl, $rootScope, $state) {

		$scope.gotoBooksPage = () => {
			$state.go('app.books');
		}

		$scope.gotoAuthorsPage = () => {
			$state.go('app.authors');
		}

	}]);