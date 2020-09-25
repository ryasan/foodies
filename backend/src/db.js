const mongoose = require('mongoose')

const { MLAB_USER, MLAB_PASSWORD } = process.env

// connect to mlab database
mongoose
  .connect(
    `mongodb://${MLAB_USER}:${MLAB_PASSWORD}@ds259596.mlab.com:59596/notpinterest-db`,
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
  )
  .then(result => console.log('connected to DB'))
  .catch(err => console.log(err))

module.exports = mongoose
