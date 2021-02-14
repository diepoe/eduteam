const mongoose = require('mongoose');
require("dotenv").config();

mongoose.Promise = global.Promise;

const url = process.env.MONGO_URI || 'mongodb://mongo:27017/graphqldb?authSource=admin';

mongoose.connect(url, { useNewUrlParser: true, user:"root", pass:"example" },);
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));