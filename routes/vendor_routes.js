module.exports = (app, db) => {
  app.post("/vendors", (req, res) => {
    res.send("Posted to vendors route");
  });
};
