/**
 * http://usejsdoc.org/
 */

var express = require('express');
var app = express();

app.get('/', function(req, res, next){
	res.render('./html/ltr/index.ejs');
});


module.exports = app;
