const mongoose = require('mongoose');
const {Schema} = mongoose;

const cropSchema = new Schema({
  seed: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seed',
    required: true,
  },
  plantedOn: Date,
  rotatedOn: Date,
  harvestedOn: Date,
  lotNumber: String,
});

module.exports.Crop = mongoose.model('Crop', cropSchema);
module.exports.cropSchema = cropSchema;
