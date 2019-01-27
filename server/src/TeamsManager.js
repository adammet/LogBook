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
		let reason;
		let success = false;

		try {
			if (!name) {
				throw new Error("No name");
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
				var teamid = await connection.query("SELECT MAX(team_id) from Team");
				let id = teamid[0]['MAX(team_id)'] + 1;
				var res = await connection.query("INSERT INTO Team (name, organization, team_id) VALUES ('" + name + "', "+ organization + ", " + id + ")");
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

module.exports = TeamsManager; 