'use strict';
/*jshint node:true, quotmark:false*/
/*global angular,alert,_,moment*/
angular.module('libApp').controller('bookDetailsController', [
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

		let getBookDetails = () => {
			$http
				.get(baseUrl + '/book-details/' + id)
				.then(response => {
					console.log(response.data);
					$scope.book = response.data.bookDetails;
					$scope.nextBookId = response.data.nextBookId;
					$scope.prevBookId = response.data.prevBookId;
				})
				.catch(response => {
					$scope.showError('unable to get book details');
				});
		};
		getBookDetails();
	},
]);
