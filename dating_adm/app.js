/**
 * http://usejsdoc.org/
 */

var path 	= require('path');
var express = require('express');
var app 	= express();

app.set('view engine', 'ejs');

var index 	= require('./routes/index');
var empl 	= require('./routes/empl/empl');
var rstr	= require('./routes/rstr/rstr');
var order 	= require('./routes/order/order');
var rsvtn 	= require('./routes/rsvtn/rsvtn');

app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/event')));


app.use('/'			,index);
app.use('/empl'		,empl);
app.use('/rstr'		,rstr);
app.use('/order'	,order);
app.use('/rsvtn'	,rsvtn);



app.listen(8080, function(){
	console.log('server running at port:8080 http://127.0.0.1:8080');
});


module.exports = app;