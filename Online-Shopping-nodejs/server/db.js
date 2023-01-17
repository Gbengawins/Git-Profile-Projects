const mongoose = require('mongoose');
const { mongoURI } = require('./config');

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Db connected successfully'))
  .catch((err) => console.log(err.message));
