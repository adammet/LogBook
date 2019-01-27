var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql3.freemysqlhosting.net",
    user: "sql3275907",
    password: "ZQndVahfzs",
    database: "sql3275907",
    port: 3306
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connection successful");
});