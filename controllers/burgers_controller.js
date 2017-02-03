var db = require("../models");

module.exports = function(app) {

  // Get all books
  app.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function(result) {
      res.render("index", {burgers: result});
    });

  });

  // Add a book
  app.post("/create", function(req, res) {
    // Take the request...
    var burger = req.body;

    // Then add the character to the database using sequelize
    db.Burger.create({
      burger_name: burger.newBurger
    }).then(function(result) {
      res.redirect("/");
    });

  });

  // Delete a book
  app.put("/devour/:id", function(req, res) {
    // Add sequelize code to update a post to the values in req.body,
    // update the post where the id is equal to req.body.id.
    // Then return the result to the user with res.json
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
