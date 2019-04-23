const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  upc: Number,
  type: String,
  current_quantity: Number,
  minimum_quantity: Number,
});

module.exports = mongoose.model('Product', productSchema);
