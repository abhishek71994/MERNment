'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var Comment = require('./src/models/comments');

//define the port
var port = process.env.PORT || 3001;
//connect to our mongoDB
mongoose.connect("mongodb://localhost/Comment");
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
//paths
app.get("/comments",function(req,res){
	Comment.find({},function(err,comments){
		if(err){
			res.send(err);
		}
		else{
			res.send(comments);
		}
	});
});
app.post("/comments",function(req,res){
	var comment = new Comment();
	comment.author = req.body.author;
	comment.text = req.body.text;
	comment.save(function(err){
		if(err){
			res.send(err);
		}else{
			res.send({ message:"Coomments added... YAY!" });
		}
	})
});
//updating the comments
app.put("/comments/:comment_id",function(req,res){
	Comment.findById(req.params.comment_id,function(err,comment){
		if(err){
			res.send(err);
		}
		(req.body.author) ? comment.author = req.body.author : null;
		(req.body.text) ? comment.text = req.body.text : null;
		comment.save(function(err){
			if(err){
				res.send(err);
			}
			res.json({ message : "Comment has been updated" });
		});
	});
});
//deleting the comments
app.delete("/comments/:comment_id",function(req,res){
	Comment.remove({ _id: req.params.comment_id },function(err,comment){
		if(err){
			res.send(err);
		}
		res.json({ message : "Comment has been deleted" });
	});
});
//setup the app
app.listen(port,function(){
	console.log(`The app is running on port ${port}`);
})