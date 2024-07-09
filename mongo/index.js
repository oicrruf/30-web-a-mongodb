const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.DATABASE_URI);

client
  .connect()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const db = client.db("mi-tienda");

module.exports = db;
