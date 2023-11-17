'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ticketTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ticketTypes.belongsTo(models.events)
    }
  }
  ticketTypes.init({
    eventId: {
      type: DataTypes.INTEGER,
      references: { model: 'events', key: 'id' },
      onDelete: 'SET NULL'
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    maxAmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ticketTypes',
  });
  return ticketTypes;
};