'use strict';
/*global angular,noty*/

angular
	.module('libApp')

	.config([
		'$stateProvider',
		'$urlRouterProvider',
		'$httpProvider',
		function($stateProvider, $urlRouterProvider, $httpProvider) {
			$urlRouterProvider.otherwise('/books');

			$stateProvider
				.state('app', {
					abstract: true,
					templateUrl: 'components/common/layout.html',
				})

				.state('app.books', {
					url: '/books',
					templateUrl: 'components/books/books.html',
				})

				.state('app.book-details', {
					url: '/books/:id',
					templateUrl: 'components/books/book-details.html',
				})

				.state('app.authors', {
					url: '/authors',
					templateUrl: 'components/authors/authors.html',
				})

				.state('app.author-details', {
					url: '/authors/:id',
					templateUrl: 'components/authors/author-details.html',
				});
		},
	]);
