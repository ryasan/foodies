const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const createServer = require('./createServer');
const server = createServer();
require('dotenv').config({ path: 'variables.env' });

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

// TODO: create middleware that populates the user on each request
// server.express.use(async (req, res, next) => {});

const options = {
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },
  port: process.env.PORT,
};

server.start(options, deets => {
  console.log(`Server is now running on port http://localhost:${deets.port}`);
});
