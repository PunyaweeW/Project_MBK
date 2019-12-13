const express = require('express');
const mysql = require('mysql'); 

const app = express();
app.use(express.json());
 const db = mysql.createConnection({   
host     : 'localhost', 
user     : 'root',
password : '1234',
database : 'sparepart',
multipleStatements: true
})
db.connect()
var movies = [
    {
        id: 0,
        name: "The Flash",
        type: "series",
        isPublished: false
    },
    {
        id: 1,
        name: "Arrow",
        type: "series",
        isPublished: true
    },
    {
        id: 2,
        name: "Harry Potter",
        type: "movie",
        isPublished: false
    }
];

 
app.get('/get/spareparts',(req,res)=> {    
    let sql = 'SELECT * FROM externals;SELECT * FROM internals;SELECT * FROM electrics;SELECT * FROM generals';   
    let query = db.query(sql,[1, 2],(err,results) => {  
    if(err) throw err   
    console.log(results[0])
    console.log(results[1])
    response = [results[0],results[1],results[2],results[3]];
    res.json(response)
   
    
    })
    })

app.get('/get/spareparts',(req,res)=> {    
    let sql = 'SELECT * FROM externals;SELECT * FROM internals;SELECT * FROM electrics;SELECT * FROM generals';   
    let query = db.query(sql,[1, 2],(err,results) => {  
    if(err) throw err   
    console.log(results[0])
    console.log(results[1])
    response = [results[0],results[1],results[2],results[3]];
    res.json(response)
   
    
    })
    })

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) );