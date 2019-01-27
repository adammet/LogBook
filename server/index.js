var mysql = require('mysql');
let LogBookAPI = require('LogBookAPI');

function cors(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS,PUT");
    next();
}

// Configure the app to use a bunch of middlewares
// app.use(cors);										// Enable CORS

app.get('/getUserInfo', function (req, res) {
	LogBookAPI.getUserInfo(req.body).then(({response, code}) => {
		res.status(code).send(response);
	}).catch((err) => {
		res.status(404).send(err);
	});
});

app.get('/getTaskInfo', function (req, res) {
	LogBookAPI.getTaskInfo(req.body).then(({response, code}) => {
		res.status(code).send(response);
	}).catch((err) => {
		res.status(404).send(err);
	});
});

app.get('/getOrganizationInfo', function (req, res) {
	LogBookAPI.getOrganizationInfo(req.body).then(({response, code}) => {
		res.status(code).send(response);
	}).catch((err) => {
		res.status(404).send(err);
	});
});

app.get('/getTeamInfo', function (req, res) {
	LogBookAPI.getTeamInfo(req.body).then(({response, code}) => {
		res.status(code).send(response);
	}).catch((err) => {
		res.status(404).send(err);
	});
});

app.get('/getTeamTasks', function (req, res) {
	LogBookAPI.getTeamTasks(req.body).then(({response, code}) => {
		res.status(code).send(response);
	}).catch((err) => {
		res.status(404).send(err);
	});
});
