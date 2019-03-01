/**
 * http://usejsdoc.org/
 */

var express = require('express');
var app 	= express();

app.get('/', function(req, res, next){
	console.log(req.route);
	res.render('rstr/list', {});
});


module.exports = app;
