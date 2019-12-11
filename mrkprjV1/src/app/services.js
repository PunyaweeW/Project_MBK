var TYPES = require('tedious').TYPES;
function EmployeeRepository(dbContext) {
function getEmployees(req, res) {
dbContext.get("getEmployee", function (error, data) {
                return res.json(response(data, error));
            });
}
function getEmployee(req, res) {
       if (req.params.employeeId) {
            var parameters = [];
parameters.push({ name: 'Id', type: TYPES.Int, val: req.params.employeeId });
var query = "select * from tbl_employee where Id = @Id"
dbContext.getQuery(query, parameters, false, function (error, data) {
                if (data) {
                    req.data = data[0];
                    return next();
                }
                return res.sendStatus(404);
            });
        }
    }
}