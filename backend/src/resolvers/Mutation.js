const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutation = {
  async signup(parent, { signupInput }, ctx, info) {
    // lowercase their emails
    signupInput.email = signupInput.email.toLowerCase();
    // hash their password
    const password = await bcrypt.hash(signupInput.password, 10);
    // TODO: create the user in the database
    const user = {
      _id: Math.random().toString(),
      email: signupInput.email,
      username: signupInput.username,
      password,
    };
    // create JWT token for user
    const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);
    // set the jwt as a cookie on the response
    setCookieToken(ctx, token);

    // return user
    return user;
  },
};

const setCookieToken = (ctx, token) => {
  ctx.response.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  });
};

module.exports = Mutation;
