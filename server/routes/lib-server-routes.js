/*global require, module*/
'use strict';

let libCtrl = require('../controllers/lib-server-controller');


module.exports = (app/*, auth*/) => {

	app.get('/all-books'/*,auth*/, libCtrl.getAllBooks);
	app.post('/author',libCtrl.addNewAuthor);
	app.get('/authors',libCtrl.getAllAuthors);

};