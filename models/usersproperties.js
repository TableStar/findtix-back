"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usersProperties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usersProperties.auths = usersProperties.belongsTo(models.auths, {
        foreignKey: "userId",
      });
    }
  }
  usersProperties.init(
    {
      userId: DataTypes.INTEGER,
      referralCode: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      idCardNumber: DataTypes.INTEGER,
      profileImage: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      creatorCompany: DataTypes.STRING,
      refpoints: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "usersProperties",
      // paranoid: true,
    }
  );
  return usersProperties;
};
