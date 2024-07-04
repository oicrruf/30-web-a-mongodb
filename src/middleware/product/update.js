const yup = require("yup");

const updateProduct = (req, res, next) => {
  let isValid = false;

  const { name, price, barcode, stock, sold_out } = req.body;

  let productSchema = yup.object().shape({
    name: yup.string(),
    price: yup.number().positive(),
    barcode: yup.string(),
    stock: yup.number(),
    sold_out: yup.boolean(),
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

module.exports = { updateProduct };
