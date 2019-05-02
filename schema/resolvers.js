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
      console.log(args.seed);
      const seed = new Seed(args.seed);
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

  // -------------------------------------------
  // This resolver fetches seeds for a specific
  // vendor
  // -------------------------------------------
  Vendor: {
    seeds: (root, args) => {
      return Seed.find({vendorId: root.id}).exec();
    },
  },

  // -------------------------------------------
  // This resolver fetches crops for a specific
  // seed.  Useful to find out which crops used
  // a specific seed.
  // -------------------------------------------
  Seed: {
    vendor: (root, args) => {
      return Vendor.findById(root.vendor).exec();
    },

    crops: (root, args) => {
      return Crop.find({seedId: root.id}).exec();
    },
  },

  Crop: {
    seed: (root, args) => {
      return Seed.findById(root.seed).exec();
    },
  },
};

module.exports = RESOLVERS;
