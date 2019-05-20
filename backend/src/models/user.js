const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  password: String,
  pins: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pin',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
