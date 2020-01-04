'use strict';

var Part = require('../model/appModel.js');
var Log = require('../model/logModel.js')
 //get all parts information
exports.list_all_parts = function(req, res) {
  Part.getAllPart(function(err, part) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', part);
    res.send(part);
  });
};
//get by barcode

exports.get_part_by_barcode = function(req, res) {
  Part.getPartByBarcode(req.params.partGroup,req.params.partBarcode, function(err, part) {
    if (err)
      res.send(err);
    res.json(part);
  });
};

//get a specific part information
exports.read_a_part = function(req, res) {
  Part.getPartById(req.params.partGroup,req.params.partId, function(err, part) {
    if (err)
      res.send(err);
    res.json(part);
  });
};
//add new part into database
// exports.create_a_part = function (req,res){
// 	Part.createPart(req.params.partGroup,req.params.partId,req.params.partBrand,req.params.partVersion,req.params.partPurchase,req.params.partPrice,req.params.partNumberOf,req.params.partSales);
		

// };
//update part information
exports.update_a_part = function (req,res){
  var apart = new Part(req.params.partGroup,req.params.partId,req.params.partName,req.params.partBrand,req.params.partVersion,req.params.partPurchase,req.params.partPrice,req.params.partNumberOf,req.params.partSales);
  var bpart = new Part(req.body);
  console.log(bpart)

  Part.updatePart(req.params.partGroup,req.params.partId,bpart,function(err,part){
  //console.log(req.params.partSales)
   if(err)
     res.send(err);
   res.json(part)
 
  });
};

//create new part in database
exports.create_a_part = function(req,res){
  var newPart = new Part(req.body);
  console.log(newPart)
  if(newPart == null){
    res.send("Error new part is null"  );
  }else{
  Part.createPart(req.params.partGroup,newPart,function(err,part){
    if(err)
      res.send(err);
    res.json(part)
  });
}
}
//delete a part
exports.delete_a_part = function(req,res){
  console.log(req.params.partGroup,req.params.partId)
   
  Part.deletePart(req.params.partGroup,req.params.partId,function(err,part){
    if(err)
      res.send(err);
    res.json(part)
  });
}
 
//logging
//get logging information
exports.get_all_log = function(req, res) {
  Part.getAllLog(function(err, log) {

    console.log('get logging')
    if (err)
      res.send(err);
      console.log('res', log);
    res.send(log);
  });
};
exports.create_a_log = function(req, res) {
  var log = new Log(req.body);
  console.log("body of request-->",req.body)
  Part.createLog(req.body.groupId,log,function(err, log) {
 
    if (err)
      res.send(err);
      console.log('res', log);
    res.send(log);
  });
};

exports.get_related_logs = function(req, res) {
  Part.getRelatedLogs(req.params.partGroup,req.params.partId, function(err, logs) {
    if (err)
      res.send(err);

    res.json(logs);
    console.log('all related logs')
    console.log(logs)
  });
};


//testing
exports.get_part_group = function(req, res) {
  Part.getAllGroup(function(err, part) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', part);
    res.send(part);
  });
};