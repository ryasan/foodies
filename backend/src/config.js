module.exports = {
  port: process.env.PORT || 8000,
  secret:
    process.env.NODE_ENV === 'development'
      ? process.env.MONGO_PASSWORD
      : process.env.MLAB_PASSWORD,
};
