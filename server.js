const express = require("express");
const mongo = require("mongodb");
const bodyParser = require("body-parser");
const { MongoClient } = mongo;
const routes = require("./routes/index");
const dbconf = require("./config/db");

const port = 8000;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(dbconf.MONGO_URL, (err, database) => {
  if (err) return console.error(err);

  const db = database.db("farm-api");

  routes(app, db);
  app.listen(port, () => {
    console.log("We are live on " + port);
  });
});
