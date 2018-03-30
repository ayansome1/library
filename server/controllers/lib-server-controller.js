'use strict';
/* global require,module*/
let q = require('q');
let config = require('../config/config.js');
let mysql = require('mysql');
let connInfo = config.sqlconn;
connInfo.multipleStatements = true;


let getAllBooks = (req, res) => {

  // res.send("all books here");


  let params = [];

  let connection = mysql.createConnection(connInfo);
  let query = "select * from books;";
  // params.push();
  let sql = connection.query(query, params, function (err, results) {

    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }

  });
  console.log(sql.sql);
  connection.end();

};



module.exports = {
  getAllBooks
};