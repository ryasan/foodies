const mongoose = require('mongoose');

const { MONGO_USER, MONGO_PASSWORD, MONGO_DB } = process.env;

mongoose
  .connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@notpinterest-cluster-bwpri.mongodb.net/${MONGO_DB}?retryWrites=true`,
    { useNewUrlParser: true, useCreateIndex: true },
  )
  .then((result) => console.log('connected to DB'))
  .catch(err => console.log(err));

module.exports = mongoose;
