const graphql = require("graphql");

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const VendorType = new GraphQLObjectType({
  name: "Vendor",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    website: { type: GraphQLString }
  })
});

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    upc: { type: GraphQLInt },
    type: { type: GraphQLString },
    current_quantity: { type: GraphQLInt },
    minimum_quantity: { type: GraphQLInt },
    vendor: {
      type: VendorType,
      resolve(parent, args) {}
    }
  })
});

const ProductAttributesType = new GraphQLObjectType({
  name: "Attribute",
  fields: () => ({
    id: { type: GraphQLID },
    product: {
      type: ProductType,
      resolve(parent, args) {}
    },
    name: { type: GraphQLString },
    value: { type: GraphQLString }
  })
});

const CropType = new GraphQLObjectType({
  name: "Crop",
  fields: () => ({
    id: { type: GraphQLID },
    seed: {
      type: ProductType,
      resolve(parent, args) {}
    },
    lot: { type: GraphQLString },
    germination_date: { type: GraphQLString },
    vegetative_date: { type: GraphQLString },
    harvest_date: { type: GraphQLString },
    traysize: { type: GraphQLString },
    seed_weight: { type: GraphQLInt },
    yield_weight: { type: GraphQLInt }
  })
});

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    vendor: {
      type: VendorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {}
    },

    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {}
    },

    attribute: {
      type: ProductAttributesType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {}
    },

    crop: {
      type: CropType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {}
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQueryType
});
