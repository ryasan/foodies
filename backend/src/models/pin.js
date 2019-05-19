const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pinSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  largeImage: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedByIds: Array,
  creatorUsername: {
    type: String,
    required: true,
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Pin', pinSchema);
