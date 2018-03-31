/*global require, module*/
'use strict';

let libCtrl = require('../controllers/lib-server-controller');

module.exports = app => {
	app.get('/all-books', libCtrl.getAllBooks);
	app.post('/author', libCtrl.addNewAuthor);
	app.get('/authors', libCtrl.getAllAuthors);
	app.post('/book', libCtrl.addNewBook);
	app.get('/book-details/:id', libCtrl.getBookDetails);
	app.get('/author-details/:id', libCtrl.getAuthorDetails);
};
