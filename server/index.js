'use strict';
/* global require*/
/* global process, console, authenticated */
/* jshint node: true */
var express = require('express');
var http = require('http');
var cors = require('cors');
var app = express();
var mysql = require('mysql');
var _ = require('underscore');
var config = require('./config/config.js');
var bodyParser = require('body-parser');
let q = require('q');

var connInfo = config.sqlconn;

app.use(
	cors({
		origin: [config.lib.corsorigin],
		credentials: true,
	})
);

app.use(bodyParser.json()); // to support JSON-encoded bodies

if (!process.env.NODE_ENV) {
	app.use(require('morgan')('dev'));
}

let libRoutes = require('./routes/lib-server-routes.js');

libRoutes(app);

var server = http.createServer(app);

server.listen(config.lib.port);
