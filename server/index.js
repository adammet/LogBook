const path = require('path');
var mysql = require('mysql');
let LogBookAPI = require('./src/LogBookAPI.js');
const express = require('express');
const app = express();
var PORT = process.env.PORT || 3000;
var STATIC_ROOT = path.resolve(__dirname, './public');

// Defining CORS middleware to enable CORS.
// (should really be using "express-cors",
// but this function is provided to show what is really going on when we say "we enable CORS")
function cors(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS,PUT");
    next();
}

// Configure the app to use a bunch of middlewares
app.use(express.json());							// handles JSON payload
app.use(express.urlencoded({ extended : true }));	// handles URL encoded payload
app.use(cors);										// Enable CORS

app.use('/', express.static(STATIC_ROOT));			// Serve STATIC_ROOT at URL "/" as a static resource

// Start listening on TCP port
app.listen(PORT, function(){
    console.log('Express.js server started, listening on PORT '+ PORT);
});

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

app.get('/getTeamMembers', function (req, res) {
	LogBookAPI.getTeamMembers(req.body).then(({response, code}) => {
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

app.post('/createUser', function (req, res) {
	LogBookAPI.createUser(req.body).then(({response, code}) => {
		res.status(code).send(response);
	}).catch((err) => {
		res.status(404).send(err);
	});
});

app.post('/createTeam', function (req, res) {
	LogBookAPI.createTeam(req.body).then(({response, code}) => {
		res.status(code).send(response);
	}).catch((err) => {
		res.status(404).send(err);
	});
});

