const User = require('../models/user');
const Pin = require('../models/pin');

const Query = {
  async me(parent, args, ctx) {
    if (!ctx.request.userId) return null;
    return await User.findById(ctx.request.userId);
  },
  async pins(parent, { limit, skip }, ctx) {
    return await Pin.find({}, null, { limit, skip });
  },
  async pinDetails(parent, { pinId }, ctx) {
    return await Pin.findById(pinId);
  },
  async myPins(parent, { limit, skip }, ctx) {
    // 1. find user
    const user = await User.findById(ctx.request.userId);
    // 2. get user's pin id collection and return actual pin item
    const pins = await Pin.find({ _id: { $in: user.pins } }, null, {
      limit,
      skip,
    });
    // 3. return pins
    return pins;
  },
  async likedPins(parent, { limit, skip }, ctx) {
    return await Pin.find({ likedByIds: ctx.request.userId }, null, {
      limit,
      skip,
    });
  },
};

module.exports = Query;
