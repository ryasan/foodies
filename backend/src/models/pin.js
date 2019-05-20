const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pinSchema = new Schema({
  image: String,
  largeImage: String,
  imgPublicId: String,
  title: String,
  description: String,
  likedByIds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  creatorUsername: String,
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Pin', pinSchema);
