'use strict';
/*global angular,noty*/

angular.module('libApp')

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

	$urlRouterProvider.otherwise('/books');

	$stateProvider
		.state('app', {
			abstract: true,
			templateUrl: 'components/common/layout.html'
		})
		
		.state('app.books', {
			url: '/books',
			templateUrl: 'components/books/books.html',
		})

		.state('app.authors', {
			url: '/authors',
			templateUrl: 'components/authors/authors.html',
		});

}])

;