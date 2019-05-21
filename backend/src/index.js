require('dotenv').config({ path: 'variables.env' });

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const createServer = require('./createServer');
const server = createServer();
const User = require('./models/user');

server.express.use(cookieParser());

// decode the JWT so we can get the user Id on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

// create middleware that populates the user on each request
server.express.use(async (req, res, next) => {
  // skip if user isn't logged in
  if (!req.userId) return next();
  const user = await User.findById(req.userId, '_id email username');

  req.user = user;
  next();
});

const options = {
  // cors: {
  //   credentials: true,
  //   origin:
  //     process.env.NODE_ENV === 'development'
  //       ? process.env.FRONTEND_URL
  //       : process.env.NOW_FRONTEND_URL,
  // },
  // port: process.env.PORT,
};

server.start(options, deets => {
  console.log(`Server is now running on port http://localhost:${deets.port}`);
});
