// import graphql from 'graphql';
const graphql = require('graphql');

const Crop = require('../models/crop');
const Attribute = require('../models/product_attribute');
const Product = require('../models/product');
const Vendor = require('../models/vendor');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = graphql;

const VendorType = new GraphQLObjectType({
  name: 'Vendor',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {},
    },
    website: {type: GraphQLString},
  }),
});

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    upc: {type: GraphQLInt},
    type: {type: GraphQLString},
    current_quantity: {type: GraphQLInt},
    minimum_quantity: {type: GraphQLInt},
    vendors: {
      type: new GraphQLList(VendorType),
      resolve(parent, args) {},
    },
    attributes: {
      type: new GraphQLList(ProductAttributesType),
      resolve(parent, args) {},
    },
  }),
});

const ProductAttributesType = new GraphQLObjectType({
  name: 'Attribute',
  fields: () => ({
    id: {type: GraphQLID},
    product: {
      type: ProductType,
      resolve(parent, args) {},
    },
    name: {type: GraphQLString},
    value: {type: GraphQLString},
  }),
});

const CropType = new GraphQLObjectType({
  name: 'Crop',
  fields: () => ({
    id: {type: GraphQLID},
    seed: {
      type: ProductType,
      resolve(parent, args) {},
    },
    lot: {type: GraphQLString},
    germination_date: {type: GraphQLString},
    vegetative_date: {type: GraphQLString},
    harvest_date: {type: GraphQLString},
    traysize: {type: GraphQLString},
    seed_weight: {type: GraphQLInt},
    yield_weight: {type: GraphQLInt},
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    // Return a single vendor with id = :id
    vendor: {
      type: VendorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        return Vendor.findById(args.id).exec();
      },
    },

    // Return a list of all vendors
    vendors: {
      type: new GraphQLList(VendorType),
      resolve(parent, args) {
        return Vendor.find().exec();
      },
    },

    // Return a single product with the given id
    product: {
      type: ProductType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        return Product.findById(args.id).exec();
      },
    },

    // Return a list of all products
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find().exec();
      },
    },

    // Return a single attribute given the id
    attribute: {
      type: ProductAttributesType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        return Attribute.findById(args.id).exec();
      },
    },

    // Return a list of all attributes
    attributes: {
      type: new GraphQLList(ProductAttributesType),
      resolve(parent, args) {
        return Attribute.find().exec();
      },
    },

    // Return a list of attributes for a given product id
    product_attributes: {
      type: new GraphQLList(ProductAttributesType),
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        return Attribute.find({productId: args.id}).exec();
      },
    },

    // Return a specific crop given a crop id
    crop: {
      type: CropType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        return Crop.findById(args.id).exec();
      },
    },

    // Return a list of all crops
    crops: {
      type: new GraphQLList(CropType),
      resolve(parent, args) {
        return Crop.find().exec();
      },
    },
  },
});

// const RootMutationType = new GraphQLObjectType({
//  name: 'RootMutation',
//  fields: {},
// });

module.exports = new GraphQLSchema({
  query: RootQueryType,
  // mutation: RootMutationType,
});
