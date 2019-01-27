var mysql = require('mysql');

class TasksManager {
    static async getTaskInfo({task_id}) {
        let description;
        let due_date;
        let status;
        let weight;
        let name;
        let team;
        let assigned;
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

			var sql = "SELECT * FROM task WHERE task_id = " + task_id;
			con.query(sql, function (err, result) {
                if (err) throw err;
                description = result.description;
                due_date = result.due_date;
                status = result.status;
                weight = result.weight;
                name = result.name;
                team = result.team;
                assigned = result.assigned;
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
		return {success, reason, team_id, description, due_date, status, weight, name, team, assigned};
	}
	
	static async createTask({description, due_date, status, weight, name, team, assigned}) {
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

			var teams_query = `SELECT task_id FROM task WHERE task_id = (${task_id})`;
			var team_id;
			con.query(teams_query, function (err, result) {
				if (err) throw err;
				team_id = result.length + 1
			});

			var write_query = `INSERT INTO task VALUES (${description},${due_date},${status},${weight},${name},${team},${assigned})`;

			con.query(write_query, function (err, result) {
				if (err) throw err;
				console.log("Created task");
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

module.exports = TasksManager;