const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const moment = require('moment');
app = express();
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
port = process.env.PORT || 3000;
//enable cors
app.use(cors())

console.log('prepare connection')
 
var pool  = mysql.createPool({
    connectionLimit: 100, //important
    host: '137.116.130.1',
    user: 'root',
    password: 'Mi7Da15s4',
    database: 'sparepart',
    debug: false

});


 
//
 app.get("/group",function(req,res){
    pool.getConnection(function(err, connection){
    if(err){
        res.send(err)
    }
    console.log("querying...")
     connection.query("SELECT * from part_group", function(err, data){
        console.log(data)
        res.send(data)

        connection.release();
        
    });
});

 });

 
//server running+++++++++++++++++++++++++++++++++++
console.log('API server started on: ' + port);
app.listen(process.env.PORT || 3000) 


 