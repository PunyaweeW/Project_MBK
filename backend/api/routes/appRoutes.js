'use strict';
module.exports = function(client) {
  var stock = require('../controller/appController');

  //simple get all parts info
  client.route('/parts')
    .get(stock.list_all_parts);
  client.route('/part/:partGroup')
    .post(stock.create_a_part)
    
  //get specific sparepart 
  client.route('/part/:partGroup/:partId')
  .delete(stock.delete_a_part)
  .get(stock.read_a_part);


  //operate with specific sparepart creation 
  //unused//client.route('/part/:partGroup/:partId/:partName/:partBrand/:partVersion/:partPurchase/:partPrice/:partNumberOf/:partSales')
  client.route('/part/:partGroup/:partId')
  .put(stock.update_a_part);
  


  //routing for logging and history
  client.route('/log')
  .post(stock.create_a_log)
  .get(stock.get_all_log);
  };