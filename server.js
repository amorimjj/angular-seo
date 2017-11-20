'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

//app.get('/', function(req, res) {
//	res.send('Angular SEO Test');
//});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen(process.env.PORT|| 8080, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
