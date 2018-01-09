'use strict';

var mongoose = require('mongoose');

var comSchema = new mongoose.Schema({
	author:String,
	text:String
});

module.exports = mongoose.model('Comment',comSchema);