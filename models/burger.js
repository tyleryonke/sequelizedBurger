// model for burger table

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
    },

    devouredBy: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Uneaten"
    }

  });

  return Burger;

};
