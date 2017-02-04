var db = require("../models");

module.exports = function(app) {

  // Get all burgers
  app.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function(result) {
      res.render("index", {burgers: result});
    });

  });

  // Add a burger
  app.post("/create", function(req, res) {
    // Take the request...
    var burger = req.body;

    // Then add the burger to the database using sequelize
    db.Burger.create({
      burger_name: burger.newBurger
    }).then(function(result) {
      res.redirect("/");
    });

  });

  // Devour a burger
  app.put("/devour/:id", function(req, res) {
    // Change burger status to devoured based on id associated with button, and set devouredBy to name in field
    db.Burger.update({
      devoured: true,
      devouredBy: req.body.devouredBy
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.redirect("/");
    });
  });

};
