'use strict';
/*jshint node:true, quotmark:false*/
/*global angular,alert,_,moment*/
angular.module('libApp')
	.controller('booksController', ['$scope', '$http', 'baseUrl', '$rootScope', '$state', function ($scope, $http, baseUrl, $rootScope, $state) {


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
		$scope.books = "books123";

		

}]);