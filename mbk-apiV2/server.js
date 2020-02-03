const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
//const moment = require('moment');
app = express();
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
port = process.env.PORT || 3000;
//enable cors
app.use(cors())

console.log('prepare connection')
 
var pool  = mysql.createPool({
    connectionLimit: 100, 
    host: '137.116.130.1',
    user: 'root',
    password: 'Mi7Da15s4',
    database: 'sparepart',
    debug: false,
    multipleStatements: true,

});
    pool.getConnection(function(err, connection){
    if(err){
      console.err(err);
    }else{
      console.log("success");
    }
  });

//reconnect
//  setInterval(function(){ pool.getConnection(function(err, connection){
//    if(err){
//      console.err(err);
//    }else{
//      console.log("success");
//    }
//  });
///   
// console.log("reconnecting")
//   }, 300000);   
function keepAlive(){
  pool.getConnection(function(err, connection){
    if(err) { return; }
    console.log("200 OK")
    //connection.ping();
    connection.release();
  });
}
setInterval(keepAlive, 600000);

 

//model section+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//part model
var Part = function(part){
    console.log(part.groupId)
    this.groupId = part.groupId;
    this.barcode =  part.barcode;
    this.name = part.name;
    this.brand = part.brand;
    this.version = part.version;
    this.purchase = part.purchase;
    this.price    = part.price;
    this.threshold = part.threshold;
    this.numberOf = part.numberOf;
    this.sales = part.sales;
    this.status = part.status;
    this.orderNum = part.orderNum;
};
//log model
var Log = function(log){
  this.groupId = log.groupId;
  this.barcode = log.barcode;
  this.datetime =  NOW();
  this.actionId = log.actionId;
};
//handling datetime+++++++++++++++++++++++++++++++++++++++++++++++++++++++
function NOW() {

    var date = new Date();
    var aaaa = date.getFullYear();
    var gg = date.getDate();
    var mm = (date.getMonth() + 1);

    if (gg < 10)
        gg = "0" + gg;

    if (mm < 10)
        mm = "0" + mm;

    var cur_day = aaaa + "-" + mm + "-" + gg;

    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds();

    if (hours < 10)
        hours = "0" + hours;

    if (minutes < 10)
        minutes = "0" + minutes;

    if (seconds < 10)
        seconds = "0" + seconds;

    return cur_day + " " + hours + ":" + minutes + ":" + seconds;

}
//end of handling datetime------------------------------------------------

//end of model section----------------------------------------------------
//handling section++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//get group for testing 
app.get("/group",function(req,res){
 
     pool.query("SELECT * from part_group", function(err, data){
        console.log(data)
        res.send(data)
    //may be
        pool.release();
        
    });
   });


//part CRUD handling+++++++++++++++++++++++++++++++++++++++++++++++++++++
//GET all
app.get("/parts",function(req,res){
    
     pool.query("SELECT * FROM part_stock left JOIN part_group using(groupId)", function(err, data){
      if (err) {
      console.log(err)
    }
    res.send(data)
    pool.release();    
    });
   });

//GET specific
app.get("/part/barcode/:barcode",function(req,res){
     
     pool.query("SELECT * FROM part_stock left JOIN part_group using(groupId) WHERE barcode = ?",req.params.barcode, function(err, data){
          if (err) {
      console.log(err)
    }
    res.send(data)
    pool.release();    
    });
   });
//GET BY STATUS
app.get("/part/status/:status",function(req,res){
     
     pool.query("SELECT * FROM part_stock left JOIN part_group using(groupId) WHERE status = ?",req.params.status, function(err, data){
          if (err) {
      console.log(err)
    }
    res.send(data)
    pool.release();    
    });
   });
