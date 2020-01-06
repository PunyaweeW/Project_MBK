const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const moment = require('moment');
var MysqlPoolBooster = require('mysql-pool-booster');
mysql = MysqlPoolBooster(mysql);
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
async function getGroup ()  {

return new Promise( (result) => {
 pool.getConnection(function(err, connection){
    if(err){
        result(err)
    }
     connection.query("SELECT * from part_group", function(err, data){
        console.log(data)
        result(data)

        connection.release();
        //////////////////////////////
    });
});
}); 
}
app.get("/group", async (req, res) => {
        const data = await getGroup();
        res.send(data);
    });
//
 

 
//server running+++++++++++++++++++++++++++++++++++
console.log('API server started on: ' + port);
app.listen(process.env.PORT || 3000) 


 