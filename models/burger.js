// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {

    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  });

  return Burger;

};
