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
// connection configurations
const mc = mysql.createConnection({

    host: '137.116.130.1',
    user: 'root',
    password: 'Mi7Da15s4',
    database: 'sparepart'
});
const getGroup = (request, response) => {
 
  mc.query('SELECT * FROM part_group', (error, results) => {
    if (error) {
      throw error
    }
    response.send(results)
  })

}
 
app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
app.get("/test", (req, res, next) => {
  getGroup(req,res);
 });


 
 
//server running+++++++++++++++++++++++++++++++++++
console.log('API server started on: ' + port);
app.listen(process.env.PORT || 3000) 


 