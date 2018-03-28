'use strict';
/*jshint node:true, quotmark:false*/
/*global angular,alert,_,moment*/
angular.module('libApp')
	.controller('authorsController', ['$scope', '$http', 'baseUrl', '$rootScope', '$state', function ($scope, $http, baseUrl, $rootScope, $state) {


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
		$scope.authors = "authors123";
			$rootScope.tab = 'authors';
		

		

}]);