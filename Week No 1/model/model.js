const mysql =require('mysql');
// const routes = require('./router/test.Router.js');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "siyatech@194",
    database: "week1"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  module.exports = {con};