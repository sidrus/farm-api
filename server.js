const Express = require("express");
const MongoClient = require("mongodb").MongoClient;
const BodyParser = require("body-parser");

const routes = require("./routes/index");
const dbconf = require("./config/db");

const port = 8000;
const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

MongoClient.connect(dbconf.MONGO_URL, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.error(err);

  const db = database.db("farm-api");
  routes(app, db);
});

app.listen(port, () => {
  console.log("We are live on " + port);
});
