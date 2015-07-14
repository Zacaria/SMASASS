'use strict';
var path = require('path');
var express = require('express');
var app = express();
var port = 3000;

app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');
app.use(express.static(path.join(__dirname, 'public')));

/*
 * Routes
 */
app.get('/', function(req, res){
    res.sendFile('index.html', {root: __dirname + '/public/views'});
    //res.render('index');
});

/*
 * Start it up
 */
app.listen(process.env.PORT || port);
console.log('Express started on port ' + port);