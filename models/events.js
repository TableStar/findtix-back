'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      events.belongsTo(models.categories)
      events.belongsTo(models.cities)
      events.hasMany(models.ticketTypes)
    }
  }
  events.init({
    creatorId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    categoryId: {
      type: DataTypes.INTEGER,
      references: {model: "categories", key: "id"}
    },
    img: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    location: DataTypes.STRING,
    cityId: DataTypes.INTEGER,
    caption: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'events',
  });
  return events;
};