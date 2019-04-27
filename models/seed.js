const mongoose = require('mongoose');
const {Schema} = mongoose;
const {vendorSchema} = require('./vendor');
const {cropSchema} = require('./crop');

console.log(`Crop Schema: ${cropSchema}`);

const seedSchema = new Schema({
  name: String,
  vendor: vendorSchema,
  purchasedOn: Date,
  orderNumber: String,
  lotNumber: String,
  size: String,
  origin: String,
  germPercent: Number,
  hardPercent: Number,
  totalPercent: Number,
  germDate: String,
  upc: String,
});

module.exports.Seed = mongoose.model('Seed', seedSchema);
module.exports.seedSchema = seedSchema;
