'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cities.hasMany(models.events)
    }
  }
  cities.init({
    name: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, },
    updatedAt: { type: DataTypes.DATE, }
  }, {
    sequelize,
    modelName: 'cities',
  });
  return cities;
};