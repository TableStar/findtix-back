"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      eventId: {
        type: Sequelize.INTEGER,
      },
      transactionInvoice: {
        type: Sequelize.STRING,
      },
      transactionDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      ticketCount: {
        type: Sequelize.INTEGER,
      },
      totalPayment: {
        type: Sequelize.INTEGER,
      },
      paymentStatus: {
        type: Sequelize.STRING,
        defaultValue: "waiting",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("transactions");
  },
};
