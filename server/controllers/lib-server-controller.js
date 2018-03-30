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
  let query = 'select * from books;';
  // params.push();
  let sql = connection.query(query, params, function(err, results) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
  console.log(sql.sql);
  connection.end();
};

let addNewAuthor = (req, res) => {
  // res.send("all books here");
  console.log(req.body.author);

  let obj = req.body.author;


  let params = [];

  let connection = mysql.createConnection(connInfo);
  let query1 = `insert into authors(name,dob,gender,country,about) 
                values(?,?,?,?,?);`;
  params.push(obj.name,new Date(obj.dob),obj.gender,obj.country,obj.about);
  // let query2 = `select * from authors;`;
  // params.push();
  let sql = connection.query(query1/*+query2*/, params, function(err, results) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send(/*results[1]*/);
    }
  });
  console.log(sql.sql);
  connection.end();
};

let getAllAuthors = (req, res) => {
  // res.send("all books here");

  let params = [];

  let connection = mysql.createConnection(connInfo);
  let query = 'select author_id,name,gender,country,about,TIMESTAMPDIFF(YEAR,dob,CURDATE()) as age from authors;';
  // params.push();
  let sql = connection.query(query, params, function(err, results) {
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
  getAllBooks,
  addNewAuthor,
  getAllAuthors
};
