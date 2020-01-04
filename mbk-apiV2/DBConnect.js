var mysql = require('mysql');

// configure the function to connect to the database
var pool = mysql.createPool({
    connectionLimit : 1000,
    host     : 'localhost',
    user     : 'root',
    password : 'Mi7Da15s4',
    database : 'sparepart'
 });

 exports.pool = pool;