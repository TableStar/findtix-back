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
    }
  }
  events.init({
    creatorId: DataTypes.INTEGER,
    category: DataTypes.STRING,
    title: DataTypes.STRING,
    maxAttendees: DataTypes.STRING,
    tags: DataTypes.STRING,
    caption: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    img: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'events',
  });
  return events;
};