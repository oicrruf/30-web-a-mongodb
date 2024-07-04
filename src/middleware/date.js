const date = (req, res, next) => {
  console.log(Date.now());
  next();
};

module.exports = { date };
