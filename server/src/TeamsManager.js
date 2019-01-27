var mysql = require('promise-mysql');

class TeamsManager {
	static async getTeamMembers({team_id}) {
	    let members = [];
	    let connection;
	    let success = false;
	    let reason;

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
				var res = await connection.query("SELECT * FROM TeamMembers WHERE team = " + team_id);
				return res;
			}).then(async function(res) {
				success = true;
				for (var i = 0; i < res.length; i++) {
					var r = await connection.query("SELECT name FROM Users WHERE email = '" + res[i]['email'] + "'");
					if (r) {
						members.push(r[0]['name']);
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
		console.log(members);
		return success ? {success, members} : reason;
	}

    static async getTeamInfo({team_id}) {
    	let connection;
    	let success = false;
    	let name;
        let organization;
        let reason;

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
				var res = await connection.query("SELECT * FROM Team WHERE team_id = " + team_id);
				return res;
			}).then(async function(res) {
				success = true;
				name = res[0]['name'];
				var r = await connection.query("SELECT name FROM Organization WHERE org_id = " + res[0]['organization']);
				organization = r[0]['name'];
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
		return success ? {success, name, organization} : reason;
	}

	    static async getTeamTasks({team_id}) {
    	let connection;
    	let success = false;
        let reason;
        let tasks = [];

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
				var res = await connection.query("SELECT * FROM Task WHERE team = " + team_id);
				return res;
			}).then(async function(res) {
				success = true;
				for (var i = 0; i < res.length; i++) {
					tasks.push(res[i]);
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
		return success ? {success, tasks} : reason;
	}
	
	static async createTeam({name, organization}) {
		let connection;
		let success = false;
		let reason;

		try {
			var config = mysql.createConnection({
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
		finally {
			if (con) {
				try { 
					connection.end();
				} catch (err) {
					console.error(err);
				}
			}
		}
		return success ? {success, name, organization} : {success, reason};
	}
}

module.exports = TeamsManager; 