var express = require("express");
var router = express.Router();

var db = require("../models/burger.js");

module.exports = function(app) {

  // Get all books
  app.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function(result) {
      return res.json(result);
    });

  });

  // Add a book
  app.post("/create", function(req, res) {
    // Take the request...
    var burger = req.body;

    // Then add the character to the database using sequelize
    db.Book.create({
      burger_name: burger.name
    }).then(function(result) {
      return res.json(result);
    });

  });

  // Delete a book
  app.put("/update/:id", function(req, res) {
    // Add sequelize code to update a post to the values in req.body,
    // update the post where the id is equal to req.body.id.
    // Then return the result to the user with res.json
    db.Post.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      return res.json(result);
    });
  });

};
