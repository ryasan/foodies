const User = require('../models/user');
const Pin = require('../models/pin');

const Query = {
  async me(parent, args, ctx) {
    if (!ctx.request.userId) return null;

    return await User.findById(ctx.request.userId);
  },
  async pins(parent, args, ctx) {
    return Pin.find({});
  },
};

module.exports = Query;
