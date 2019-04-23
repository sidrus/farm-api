const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productAttributeSchema = new Schema({
  productId: String,
  name: String,
  value: String,
});

module.exports = mongoose.model('ProductAttribute', productAttributeSchema);
