var mysql = require("mysql2");

var con = mysql.createConnection({
    host:"localhost",
    user:"manick",
    password:"manick@123",
    database:"form"
});

module.exports = con;
