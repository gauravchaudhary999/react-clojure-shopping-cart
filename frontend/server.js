const http = require('http');
const config = require('config');
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');


const API_HOSTNAME = config.get('api.hostname');
const API_PORT = config.get('api.port');
const PORT = config.get('port');

console.log("API_HOSTNAME:" + API_HOSTNAME);
console.log("API_PORT:" + API_PORT);
console.log("PORT:" + PORT);

var serve = serveStatic('./dist');

const startsWith = function(input, prefix) {
	return input.substring(0, prefix.length) === prefix;
} 

const getApiPath = function(input) {
	return input.substring(4);
}

const handler = function(req, res) {
	path = String(req.url);
	console.log(path);

	if(startsWith(path, "/api/")) {
		var reqOptions = options();
		reqOptions.path = getApiPath(path);
		
		var connector = http.request(reqOptions, function(resp){

		resp.on('data', function(chunk){
		    res.end(chunk);
		  });
		})
		.on("error", function(e){
		  console.log("Got error: " + e.message);
		});
		req.pipe(connector);

	} else {
		var done = finalhandler(req, res);
		serve(req, res, done);
	}
};

var server = http.createServer(handler);


server.listen(PORT);

const options = function() { return {
	hostname: API_HOSTNAME,
	port: API_PORT
}; }
