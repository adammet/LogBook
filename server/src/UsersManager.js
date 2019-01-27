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
				host: "db4free.net:3306",
				user: "admin_2019",
				password: "admin1234",
				database: "logbook_1"
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