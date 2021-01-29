const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  code:{type: String, unique:true},
  description: String
});

const Session = mongoose.model('session', sessionSchema); 

module.exports = {
  Session
};