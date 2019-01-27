var mysql = require('promise-mysql');

class UsersManager {

	static async getUserInfo({email}) {
		let connection;
		let reason;
		let success = false;
		let name;
		let teams = [];
		let organizations = [];
		let tasks;

		try {
			var config = {
				host: "sql3.freemysqlhosting.net",
				user: "sql3275907",
				password: "ZQndVahfzs",
				database: "sql3275907",
				port: 3306
			};

			await mysql.createConnection(config).then(async function(conn) {
				connection = conn;
				var res1 = await connection.query("SELECT * FROM Users WHERE email='" + email + "'");
				var res2 = await connection.query("SELECT team FROM TeamMembers WHERE email='" + email + "'");
				var res3 = await connection.query("SELECT organization FROM OrganizationMembers WHERE email='" + email +"'");
				return {res1, res2, res3};
			}).then(async function(res) {
				let {res1, res2, res3} = res;
				console.log(res2);
				console.log(res2[0]);
				console.log(res2[0]['team']);
				if (res1) {
					success = true;
					name = res1[0]['name'];
				} else {
					success = false;
					throw new Error("User not found");
				}
				for (var i = 0; i < res2.length; i++) {
					console.log(res2[i]);
					var r = await connection.query("SELECT name FROM Team WHERE team_id = " + res2[i]['team']);
					console.log(r);
					if (r) {
						teams.push(r[0]['name']);
					}
				}
				for (var i = 0; i < res3.length; i++) {
					console.log(res3[i]);
					var r = await connection.query("SELECT name FROM Organization WHERE org_id = " + res3[i]['organization']);
					console.log(r);
					if (r) {
						organizations.push(r[0]['name']);
					}
				}
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

	static async createUser({email, name, password}) {
		let connection;
		let reason;
		let success = false;

		try {
			if (!email) {
				throw new Error("No email");
			}
			if (!name) {
				throw new Error("No name");
			}
			if (!password) {
				throw new Error("No password");
			}

			var config = {
				host: "sql3.freemysqlhosting.net",
				user: "sql3275907",
				password: "ZQndVahfzs",
				database: "sql3275907",
				port: 3306
			};

			await mysql.createConnection(config).then(async function(conn) {
				connection = conn;
				var res = await connection.query("INSERT INTO Users (email, name, password) VALUES ('" + email + "', '" + name + "', '" + password + "')");
				if (res) {
					success = true;
				}
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
		return success ? {success} : {success, reason};
	}

}


module.exports = UsersManager;