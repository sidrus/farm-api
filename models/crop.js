const mongoose = require('mongoose');
const {Schema} = mongoose;
const {seedSchema} = require('./seed');

const cropSchema = new Schema({
  seed: seedSchema,
  plantedOn: Date,
  rotatedOn: Date,
  harvestedOn: Date,
  lotNumber: String,
});

module.exports.Crop = mongoose.model('Crop', cropSchema);
module.exports.cropSchema = cropSchema;
