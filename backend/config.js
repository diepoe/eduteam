const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://mongo:27017/graphqldb?authSource=admin';

mongoose.connect(url, { useNewUrlParser: true, user:"root", pass:"example" },);
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));