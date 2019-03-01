/**
 * http://usejsdoc.org/
 */

var express = require('express');
var app = express();

app.get('/' ,function(req, res, next){
	res.render('order/list', {});
});

module.exports = app;
