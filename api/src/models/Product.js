const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      sizes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      discount: {
        type: DataTypes.BOOLEAN,
      },
      colors: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
        defaultValue: []
      },
    },
    {
      timestamps: false,
    }
  );
};
