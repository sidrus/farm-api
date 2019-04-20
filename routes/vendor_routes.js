module.exports = (app, db) => {
  app.post("/vendors", (req, res) => {
    console.log(req.body);
    res.send("Posted to vendors route");
  });
};
