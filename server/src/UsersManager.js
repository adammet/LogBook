var mysql = require('mysql');

class UsersManager {

	static async getUserInfo({email}) {
		let connection;
		let reason;
		let success = false;
		let name;
		let teams;
		let organizations;
		let tasks;

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

			var sql = "SELECT * FROM users WHERE email = " + email;

			con.query(sql, function (err, result) {
				if (err) throw err;
				success = true;
				name = result.name;
				teams = result.teams;
				organizations = result.organizations;
				tasks = result.tasks;
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
		return {success, reason, name, email, teams, organizations, tasks};
	}
}


module.exports = UsersManager;