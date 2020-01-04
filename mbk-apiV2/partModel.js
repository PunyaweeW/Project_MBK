var Part = function(part){
    this.groupId = part.groupId;
    this.barcode =  part.barcode;
    this.name = part.name;
    this.brand = part.brand;
    this.version = part.version;
    this.purchase = part.purchase;
    this.price    = part.price;
    this.numberOf = part.numberOf;
    this.sales = part.sales;
    this.status = part.status;
};
module.exports = Part;