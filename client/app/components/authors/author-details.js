'use strict';
/*jshint node:true, quotmark:false*/
/*global angular,alert,_,moment*/
angular.module('libApp').controller('authorDetailsController', [
	'$scope',
	'$http',
	'baseUrl',
	'$rootScope',
	'$state',
	'$mdDialog',
	'$stateParams',
	function($scope, $http, baseUrl, $rootScope, $state, $mdDialog, $stateParams) {
		$rootScope.tab = '';

		var id = $stateParams.id;

		let getAuthorDetails = () => {
			$http
				.get(baseUrl + '/author-details/' + id)
				.then(response => {
					$scope.author = response.data.authorDetails;
					$scope.nextAuthorId = response.data.nextAuthorId;
					$scope.prevAuthorId = response.data.prevAuthorId;
					$scope.books = response.data.books;
				})
				.catch(response => {
					$scope.showError('unable to get author details');
				});
		};
		getAuthorDetails();
	},
]);
