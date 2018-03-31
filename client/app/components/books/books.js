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
		};

		function AddBookController($scope, $mdDialog) {
			$scope.hide = function() {
				$mdDialog.hide();
			};

			$scope.cancel = function() {
				$mdDialog.cancel();
			};

			let getAllAuthors = () => {
				$http
					.get(baseUrl + '/authors')
					.then(response => {
						console.log(response.data);

						$scope.authors = response.data;
					})
					.catch(response => {
						$scope.$parent.showError('Unable to fetch authors');
					});
			};

			getAllAuthors();

			$scope.save = book => {
				console.log(book);
				$http
					.post(baseUrl + '/book', { book: book })
					.then(response => {
						console.log(response.data);
						$mdDialog.cancel();
						getAllBooks();
					})
					.catch(response => {
						$scope.$parent.showError('Error in adding new book');
					});
			};
		}

		let getAllBooks = () => {
			$http
				.get(baseUrl + '/all-books')
				.then(response => {
					$scope.books = response.data;
					$scope.bookCount = response.data.length;
					console.log(response.data);
				})
				.catch(response => {
					$scope.showError('error in fetching all books');
				});
		};

		getAllBooks();
	},
]);
