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
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
