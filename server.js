'use strict';
var path = require('path');
var express = require('express');
var app = express();
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.set('view engine', 'html');
app.set('view cache', false);
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
app.listen(server_port, server_ip_address, function(){
    console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});