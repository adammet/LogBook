var connection = require('Connection');

class TeamsManager {
    static async getTeam({team_id}) {
        try {
			var con = mysql.createConnection({
				host: "db4free.net:3306",
				user: "admin_2019",
				password: "admin1234",
				database: "logbook_1"
			});

			con.connect(function(err) {
				if (err) throw err;
				console.log("Connection successful");
			});

			var sql = "SELECT team_id FROM team" + team_id;
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
				host: "db4free.net:3306",
				user: "admin_2019",
				password: "admin1234",
				database: "logbook_1"
			});

			con.connect(function(err) {
				if (err) throw err;
				console.log("Connection successful");
			});

			var teams_query = "SELECT team_id FROM team = " + team_id;
			var team_id;
			con.query(teams_query, function (err, result) {
				if (err) throw err;
				team_id = result.length + 1
			});

			var write_query = "INSERT INTO * teams VALUES " + "(" + team_id + "," + name + "," + organization + ")";

			con.query(write_query, function (err, result) {
				if (err) throw err;
				console.log("Created team");
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
	}
}
