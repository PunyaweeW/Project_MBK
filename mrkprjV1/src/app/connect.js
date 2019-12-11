var Connection = require('tedious').Connection;
var config = {
    server: '127.0.0.1',
    authentication: {
        type: 'default',
        options: {
            userName: 'root',
            password: '1234'
        }
    },
    options: {
        database: 'อะไหล่',
        instanceName: 'Sqlexpress',
        rowCollectionOnDone: true,
        useColumnNames: false
    }
}
var connection = new Connection(config);
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');
    }
});
module.exports = connection;