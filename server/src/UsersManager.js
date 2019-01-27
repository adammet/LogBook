var mysql = require('promise-mysql');

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
			var config = {
				host: "sql3.freemysqlhosting.net",
				user: "sql3275907",
				password: "ZQndVahfzs",
				database: "sql3275907",
				port: 3306
			};

			var sql = "SELECT * FROM Users WHERE email='" + email + "'";

			await mysql.createConnection(config).then(function(conn) {
				connection = conn;
				var result = connection.query(sql);
				return result;
			}).then(function(rows) {
				success = true;
				name = rows[0]['name'];
			}).catch(function(err) {
				throw err;
			});

			
		} catch (err) {
			success = false;
			reason = err;
			console.log(err);
		} finally {
			if (connection) {
				try {
					connection.end();
				} catch (err) {
					console.error(err);
				}
			}
		}
		console.log(success);
		return success ? {success, name, teams, organizations, tasks} : {success, reason};
	}
}


module.exports = UsersManager;