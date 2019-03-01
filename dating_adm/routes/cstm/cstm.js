/**
 * http://usejsdoc.org/
 */

var express = require('express');
var app 	= express();

app.get('/', function(req, res, next){
	res.ender('cstm/list', {});
});

module.exports = app;
