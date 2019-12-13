const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
  port = process.env.PORT || 3000;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sparepart'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

 

var routes = require('./routes/appRoutes.js'); //roting module 
routes(app); //target the route 