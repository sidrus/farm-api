const mongoose = require('mongoose');
const {Schema} = mongoose;

const vendorSchema = new Schema({
  name: String,
  website: String,
});

module.exports.Vendor = mongoose.model('Vendor', vendorSchema);
module.exports.vendorSchema = vendorSchema;
