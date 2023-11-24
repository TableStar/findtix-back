"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transactions.hasMany(models.transactionDetails);
    }
  }
  transactions.init(
    {
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
      transactionDate: DataTypes.DATE,
      ticketCount: DataTypes.INTEGER,
      totalPayment: DataTypes.INTEGER,
      paymentStatus: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "transactions",
      // paranoid: true,
    }
  );
  return transactions;
};
