const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

  app = express(),
  bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  port = process.env.PORT || 3000;

app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});   

// Start server
app.listen(process.env.PORT || 3000, "0.0.0.0")
// 
