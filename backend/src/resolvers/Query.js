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
  async myPins(parent, args, ctx) {
    // 1. find user
    const user = await User.findById(ctx.request.userId);
    // 2. get user's pin id collection and return actual pin item
    const pins = user.pins.map(async pinId => {
      return await Pin.findById(pinId);
    });

    return pins;
  },
};

module.exports = Query;
