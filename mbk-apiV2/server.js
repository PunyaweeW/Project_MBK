const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const moment = require('moment');
var db = require('./DBConnect.js')
  app = express(),
  bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  port = process.env.PORT || 3000;

console.log('prepare connection')

// connection configurations
//const mc = mysql.createConnection({
//    host: '127.0.0.1',
//    user: 'root',
//    password: 'Mi7Da15s4',
//    database: 'sparepart'
//});

console.log('use cors')
//enable cors 
app.use(cors())

//<end of database connection section>-------------------
//start of model section+++++++++++++++++++++++++++++++++


//<end of model section>---------------------------------



//start of request handle section++++++++++++++++++++++++
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
};
var Log = function(log){
  this.groupId = log.groupId;
  this.barcode = log.barcode;
  this.datetime =  new Date();
  this.action = log.action;
};



const getGroup = (request, response) => {
 
  db.pool.query('SELECT * FROM part_group', (error, results) => {
    if (error) {
      throw error
    }
    response.send(results)
  })

}
const getParts = (request, response) => {
  db.pool.query('SELECT * FROM part_stock', (error, results) => {
    if (error) {
      console.log(error)
    }
    response.send(results)
  })
}
const createPart = (request, response) => {
  var newPart = new Part(request.body);
  console.log(newPart) 
   db.pool.query('INSERT INTO part_stock SET ?',newPart, (error, results) => {
    if (error) {
     // response.send("cannot create new part, may be this part is already exist")
      response.send(error)
    }
    response.send(results); })
}

const getPartById = (request, response) => {
  db.pool.query('SELECT * FROM part_group WHERE barcode = ?', request.body.barcode,(error, results) => {
    if (error) {
      throw error
    }
    response.send(results)
  })
}
const updatePart = (request, response) => {
  var newPart = new Part(request.body);
  console.log(newPart) 
   db.pool.query('UPDATE part_stock SET purchase = ? , price = ? , status = ? , threshold = ? , numberOf = ? WHERE barcode = ?',[request.body.purchase,request.body.price,request.body.status, request.body.threshold, request.body.numberOf, request.body.barcode], (error, results) => {
    if (error) {
      response.send("cannot update, may be specified barcode doesn't exist")
    }
    response.send("the part is already update")

  })
}

const deletePart = (request, response) => {
  var newPart = new Part(request.body);
  console.log(newPart) 
   db.pool.query('DELETE FROM part_stock WHERE barcode = ?',request.body.barcode, (error, results) => {
    if (error) {
      response.send("cannot delete, may be specified barcode doesn't exist")
    }
    response.send("the part is already delete")

  })
}
const getLogByTime = (request,response) => {
   db.pool.query('SELECT * FROM log WHERE datetime BETWEEN ? AND ?',[request.body.startDate,request.body.endDate], (error, results) => {
    if (error) {
      //response.send("cannot create new log, please check specified barcode")
      response.send(error)
    }
    response.send(results);
    return 1;
  
  })   
}

const deleteLogByTime = (request,response) => {
   db.pool.query('DELETE FROM log WHERE datetime BETWEEN ? AND ?',[request.body.startDate,request.body.endDate], (error, results) => {
    if (error) {
      //response.send("cannot create new log, please check specified barcode")
      response.send(error)
    }
    response.send(results);
    return 1;
  
  })   
}

const createLog = (request, response) => {
  
  var newLog = new Log(request.body);
  console.log(newLog) 
  db.pool.query('INSERT INTO log SET ?',[newLog], (error, results) => {
    if (error) {
      //response.send("cannot create new log, please check specified barcode")
      response.send(error)
    }
    response.send(" 200 ok");
    return 1;
  
  })
}
const getLogs = (request, response) => {
  
   db.pool.query('SELECT * FROM log ',(error, results) => {
    if (error) {
      response.send(error);
    }
    console.log("Log result",results)
    response.send(results)
    return 1;
  })
}

//<end of request handle section>---------------------------

//start of routing section++++++++++++++++++++++++++++++++++
//var routes = require('./routes/appRoutes.js');  
//routes(app); //target the route 

console.log('API server started on: ' + port);
app.route('/test2').get(getGroup);
app.route('/part').post(createPart); 
app.route('/part').put(updatePart);
app.route('/part').delete(deletePart);  
app.route('/part').delete(getPartById);
app.route('/parts').get(getParts);

app.route('/logging').post(createLog);
app.route('/logging').get(getLogByTime);
app.route('/logging').delete(deleteLogByTime);   
app.route('/loggings').get(getLogs);    

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening`)
})
// 
