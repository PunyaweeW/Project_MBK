const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
//const moment = require('moment');
const http = require('http')
const helmet = require('helmet')

 const options = {
  hostname: '137.116.130.1',
  port: 3000,
  path: '/group',
  method: 'GET'
}
app = express();
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
port = process.env.PORT || 3000;
//enable cors
app.use(cors())
app.use(helmet())

console.log('prepare connection')
 
var pool  = mysql.createPool({
    connectionLimit: 100, 
    host: '137.116.130.1',
    user: 'root',
    password: 'Mi7Da15s4',
    database: 'spareparts',
    debug: false,
    multipleStatements: true


});
    pool.getConnection(function(err, connection){
    if(err){
      console.log(err);
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
  console.log("refresh"); 
  http.get("http://137.116.130.1:3000/group", res => {
 //res.setEncoding("utf-8");
 // let body = "";
 // res.on("data", data => {
 //   body += data;
 // });
 // res.on("end", () => {
 //   body = JSON.parse(body);
 //   console.log(body);
 // });
});
 }
setInterval(keepAlive, 700000 );

 

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
        //pool.release();
        
    });
   });


//part CRUD handling+++++++++++++++++++++++++++++++++++++++++++++++++++++
//GET all
app.get("/parts",function(req,res){
    
     pool.query("SELECT * FROM part_stock left JOIN part_group using(groupId) ORDER BY groupId , name , brand , version ", function(err, data){
      if (err) {
      console.log(err)
    }
    res.send(data)
        
    });
   });

//GET specific
app.get("/part/barcode/:barcode",function(req,res){
     
     pool.query("SELECT * FROM part_stock left JOIN part_group using(groupId) WHERE barcode = ?",req.params.barcode, function(err, data){
          if (err) {
      console.log(err)
    }
    res.send(data)
        
    });
   });
//GET BY STATUS
app.get("/part/status/:status",function(req,res){
     
     pool.query("SELECT * FROM part_stock left JOIN part_group using(groupId) WHERE status = ?",req.params.status, function(err, data){
          if (err) {
      console.log(err)
    }
    res.send(data)
        
    });
   });
//PUT//
app.put("/part",function(req,res){
   var updatePart = new Part(req.body);
   console.log(updatePart)
    pool.query('UPDATE part_stock SET purchase = ? , price = ? , status = ? , threshold = ? , numberOf = ?, orderNum = ?, sales = ? WHERE barcode = ?;SELECT * FROM part_stock WHERE barcode = ?',[updatePart.purchase,updatePart.price,updatePart.status, updatePart.threshold, updatePart.numberOf,updatePart.orderNum, updatePart.sales ,updatePart.barcode,updatePart.barcode], (error, result) => {
    if (error) {
      res.send(error)
    }
    console.log("update",result[1])
    res.send(result[1])
        
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
    }
    res.send(newPart); 
  });
   });
//DELETE
app.delete("/part",function(req,res){
 
   pool.query('DELETE FROM part_stock WHERE barcode = ?',req.body.barcode, (error, results) => {
    if (error) {
      res.send(error)
    }
    res.send("deleted complete")
   });
 });

 
//end of part handling---------------------------------------------------


//log handling section+++++++++++++++++++++++++++++++++++++++++++++++++++
//GET all logs
app.get("/loggings",function(req,res){
    
     pool.query("SELECT * , DATE_FORMAT(datetime,'%d/%m/%Y') as datetimeFormat FROM spareparts.log LEFT JOIN spareparts.action_reference using( actionId ) LEFT JOIN spareparts.part_stock using( barcode) ORDER BY datetime DESC", function(err, data){
      if (err) {
      console.log(err);
    }
    res.send(data)
        
    });
   });
//GET log by barcode
app.get("/logging/byBarcode/:barcode",function(req,res){
    
    pool.query("SELECT * , DATE_FORMAT(datetime,'%d/%m/%Y') as datetimeFormat FROM spareparts.log LEFT JOIN spareparts.action_reference using( actionId ) LEFT JOIN spareparts.part_stock using( barcode) WHERE barcode = ? ORDER BY datetime DESC",[req.params.barcode] ,function(err, data){
      if (err) {
      console.log(err)
    }
    res.send(data)
        
    });
   });

//GET all logs between specified date 
app.get("/logging/:startDate/:endDate",function(req,res){
    
     pool.query("SELECT * , DATE_FORMAT(datetime,'%d/%m/%Y') as datetimeFormat FROM spareparts.log LEFT JOIN spareparts.action_reference using( actionId ) LEFT JOIN spareparts.part_stock using( barcode) WHERE datetime BETWEEN ? AND ? ORDER BY datetime DESC",[req.params.startDate,req.params.endDate] ,function(err, data){
      if (err) {
      console.log(err)
    }
    res.send(data)
        
    });
   });

///GET SALES
app.get("/sales/:startDate/:endDate",function(req,res){
 pool.query('SELECT * FROM part_stock RIGHT JOIN (SELECT  barcode , COUNT(actionId) AS duratSales FROM log WHERE actionId = 20 AND datetime BETWEEN ? AND ? GROUP BY barcode , actionId ORDER BY duratReport DESC ) AS sales using (barcode)',[req.params.startDate,req.params.endDate], (error, results) => {
    if (error) {
      //response.send("cannot create new log, please check specified barcode")
      res.send(error)
    }
    res.send(results);

  
  });             
   });
///GET REPORT
app.get("/report/:reportCode/:startDate/:endDate",function(req,res){
 pool.query('SELECT * FROM part_stock RIGHT JOIN (SELECT  barcode , COUNT(actionId) AS duratReport FROM log WHERE actionId = ? AND datetime BETWEEN ? AND ? GROUP BY barcode , actionId ORDER BY duratReport DESC)  AS sales using (barcode)',[req.params.reportCode,req.params.startDate,req.params.endDate], (error, results) => {
    if (error) {
      //response.send("cannot create new log, please check specified barcode")
      res.send(error)
    }
    res.send(results);

  
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
    }
    res.send(newLog);
        
    });
   });
//DELETE
app.delete("/logging/:startDate/:endDate",function(req,res){
    pool.query('DELETE FROM log WHERE datetime BETWEEN ? AND ?',[req.params.startDate,req.params.endDate], (error, results) => {
    if (error) {
      //response.send("cannot create new log, please check specified barcode")
      res.send(error)
    }
    res.send(results);
   });
 });




//end of log handling section--------------------------------------------
//end of handling section------------------------------------------------
 
 

 
//server running+++++++++++++++++++++++++++++++++++
console.log('API server started on: ' + port);
app.listen(process.env.PORT || 3000) 


 