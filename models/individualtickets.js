"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class individualTickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association
      individualTickets.belongsTo(models.auths, { foreignKey: "userId" });
      individualTickets.belongsToMany(models.transactions, {
        through: models.transactionDetails,
        foreignKey: "ticketId",
      });
      individualTickets.hasOne(models.transactionDetails, {
        foreignKey: "ticketId",
        as: "details",
      });
    }
  }
  individualTickets.init(
    {
      ticketCode: DataTypes.STRING,
      ticketTypeId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      // ticketHolderFirstName: DataTypes.STRING,
      // ticketHolderLastName: DataTypes.STRING,
      // ticketHolderEmail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "individualTickets",
    }
  );
  return individualTickets;
};
