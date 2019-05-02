const mongoose = require('mongoose');
const {Schema} = mongoose;

const seedSchema = new Schema({
  name: String,
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true,
  },
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
