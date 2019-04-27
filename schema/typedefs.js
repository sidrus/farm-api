const {gql} = require('apollo-server');

const TYPEDEFS = gql`
  "The crop represents the basic tracking item of the system"
  type Crop {
    id: ID!
    seed: Seed!
    plantedOn: String
    rotatedOn: String
    harvestedOn: String
    lotNumber: String!
  }

  "A vendor is any company which supplies seed to the farm."
  type Vendor {
    id: ID!
    name: String!
    website: String
    seeds: [Seed!]!
  }

  "A seed is planted in a crop and grown to harvest."
  type Seed {
    id: ID!
    name: String!
    vendor: Vendor!
    crops: [Crop!]!
    purchasedOn: String
    orderNumber: String
    lotNumber: String!
    size: String
    origin: String
    germPercent: Int
    hardPercent: Int
    totalPercent: Int
    germDate: String
    upc: String
  }

  type Query {
    """
    Returns all crops in the database.
    """
    crops: [Crop!]!
    """
    Returns all seeds in the database.
    """
    seeds: [Seed!]!
    """
    Returns all vendors in the database.
    """
    vendors: [Vendor!]!
  }

  type Mutation {
    createCrop(crop: CropInput): Crop
    createVendor(vendor: VendorInput): Vendor
    createSeed(seed: SeedInput): Seed
    updateSeed(seed: SeedInput): Seed
  }

  """
  Specifies the input structure of a crop
  """
  input CropInput {
    id: ID
    seed: SeedInput!
    plantedOn: String
    rotatedOn: String
    harvestedOn: String
    lotNumber: String!
  }

  """
  Specifies the input structure of a vendor
  """
  input VendorInput {
    id: ID
    name: String!
    website: String
  }

  """
  Specifies the input structure of a seed
  """
  input SeedInput {
    id: ID
    name: String!
    vendor: VendorInput!
    purchasedOn: String
    orderNumber: String
    lotNumber: String!
    size: String
    origin: String
    germPercent: Int
    hardPercent: Int
    totalPercent: Int
    germDate: String
    upc: String
  }
`;

module.exports = TYPEDEFS;
