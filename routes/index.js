const vendorRoutes = require("./vendor_routes");

module.exports = (app, db) => {
  vendorRoutes(app, db);
};
