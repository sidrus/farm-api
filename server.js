const express = require("express");
const mongo = require("mongodb");
const { MongoClient } = mongo;
const routes = require("./routes/index");

const port = 8000;
const app = express();

routes(app, {});

app.use(express.json());
app.listen(port, () => {
  console.log("We are live on " + port);
});
