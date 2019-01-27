var mysql = require('mysql');
function connect() {
    

    var con = mysql.createConnection({
      host: "localhost",
      user: "yourusername",
      password: "yourpassword"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
}


