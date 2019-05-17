const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const Mutation = {
  async signup(parent, { signupInput }, ctx) {
    // 1. lowercase their emails
    signupInput.email = signupInput.email.toLowerCase();
    // 2. hash their password
    const password = await bcrypt.hash(signupInput.password, 10);
    // 3 .create the user in the database
    const newUser = new User({
      email: signupInput.email,
      username: signupInput.username,
      password,
    });
    const user = await newUser.save();
    // 4 .create JWT token for user
    const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);
    // 5 .set the jwt as a cookie on the response
    setCookieToken(ctx, token);
    // 6 .return user
    return user;
  },
  async signin(parent, { email, password }, ctx) {
    // 1. check if user with email exists
    const user = await User.findOne({ email }, '_id email username password');
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // 2. check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Invalid Password!');
    }
    // 3. create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);
    // 4. set the cookie with the token
    setCookieToken(ctx, token);
    // 5. return the user
    return user;
  },
  async signout(parent, args, ctx) {
    ctx.response.clearCookie('token');
    return { message: 'See you again soon!' };
  },
};

const setCookieToken = (ctx, token) => {
  ctx.response.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  });
};

module.exports = Mutation;
