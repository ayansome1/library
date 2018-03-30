'use strict';
/*jshint node:true, quotmark:false*/
/*global angular,alert,_,moment*/
angular.module('libApp').controller('booksController', [
	'$scope',
	'$http',
	'baseUrl',
	'$rootScope',
	'$state',
	'$mdDialog',
	function($scope, $http, baseUrl, $rootScope, $state, $mdDialog) {
		// let  getAllBooks = () => {

		// 	$http.get(baseUrl + "/all-books").then(function (response) {

		// 		console.log(response.data);
		// 	})
		// 	.catch(function () {
		// 		$scope.showError("Unable to fetch all books");
		// 	 });

		// };

		// getAllBooks();
		// $scope.abc = "1234243252";
		$scope.books = '12';
		$rootScope.tab = 'books';

		$scope.showAdvanced = function(ev) {
			$mdDialog.show({
				controller: AddBookController,
				templateUrl: 'components/books/add-book.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: true, // Only for -xs, -sm breakpoints.
			});
			/*.then(
					function(answer) {
						$scope.status = 'You said the information was "' + answer + '".';
					},
					function() {
						$scope.status = 'You cancelled the dialog.';
					}
				)*/
		};

		function AddBookController($scope, $mdDialog) {
			$scope.authors = ['abc', 'def', 'ghi'];

			$scope.hide = function() {
				$mdDialog.hide();
			};

			$scope.cancel = function() {
				$mdDialog.cancel();
			};
		}
	}
]);
