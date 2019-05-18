const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Pin = require('../models/pin');

const Mutation = {
  async signup(parent, { signupInput }, ctx) {
    let { email, password, username } = signupInput;
    // 1. lowercase their emails
    email = email.toLowerCase();
    // 2. hash their password
    const hashedPw = await bcrypt.hash(password, 10);
    // 3 .create the user in the database
    const user = await new User({ email, username, password: hashedPw }).save();
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
  async createPin(parent, { createPinInput }, ctx) {
    const { image, largeImage, title, description } = createPinInput;
    const { userId, user } = ctx.request;
    // 1. check if they are logged in
    if (!userId) throw Error('You must be logged in to do that');
    // 2. save pin to database
    const pin = await new Pin({
      image,
      largeImage,
      title,
      description,
      creatorUsername: user.username,
      creatorId: userId,
    }).save();
    // 3. return pin
    return pin;
  },
};

const setCookieToken = (ctx, token) => {
  ctx.response.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  });
};

module.exports = Mutation;
