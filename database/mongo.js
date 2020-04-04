const mongoose = require('mongoose');

const db_url = `mongodb://<dbuser>:<dbpassword>@ds115420.mlab.com:15420/james--google-books-homework`;

const createConnection = () => {
  try {
    mongoose.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    mongoose.connection.once('open', () => {
      console.log('[database]: is connected to MongoDB');
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = createConnection;