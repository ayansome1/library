/*global require, module*/
'use strict';

let libCtrl = require('../controllers/lib-server-controller');


module.exports = (app/*, auth*/) => {

	app.get('/all-books'/*,auth*/, libCtrl.getAllBooks);
};