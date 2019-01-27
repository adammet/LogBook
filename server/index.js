var mysql = require('mysql');
let LogBookAPI = require('LogBookAPI');

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
    console.log('Express.js server started, listening on PORT '+PORT);
});

app.get('/getUserInfo', function (req, res) {
	LogBookAPI.getUserInfo(req.body).then(({response, code}) => {
		res.status(code).send(response);
	}).catch((err) => {
		res.status(404).send(err);
	});
});

app.get('getTaskInfo', function (req, res) {
	LogBookAPI.getUserInfo(req.body).then(({response, code}) => {
		res.status(code).send(response);
	}).catch((err) => {
		res.status(404).send(err);
	});
});