var mysql      = require('mysql');
var fs = require('fs');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
   database: "pankaj_db"
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});

module.exports = connection;
