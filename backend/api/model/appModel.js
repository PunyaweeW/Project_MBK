'user strict';
var sql = require('./dbConnect.js');

/*var Part = function(group,code,name,brand,version,purchase,price,numberOf,sales){
    this.group = group;
    this.name =name;
    this.code = code; 
    this.brand = brand;
    this.version = version;
    this.purchase = purchase;
    this.price    = price;
    this.numberOf = numberOf;
    this.sales = sales;
};*/
 
var Part = function(part){
    this.groupId = part.groupId;
    this.name = part.name;
    this.code = part.code; 
    this.brand = part.brand;
    this.version = part.version;
    this.purchase = part.purchase;
    this.price    = part.price;
    this.numberOf = part.numberOf;
    this.sales = part.sales;
};
// get all sparepart by its reference code
Part.getAllPart = function (result) {
	 let statement = 'SELECT * FROM internals;SELECT * FROM electrics;SELECT * FROM externals;SELECT * FROM generals';
     let query = sql.query(statement,[1, 4],(err,res) => {
     
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('parts : ', res);  
                  response = [res[0],res[1],res[2],res[3]];
                 result(null, response);
                }
            });   
};
// get specific sparepart by its reference code
Part.getPartById = function (partGroup,partId, result) {
	 var table = "";
	 table = chooseGroup(partGroup);
     sql.query("SELECT * FROM " + table +" WHERE code = ? ", partId, function (err, res) {             
                 if(err) {
                     console.log("error: ", err);
                     result(err, null);
                 }
                 else{
                     result(null, res);
              
                }
            });   
 }
Part.createPart = function(partGroup,partToInsert,result){
var table = "";
table = chooseGroup(partGroup);
insertStatement = "INSERT INTO " + table + " SET  ?";
       sql.query( insertStatement ,partToInsert, function (err, res) {             
                 if(err) {                     console.log("error: ", err);
                     result(err, null);
                 }
                 else{
                     result(null, res);
              
                }
            });
}

//update specific part information
Part.updatePart = function(partGroup,partId,part,result  ){
 var table = "";
     table = chooseGroup(partGroup);
console.log("update")
console.log(part)
	 updateStatement = "UPDATE " + table + " SET name = ? ,brand = ? , version = ? , purchase = ?, price = ?, numberOf = ?, sales = ? WHERE code = ?";
console.log(updateStatement)



	   sql.query( updateStatement  ,[part.name,part.brand,part.version,part.purchase,part.price,part.numberOf,part.sales, partId], function (err, res) {             
                 if(err) {
                     console.log("error: ", err);
                     result(err, null);
                 }
                 else{
                     result(null, res);
              
                }
            });
}

//delete part function
Part.deletePart = function(partGroup,partId,result){
var table = "";
     table = chooseGroup(partGroup);
     deleteStatement = "DELETE FROM " + table + " WHERE code = ?";
     sql.query( deleteStatement  ,[partId], function (err, res) {             
                 if(err) {
                     console.log("error: ", err);
                     result(err, null);
                 }
                 else{
                     result(null, res);
              
                }
            });
}



function chooseGroup(inputGroup){
    var groupTable = "";
    if(inputGroup == "01"){
       groupTable = "internals" 
     }
     else if(inputGroup == "02"){
        groupTable = "electrics" 

     }
     else if(inputGroup == "03"){ 
       groupTable = "externals" 
     }
     else if(inputGroup == "04"){
       groupTable = "generals" 

     }
     else{
       groupTable = "externals" 

     }
return groupTable;
}
Part.getAllLog = function (result) {
     let statement = 'SELECT * FROM report';
     let query = sql.query(statement,(err,res) => {
     
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('logging:  ');  
                  console.log()
                 result(null, res);
                }
            });   
};
Part.createLog = function (log,result) {
     let statement = 'INSERT INTO report SET ?';
     let query = sql.query(statement,log,(err,res) => {
     
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('logging:  ');  
                  console.log()
                 result(null, res);
                }
            });   
};
module.exports = Part

 

 