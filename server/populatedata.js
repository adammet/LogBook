var mysql = require('mysql');

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

var sql;

// CREATES TABLES
// sql = "CREATE TABLE Users (name VARCHAR(255), email VARCHAR(255) PRIMARY KEY, password VARCHAR(255))";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// 	console.log("Users table Created");
// });
// sql = "CREATE TABLE Organization (org_id int NOT NULL, description VARCHAR(5000), name VARCHAR(255), PRIMARY KEY (org_id))";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// 	console.log("Organization table Created");
// });
// sql = "CREATE TABLE Team (team_id int NOT NULL, name VARCHAR(255), organization int NOT NULL, PRIMARY KEY (team_id), FOREIGN KEY (organization) REFERENCES Organization(org_id))";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// 	console.log("Team table Created");
// });
// sql = "CREATE TABLE Task (task_id int NOT NULL, description VARCHAR(5000), due_date date, status VARCHAR(255), weight int, name VARCHAR(255), team int NOT NULL, assigned VARCHAR(255) NOT NULL, PRIMARY KEY (task_id), FOREIGN KEY (assigned) REFERENCES Users(email), FOREIGN KEY (team) REFERENCES Team(team_id))";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// 	console.log("Task table Created");
// });
// sql = "CREATE TABLE TeamMembers (email VARCHAR(255) NOT NULL, team int NOT NULL, PRIMARY KEY (email, team), FOREIGN KEY (email) REFERENCES Users(email), FOREIGN KEY (team) REFERENCES Team(team_id))";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// 	console.log("TeamMembers table Created");
// });
// sql = "CREATE TABLE UserTasks (email VARCHAR(255) NOT NULL, task int NOT NULL, PRIMARY KEY (email, task), FOREIGN KEY (email) REFERENCES Users(email), FOREIGN KEY (task) REFERENCES Task(task_id))";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// 	console.log("Usertasks table Created");
// });
// sql = "CREATE TABLE OrganizationTeams (team int NOT NULL, organization int NOT NULL, PRIMARY KEY (team, organization), FOREIGN KEY (organization) REFERENCES Organization(org_id), FOREIGN KEY (team) REFERENCES Team(team_id))";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// 	console.log("OrganizationTeams table Created");
// });
// sql = "CREATE TABLE OrganizationMembers (email VARCHAR(255) NOT NULL, organization int NOT NULL, PRIMARY KEY (email, organization), FOREIGN KEY (email) REFERENCES Users(email), FOREIGN KEY (organization) REFERENCES Organization(org_id))";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// 	console.log("OrganizationMembers table Created");
// });

// INSERT DUMMY DATA
// sql = "INSERT INTO Users (email, name, password) VALUES ('edmund@idiot.com', 'Edmund', 'password')";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO Users (email, name, password) VALUES ('adam@idiot.com', 'Adam', 'password')";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO Users (email, name, password) VALUES ('morgan@idiot.com', 'Morgan', 'password')";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO Users (email, name, password) VALUES ('abduraman@idiot.com', 'Abduraman', 'password')";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO Organization (org_id, description, name) VALUES (1,'dummy org 1','Dummy Org 1')";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO Organization (org_id, description, name) VALUES (2,'dummy org 2','Dummy Org 2')";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO Team (team_id, name, organization) VALUES (1,'dummy team 1', 1)";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO Team (team_id, name, organization) VALUES (2,'dummy team 2', 1)";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO TeamMembers (email, team) VALUES ('edmund@idiot.com',1)";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO TeamMembers (email, team) VALUES ('abduraman@idiot.com',1)";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO TeamMembers (email, team) VALUES ('morgan@idiot.com',2)";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO TeamMembers (email, team) VALUES ('adam@idiot.com',2)";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO Task (task_id, description, status, weight, name, team, assigned) VALUES (1, 'ss', 'open', 3, 'task 1', 1, 'edmund@idiot.com')";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO Task (task_id, description, status, weight, name, team, assigned) VALUES (2, 'aa', 'in progress', 4, 'task 2', 2, 'adam@idiot.com')";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO UserTasks (email, task) VALUES ('adam@idiot.com',2)";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO UserTasks (email, task) VALUES ('edmund@idiot.com',1)";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO OrganizationTeams (team, organization) VALUES (1,1)";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO OrganizationTeams (team, organization) VALUES (2,1)";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO OrganizationMembers (organization, email) VALUES (1,'adam@idiot.com')";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO OrganizationMembers (organization, email) VALUES (1,'edmund@idiot.com')";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO OrganizationMembers (organization, email) VALUES (1,'morgan@idiot.com')";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
// sql = "INSERT INTO OrganizationMembers (organization, email) VALUES (1,'abduraman@idiot.com')";
// con.query(sql, function (err, result) {
// 	if (err) console.log(err);
// });
sql = "INSERT INTO Task (task_id, description, status, weight, name, team, assigned) VALUES (3, 'oijasd', 'in progress', 3, 'task 3', 1, 'edmund@idiot.com')";
con.query(sql, function (err, result) {
	if (err) console.log(err);
});
sql = "INSERT INTO Task (task_id, description, status, weight, name, team, assigned) VALUES (4, 'oija22sd', 'in progress', 4, 'task 4', 2, 'adam@idiot.com')";
con.query(sql, function (err, result) {
	if (err) console.log(err);
});



