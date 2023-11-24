"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("ticketTypes", [
      {
        eventId: 1,
        name: "General Admission",
        price: 0,
        maxAmount: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 2,
        name: "Normal Ticket",
        price: 50000,
        maxAmount: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 2,
        name: "VIP",
        price: 100000,
        maxAmount: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 3,
        name: "General Admission",
        price: 125000,
        maxAmount: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 3,
        name: "VIP + Selfie session",
        price: 500000,
        maxAmount: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 4,
        name: "Front-Seat",
        price: 800000,
        maxAmount: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 4,
        name: "General Tickets",
        price: 350000,
        maxAmount: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 5,
        name: "1 Person Ticket",
        price: 150000,
        maxAmount: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 6,
        name: "1 Entry Ticket",
        price: 50000,
        maxAmount: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 7,
        name: "Personal Ticket",
        price: 200000,
        maxAmount: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 7,
        name: "Couple's Ticket",
        price: 350000,
        maxAmount: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 8,
        name: "CAT A",
        price: 650000,
        maxAmount: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
