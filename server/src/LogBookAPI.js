const UsersManager = require('./UsersManager.js');
const TasksManager = require('./TasksManager.js');
const TeamsManager = require('./TeamsManager.js');

class LogBookAPI {

	static async getUserInfo({email}) {
		let {success, reason, name, teams, organizations, tasks} = await UsersManager.getUserInfo({email});
		let code = success ? 200 : 404;
		let response = success ? {name, teams, organizations, tasks} : reason; 

		return {response, code};
	}

	static async getTaskInfo({task_id}) {
		let {success, reason, name, description, due_date, status, weight, team, assigned} = await TasksManager.getTaskInfo({task_id});
		let code = success ? 200 : 404;
		let response = success ? {name, description, due_date, status, weight, team, assigned} : reason;

		return {response, code};
	}

	static async getTeamInfo({team_id}) {
		let {success, reason, name, organization} = await TeamsManager.getTeamInfo({team_id});
		let code = success ? 200 : 404;
		let response = success ? {name, organization} : reason;

		return {response, code};
	}

	static async getTeamMembers({team_id}) {
		let {success, reason, members} = await TeamsManager.getTeamMembers({team_id});
		let code = success ? 200 : 404;
		let response = success ? {members} : reason;

		return {response, code};
	}

	static async getOrganizationInfo({org_id}) {
		let {success, reason, name, description} = await OrganizationManager.getOrganizationInfo({org_id});
		let code = success ? 200 : 404;
		if (success) {
			let {members} = await OrganizationManger.getMembers({org_id});
			let {admin} = await OrganizationmManager.getAdmin({org_id});
			let {teams} = await OrganizationmManager.getTeams({org_id});
		}
		let response = success ? {name, description, members, admin} : reason;

		return {response, code};
	}

	static async getTeamTasks({team_id}) {
		let {success, reason, tasks} = await TeamsManager.getTeamTasks({team_id});
		let code = success ? 200 : 404;
		let response = success ? {tasks} : reason;

		return {response, code};
	}


}

module.exports = LogBookAPI;