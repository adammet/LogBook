var mysql = require('promise-mysql');

class TasksManager {

	static async getTaskInfo({task_id}) {
		let connection;
		let reason;
		let success = false;
		let description;
        let due_date;
        let status;
        let weight;
        let name;
        let team;
        let assigned;

		try {
			var config = {
				host: "sql3.freemysqlhosting.net",
				user: "sql3275907",
				password: "ZQndVahfzs",
				database: "sql3275907",
				port: 3306
			};

			var sql = "SELECT * FROM Task WHERE task_id='" + task_id + "'";

			await mysql.createConnection(config).then(function(conn) {
				connection = conn;
				var result = connection.query(sql);
				return result;
			}).then(async function(rows) {
				success = true;
				description = rows[0]['description'];
				due_date = rows[0]['due_date'];
				status = rows[0]['status'];
				weight = rows[0]['weight'];
				name = rows[0]['name'];
				assigned = rows[0]['assigned'];
				var r = await connection.query("SELECT name FROM Team WHERE team_id = " + rows[0]['team']);
				team = r[0]['name'];
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
		return success ? {success, task_id, description, due_date, status, weight, name, team, assigned} : {success, reason};
	}
}


module.exports = TasksManager;