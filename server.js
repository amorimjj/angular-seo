'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get('/', function(req, res) {
	res.send('Angular SEO Test');
});

server.listen(process.env.PORT|| 8080, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
