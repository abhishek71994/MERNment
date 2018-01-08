'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./src/models/comment');
var app = express();

//define the port
var port = process.env.PORT || 3001;

//basic init

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//basic get request
app.get("/",function(req,res){
	res.json({ message : "The API is working!" });
})
//for CORS problem
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
//setup the app
app.listen(port,function(){
	console.log(`The app is running on port ${port}`);
})