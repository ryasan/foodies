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
  async pinDetails(parent, { pinId }, ctx) {
    return await Pin.findById(pinId);
  },
  async myPins(parent, args, ctx) {
    // 1. find user
    const user = await User.findById(ctx.request.userId);
    // 2. get user's pin id collection and return actual pin item
    const pins = await Pin.find({ _id: { $in: user.pins } });
    // 3. return pins
    return pins;
  },
};

module.exports = Query;
