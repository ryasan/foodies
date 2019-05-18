const User = require('../models/user');
const Pin = require('../models/pin');

const Query = {
  async me(parent, args, ctx) {
    if (!ctx.request.userId) return null;

    return await User.findById(ctx.request.userId);
  },
  async pins(parent, args, ctx) {
    return await Pin.find({});
  },
  async pinDetails(parent, { id }, ctx) {
    return await Pin.findById(id);
  },
};

module.exports = Query;
