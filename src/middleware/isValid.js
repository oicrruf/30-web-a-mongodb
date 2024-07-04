const isValid = (req, res, next) => {
  if (parseInt(req.params.id) > 10) {
    console.log("Is valid");
    next();
  } else {
    res.send({ message: "Your id is invalid" });
  }
};

module.exports = { isValid };
