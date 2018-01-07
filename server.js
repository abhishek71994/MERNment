'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

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

//setup the app
app.listen(port,function(){
	console.log(`The app is running on port ${port}`);
})