//PUT//
app.put("/part",function(req,res){
   var updatePart = new Part(req.body);
   console.log(updatePart)
    pool.query('UPDATE part_stock SET purchase = ? , price = ? , status = ? , threshold = ? , numberOf = ?, orderNum = ?, sales = ? WHERE barcode = ?;SELECT * FROM part_stock WHERE barcode = ?',[updatePart.purchase,updatePart.price,updatePart.status, updatePart.threshold, updatePart.numberOf,updatePart.orderNum, updatePart.sales ,updatePart.barcode,updatePart.barcode], (error, result) => {
    if (error) {
      res.send(error)
      pool.release();
    }
    console.log("update",result[1])
    res.send(result[1])
    pool.release();    
    });
   });
 //POST
app.post("/part",function(req,res){
  var newPart = new Part(req.body);
  console.log(newPart) 
   pool.query('INSERT INTO part_stock SET ?',newPart, (error, results) => {
    if (error) {
     // response.send("cannot create new part, may be this part is already exist")
      res.send(error)
      pool.release();
    }
    res.send(newPart); 
    pool.release();
  });
   });
//DELETE
app.delete("/part",function(req,res){
 
   pool.query('DELETE FROM part_stock WHERE barcode = ?',req.body.barcode, (error, results) => {
    if (error) {
      res.send(error)
      pool.release();
    }
    res.send("deleted complete")
    pool.release();
   });
 });

 
//end of part handling---------------------------------------------------


//log handling section+++++++++++++++++++++++++++++++++++++++++++++++++++
//GET all logs
app.get("/loggings",function(req,res){
    
     pool.query("SELECT * , DATE_FORMAT(datetime,'%d/%m/%Y') as datetime FROM sparepart.log LEFT JOIN sparepart.action_reference using( actionId ) LEFT JOIN sparepart.part_stock using( barcode)", function(err, data){
      if (err) {
      console.log(err)
      pool.release();
    }
    res.send(data)
    pool.release();    
    });
   });

//GET all logs
app.get("/logging",function(req,res){
    
     pool.query("SELECT * , DATE_FORMAT(datetime,'%d/%m/%Y') as datetime FROM sparepart.log LEFT JOIN sparepart.action_reference using( actionId ) LEFT JOIN sparepart.part_stock using( barcode) WHERE datetime BETWEEN ? AND ? ",[req.body.startDate,req.body.endDate] ,function(err, data){
      if (err) {
      console.log(err)
      pool.release();
    }
    res.send(data)
   pool.release();     
    });
   });

///GET SALES
app.get("/sales/:startDate/:endDate",function(req,res){
 pool.query('SELECT * FROM part_stock RIGHT JOIN (SELECT  barcode , COUNT(actionId) AS duratSales FROM log WHERE actionId = 20 AND datetime BETWEEN ? AND ? GROUP BY barcode , actionId) AS sales using (barcode)',[req.params.startDate,req.params.endDate], (error, results) => {
    if (error) {
      //response.send("cannot create new log, please check specified barcode")
      res.send(error)
      pool.release();
    }
    res.send(results);
    pool.release();
  
  });             
   });

//POST
app.post("/logging",function(req,res){
 var newLog = new Log(req.body);
  console.log(newLog) 
   pool.query('INSERT INTO log SET ?',[newLog], (error, results) => {
    if (error) {
      //response.send("cannot create new log, please check specified barcode")
      res.send(error)
    pool.release();
    }
    res.send(newLog);
   pool.release();     
    });
   });
//DELETE
app.delete("/logging",function(req,res){
    pool.query('DELETE FROM log WHERE datetime BETWEEN ? AND ?',[req.body.startDate,req.body.endDate], (error, results) => {
    if (error) {
      //response.send("cannot create new log, please check specified barcode")
      res.send(error)
      pool.release();
    }
    res.send(results);
    pool.release();
   });
 });




//end of log handling section--------------------------------------------
//end of handling section------------------------------------------------
 
 

 
//server running+++++++++++++++++++++++++++++++++++
console.log('API server started on: ' + port);
app.listen(process.env.PORT || 3000) 


 