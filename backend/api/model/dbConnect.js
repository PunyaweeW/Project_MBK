'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'sparepart',
    multipleStatements: true
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;