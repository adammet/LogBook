class LogBookAPI {

	static async getUserInfo({email}) {
		let (success, reason, name, teams, organizations, tasks) = await UsersManager.getUserInfo({email});
		let code = success ? 200 : 404;
		let response = success ? {name, teams, organizations, tasks} : reason; 

		return {response, code};
	}

}