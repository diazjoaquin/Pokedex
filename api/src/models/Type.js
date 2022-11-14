const { DataTypes } = require("sequelize");


const Type = (sequelize) => {
  sequelize.define("Type", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {timestamps: false});
} 

module.exports = Type;