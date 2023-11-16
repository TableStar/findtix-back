"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profileImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      profileImages.poster = profileImages.belongsTo(models.poster, {
        foreignKey: "postId",
      });
      // define association here
    }
  }
  profileImages.init(
    {
      postId: DataTypes.INTEGER,
      images: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "profileImages",
    }
  );
  return profileImages;
};
