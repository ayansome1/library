'use strict';
/*jshint node:true, quotmark:false*/
/*global angular,alert,_,moment*/
angular.module('libApp').controller('authorsController', [
	'$scope',
	'$http',
	'baseUrl',
	'$rootScope',
	'$state',
	'$mdDialog',
	function($scope, $http, baseUrl, $rootScope, $state,$mdDialog) {
		
		$rootScope.tab = 'authors';



		$scope.showAdvanced = function(ev) {
			$mdDialog.show({
				controller: AddAuthorController,
				templateUrl: 'components/authors/add-author.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: true, // Only for -xs, -sm breakpoints.
			});

		};

		function AddAuthorController($scope, $mdDialog) {
			$scope.genders = ['Male', 'Female'];

			$scope.hide = function() {
				$mdDialog.hide();
			};

			$scope.cancel = function() {
				$mdDialog.cancel();
			};
		}



		

	}
]);
