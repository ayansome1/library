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
  let query = `select b.book_id,b.name,b.author_id,b.isbn,b.description,
      a.name as author_name from books b left join authors a 
      on b.author_id = a.author_id;`;
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
  params.push(obj.name, new Date(obj.dob), obj.gender, obj.country, obj.about);
  // let query2 = `select * from authors;`;
  // params.push();
  let sql = connection.query(query1 /*+query2*/, params, function(err, results) {
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
  let query =
    'select author_id,name,gender,country,about,TIMESTAMPDIFF(YEAR,dob,CURDATE()) as age from authors;';
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

let addNewBook = (req, res) => {
  // res.send("all books here");
  // console.log(req.body.author);

  let obj = req.body.book;

  let params = [];

  let connection = mysql.createConnection(connInfo);
  let query1 = `insert into books(name,author_id,isbn,description) 
                values(?,?,?,?);`;
  params.push(obj.name, obj.author_id, obj.isbn, obj.description);
  // let query2 = `select * from authors;`;
  // params.push();
  let sql = connection.query(query1 /*+query2*/, params, function(err, results) {
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

let getBookDetails = (req, res) => {
  
  let id = req.params.id;
  let params = [];

  let connection = mysql.createConnection(connInfo);
  let query1 = `select b.book_id,b.name,b.author_id,b.isbn,b.description,
                a.name as author_name from books b left join authors a 
                on b.author_id = a.author_id where book_id = ?;`;
  let query2 = `select min(book_id) as next from books where book_id > ?;`;
  let query3 = `select max(book_id) as prev from books where book_id < ?;`;


  params.push(id,id,id);

  let sql = connection.query(query1 + query2 + query3, params, function(err, results) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      let obj = {bookDetails : results[0][0],
                 prevBookId : results[2][0].prev,
                 nextBookId : results[1][0].next}
      res.send(obj);
    }
  });
  console.log(sql.sql);
  connection.end();
};


let getAuthorDetails = (req, res) => {
  
  let id = req.params.id;
  let params = [];

  let connection = mysql.createConnection(connInfo);
  let query1 = `select author_id,name,gender,country,about,
                TIMESTAMPDIFF(YEAR,dob,CURDATE()) as age from authors 
                where author_id = ?;`;
  let query2 = `select * from books where author_id = ?;`;
  let query3 = `select min(author_id) as next from authors where author_id > ?;`;
  let query4 = `select max(author_id) as prev from authors where author_id < ?;`;


  params.push(id,id,id,id);

  let sql = connection.query(query1 + query2 + query3 + query4, params, function(err, results) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {

      console.log("----------------\n",results,"\n------------");


      let obj = {authorDetails : results[0][0],
                  books : results[1],
                 prevAuthorId : results[3][0].prev,
                 nextAuthorId : results[2][0].next}
      res.send(obj);
    }
  });
  // console.log(sql.sql);
  connection.end();
};

module.exports = {
  getAllBooks,
  addNewAuthor,
  getAllAuthors,
  addNewBook,
  getBookDetails,
  getAuthorDetails
};
