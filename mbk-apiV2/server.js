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
    host: '137.116.130.1',
    user: 'root',
    password: 'Mi7Da15s4',
    database: 'sparepart'
});


 function handle_database(req,res) {

     pool.getConnection(function(err,connection){
         if (err) {
           connection.release();
           res.json({"code" : 100, "status" : "Error in connection database"});
           return;
         }   

         console.log('connected as id ' + connection.threadId);

         connection.query("SELECT * FROM part_group",function(err,results){
             connection.release();
             if(!err) {
                 res.send(results);
             }           
         });

         connection.on('error', function(err) {      
               res.json({"code" : 100, "status" : "Error in connection database"});
               return;     
         });
   });
 }

 app.get("/group",function(req,res){-
         handle_database(req,res);
 });

 
//server running+++++++++++++++++++++++++++++++++++
console.log('API server started on: ' + port);
app.listen(process.env.PORT || 3000) 


 