'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  id: Number,
  facebook_id: String,
  friends : [

  ]
});

module.exports = mongoose.model('User', UserSchema);
