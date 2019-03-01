/**
 * http://usejsdoc.org/
 */

var express = require('express');
var app = express();

app.get('/' ,function(req, res, next){
	res.render('rsvtn/list', {});
});

app.get('/add' ,function(req, res, next){
	res.render('rsvtn/add', {});
});

module.exports = app;
