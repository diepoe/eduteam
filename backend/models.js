// config of mongodb models
const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  code:{type: String, unique:true, minlength: 6, maxlength: 6},
  description: String
});

const contributionSchema = new Schema({
  author: String,
  content: String,
  sessionID: String
});

const Session = mongoose.model('session', sessionSchema); 
const Contribution = mongoose.model('contribution', contributionSchema)

module.exports = {
  Session,
  Contribution
};