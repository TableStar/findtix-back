'use strict';

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
    await queryInterface.bulkInsert('ticketTypes', [
      {
        eventId: 9,
        name: "General Admission",
        price: 0,
        maxAmount: 150
      },
      {
        eventId: 10,
        name: "Normal Ticket",
        price: 50000,
        maxAmount: 150
      },
      {
        eventId: 10,
        name: "VIP",
        price: 50000,
        maxAmount: 100
      },
      {
        eventId: 11,
        name: "General Admission",
        price: 125000,
        maxAmount: 200
      },
      {
        eventId: 11,
        name: "VIP + Selfie session",
        price: 500000,
        maxAmount: 50
      },
      {
        eventId: 12,
        name: "Front-Seat",
        price: 800000,
        maxAmount: 100
      },
      {
        eventId: 12,
        name: "General Tickets",
        price: 350000,
        maxAmount: 300
      },
      {
        eventId: 13,
        name: "1 Person Ticket",
        price: 150000,
        maxAmount: 200
      },
      {
        eventId: 14,
        name: "1 Entry Ticket",
        price: 50000,
        maxAmount: 200
      },
      {
        eventId: 15,
        name: "Personal Ticket",
        price: 200000,
        maxAmount: 20
      },
      {
        eventId: 15,
        name: "Couple's Ticket",
        price: 350000,
        maxAmount: 10
      },
      {
        eventId: 16,
        name: "CAT A",
        price: 650000,
        maxAmount: 200
      }

    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
