var Log = function(log){
    this.groupId = log.groupId;
    this.code = log.code;
    this.action = log.action;
    this.timestamp = new Date();
}
module.exports = Log;