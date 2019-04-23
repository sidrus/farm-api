const express = require('express');
const GraphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

// import express from 'express';
// import GraphqlHTTP from 'express-graphql';
// import mongoose from 'mongoose';

// configuration
const schema = require('./schema/schema');
const {MONGO_URL, MONGO_URL_DEV} = require('./config/db');
// import schema from './schema/schema';
// import { MONGO_URL_DEV, MONGO_URL } from './config/db';

const port = 8000;
const IS_DEV = true;

// Connect the database
const dburl = IS_DEV ? MONGO_URL_DEV : MONGO_URL;
// mongoose.connect(dburl, {useNewUrlParser: true});

// Start the app
const app = express();

// app.use(BodyParser.json());
// app.use(BodyParser.urlencoded({ extended: true }));

// setup the GraphQL endpoint
app.use(
    '/graphql',
    new GraphqlHTTP({
      schema,
      graphiql: true,
    })
);

app.listen(port, () => {
  console.log('We are live on ' + port);
});
