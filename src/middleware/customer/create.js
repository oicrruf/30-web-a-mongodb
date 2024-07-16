const yup = require("yup");

const createCustomer = (req, res, next) => {
  let isValid = false;

  const { firstName, lastName, email, phone } = req.body;

  let customerSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
  });

  customerSchema
    .validate({ firstName, lastName, email, phone })
    .then((valid) => (isValid = valid))
    .catch((err) => (message = err))
    .then(() =>
      isValid
        ? next()
        : res.send({
            error: {
              type: message.name,
              message: message.error,
            },
          })
    );
};

module.exports = { createCustomer };
