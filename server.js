const cors = require('cors');
const {ApolloServer} = require('apollo-server-express');
const Express = require('express');
const Mongoose = require('mongoose');

// configuration
const typeDefs = require('./schema/typedefs');
const resolvers = require('./schema/resolvers');
const {MONGO_URL, MONGO_URL_DEV} = require('./config/db');
const IS_DEV = true;
const dburl = IS_DEV ? MONGO_URL_DEV : MONGO_URL;

const PORT = process.env.PORT || 4000;
const app = new Express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

Mongoose.connect(dburl, {useNewUrlParser: true});
Mongoose.connection.once('open', () => {
  console.log('Connected to the mongo database');
});

server.applyMiddleware({app});
app.use(cors);
app.listen({port: PORT}, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
