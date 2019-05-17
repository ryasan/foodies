const User = require('../models/user');

const Query = {
  users() {
    return [];
  },
  async me(parent, args, ctx) {
    if (!ctx.request.userId) return null;

    return await User.findById(ctx.request.userId);
  },
};

module.exports = Query;
