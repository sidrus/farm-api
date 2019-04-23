const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cropSchema = new Schema({
  seedId: String,
  lot: String,
  germination_date: Date,
  vegetation_date: Date,
  harvest_date: Date,
  traysize: String,
  seed_weight: Number,
  yield_weight: Number,
});

module.exports = mongoose.model('Crop', cropSchema);
