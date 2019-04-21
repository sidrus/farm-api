const VendorModel = require("../models/vendor");

module.exports = (app, db) => {
  /*
   * Create a new vendor
   */
  app.post("/vendor", async (request, response) => {
    try {
      var vendor = new VendorModel(request.body);
      var result = await vendor.save();

      response.send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  /*
   * Update a vendor
   */
  app.put("/vendor/:id", async (request, response) => {
    try {
      var vendor = await VendorModel.findById(request.params.id).exec();
      vendor.set(request.body);
      var result = await vendor.save();

      response.send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  /*
   * Delete a vendor
   */
  app.delete("/vendor/:id", async (request, response) => {
    try {
      var result = await VendorModel.deleteOne({ _id: request.params.id }).exec();

      response.send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  /*
   * Find a single vendor
   */
  app.get("/vendor/:id", async (request, response) => {
    try {
      var result = await VendorModel.findById(request.params.id).exec();

      response.send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  /*
   * Get all vendors
   */
  app.get("/vendors", async (request, response) => {
    try {
      console.log("fetching vendors...");

      var result = await VendorModel.find().exec();
      response.send(result);

      console.log(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });
};
