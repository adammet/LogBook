var mysql = require('mysql');

class TeamManager {
    static async getTeam({team_id}) {
        try {
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

			var sql = "SELECT * FROM team WHERE team_id = " + team_id;

			var team_id;
			con.query(sql, function (err, result) {
				if (err) throw err;
				team_id = result.length + 1
			});
			
		} catch (err) {
			success = false;
			reason = err;
			console.log(err);
		} finally {
			if (connection) {
				try { 
					connection.close();
				} catch (err) {
					console.error(err);
				}
			}
		}
		console.log(success);
		return {success, reason, team_id, name, organization};
	}
	
	static async createTeam({name, organization}) {
		try {
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

			var team_id;
			var teams_query = "SELECT team_id FROM team";
			con.query(teams_query, function (err, result) {
				if (err) throw err;
				team_id = result.length + 1
				console.log("Next team id: " + team_id);
			});
			console.log(teams_query);

			var write_query = "INSERT INTO * teams VALUES " + "(" + team_id + "," + name + "," + organization + ")";

			con.query(write_query, function (err, result) {
				if (err) throw err;
				console.log("Created team");
			});
		} catch (err) {
			success = false;
			reason = err;
			console.log(err);
		} 
		// finally {
		// 	if (con) {
		// 		try { 
		// 			con.close();
		// 		} catch (err) {
		// 			console.error(err);
		// 		}
		// 	}
		// }
	}
}

TeamManager.createTeam("rand", "rando");
