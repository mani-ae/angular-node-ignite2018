const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const mongoUri = process.env.MONGO_URL || 'mongodb://localhost:27017/ignite2018';

function connect() {
 mongoose.set('debug', true);
 return mongoose.connect(mongoUri, { useNewUrlParser: true });
}

module.exports = {
  connect,
  mongoose
};