const Express = require("express");
const MongoClient = require("mongodb").MongoClient;
const Mongoose = require("mongoose");
const graphqlHTTP = require("express-graphql");

// configuration
const schema = require("./schema/schema");
const dbconf = require("./config/db");
const port = 8000;

// Connect the database
// MongoClient.connect(dbconf.MONGO_URL, { useNewUrlParser: true });

// Start the app
const app = Express();

//app.use(BodyParser.json());
//app.use(BodyParser.urlencoded({ extended: true }));

// setup the GraphQL endpoint
app.use(
  "/graphql",
  new graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log("We are live on " + port);
});
