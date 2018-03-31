/*global require, module*/
'use strict';

let libCtrl = require('../controllers/lib-server-controller');


module.exports = (app/*, auth*/) => {

	app.get('/all-books'/*,auth*/, libCtrl.getAllBooks);
	app.post('/author',libCtrl.addNewAuthor);
	app.get('/authors',libCtrl.getAllAuthors);
	app.post('/book',libCtrl.addNewBook);
	app.get('/book-details/:id',libCtrl.getBookDetails);


};