"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transactionDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transactionDetails.belongsTo(models.transactions, {
        foreignKey: "transactionId",
      });
      transactionDetails.belongsTo(models.individualTickets, {
        foreignKey: "ticketId",
        as: "tickets",
      });
    }
  }
  transactionDetails.init(
    {
      transactionId: DataTypes.INTEGER,
      ticketId: DataTypes.INTEGER,
      usedPromoId: DataTypes.INTEGER,
      buyerEmail: DataTypes.STRING,
      buyerFirstName: DataTypes.STRING,
      buyerLastName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "transactionDetails",
    }
  );
  return transactionDetails;
};
