const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Pin = require('../models/pin');
const utils = require('../utils');

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
    utils.setCookieToken(ctx, token);
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
    utils.setCookieToken(ctx, token);
    // 5. return the user
    return user;
  },
  async signout(parent, args, ctx) {
    ctx.response.clearCookie('token');
    return { message: 'See you again soon!' };
  },
  async createPin(parent, { createPinInput }, ctx) {
    console.log('create pin');
    const {
      image,
      largeImage,
      title,
      description,
      imgPublicId,
    } = createPinInput;

    const { userId, user } = ctx.request;
    // 1. check if they are logged in
    if (!userId) throw Error('You must be logged in to do that');
    // 2. save pin to database
    const pin = await new Pin({
      image,
      largeImage,
      title,
      description,
      imgPublicId,
      creatorUsername: user.username,
      creatorId: userId,
    }).save();
    // 3. update user's pin id collection
    await User.findByIdAndUpdate(userId, { $push: { pins: pin._id } });
    // 4. return pin
    return pin;
  },
  async updatePinLikes(parent, { pinId }, ctx) {
    // 1. find pin that needs to be updated
    const pin = await Pin.findById(pinId);
    const { userId } = ctx.request;
    const { likedByIds } = pin;

    // 2. if user already liked pin remove like
    if (likedByIds.includes(userId)) {
      likedByIds.splice(likedByIds.indexOf(userId, 1));
      // 3. if user hasn't like pin yet add like
    } else {
      likedByIds.push(userId);
    }

    await pin.save();

    // 4. return pin
    return pin;
  },
  async deletePin(parent, { pinId }, ctx) {
    // 1. find the pin
    const pin = await Pin.findById(pinId);
    // 2. check if they own the pin
    const ownsPin = pin.creatorId.toString() === ctx.request.userId;
    if (!ownsPin) {
      throw new Error("This isn't yours to delete!");
    }
    // 3. delete image from cloudinary
    utils.deleteImageFromCloud(pin.imgPublicId, ctx.response);
    // 4. remove pin from users pin collection
    await User.findByIdAndUpdate(ctx.request.userId, {
      $pull: { pins: pin._id },
    });
    // 5. delete pin
    await Pin.findByIdAndDelete(pinId);
    // 6. return pin id
    return { _id: pinId };
  },
};

module.exports = Mutation;
