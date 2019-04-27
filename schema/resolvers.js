const {Crop} = require('../models/crop');
const {Vendor} = require('../models/vendor');
const {Seed} = require('../models/seed');

const RESOLVERS = {
  Query: {
    crops: () => {
      return Crop.find().exec();
    },

    getCrop: (root, args) => {
      return Crop.findById(args.id).exec();
    },

    seeds: () => {
      return Seed.find().exec();
    },

    getSeed: (root, args) => {
      return Seed.findById(args.id).exec();
    },

    vendors: () => {
      return Vendor.find().exec();
    },

    getVendor: (root, args) => {
      return Vendor.findById(args.id).exec();
    },
  },

  Mutation: {
    // --------------------------------------
    // Creates a new vendor document in the
    // database using the properties given in
    // the args parameter.
    // --------------------------------------
    createVendor: (root, args) => {
      const vendor = new Vendor(args.vendor);
      return vendor.save();
    },

    // ----------------------------------------
    // Updates a vendor document with the given
    // properties in the args parameter.
    // ----------------------------------------
    updateVendor: async (root, args) => {
      const vendor = await Vendor.findById(args.vendor.id).exec();
      Object.assign(vendor, args.vendor);
      return vendor.save();
    },

    // -------------------------------------
    // Creates a new seed document in the database
    // with the properties given in the args
    // parameter.
    //
    // If passed a vendor object, this method will
    // create or update the vendor object
    // -------------------------------------
    createSeed: async (root, args) => {
      const seed = new Seed(args.seed);

      // apply vendor updates
      const vendor =
        (await Vendor.findById(args.seed.vendor.id)) || new Vendor();
      Object.assign(vendor, args.seed.vendor);
      vendor.save();

      return seed.save();
    },

    // --------------------------------------
    // Updates a given seed document with the
    // properties given in the args parameter
    // --------------------------------------
    updateSeed: async (root, args) => {
      const seed = await Seed.findById(args.seed.id).exec();
      Object.assign(seed, args.seed);
      return seed.save();
    },

    // ----------------------------------------
    // Creates a new crop document with the
    // properties given in the args parameter
    // ---------------------------------------
    createCrop: (root, args) => {
      const crop = new Crop(args.crop);
      return crop.save();
    },

    // --------------------------------------
    // Updates a given crop document with the
    // properties given in the args parameter
    // --------------------------------------
    updateCrop: async (root, args) => {
      const crop = await Crop.findById(args.crop.id).exec();
      Object.assign(crop, args.crop);
      return crop.save();
    },
  },
};

module.exports = RESOLVERS;
