const yup = require("yup");

const createProduct = (req, res, next) => {
  let isValid = false;

  const { name, price, barcode, stock, sold_out } = req.body;

  let productSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required().positive(),
    barcode: yup.string(),
    stock: yup.number().required(),
    sold_out: yup.boolean().required(),
  });

  productSchema
    .validate({ name, price, barcode, stock, sold_out })
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

module.exports = { createProduct };
