class LogBookAPI {

	static async getUserInfo({user_id}) {
		let (success, reason, name, email, teams, organizations, tasks) = await UsersManager.getUserInfo({user_id});
		let code = success ? 200 : 404;
		let response = success ? {name, email, teams, organizations, tasks} : reason; 
		
		return {response, code};
	}

}