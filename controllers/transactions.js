const {
  events,
  categories,
  ticketTypes,
  individualTickets,
  transactions,
  transactionDetails,
} = require("../models");
const crypto = require("crypto");

module.exports = {
  createTransaction: async (req, res, next) => {
    try {
      const result = await events.findOne({
        where: { status: "Upcoming", id: req.body.eventId },
        attributes: { exclude: ["createdAt", "deletedAt", "updatedAt"] },
        include: [{ model: categories, attributes: ["name"] }, ticketTypes],
        raw: true,
        nest: true,
      });
      console.log(
        "🚀 ~ file: transactions.js:9 ~ createTransaction: ~ result:",
        result.ticketTypes.id
      );
      await transactions.create({ x }, { include: [transactionDetails] });
      console.log(
        "🚀 ~ file: transactions.js:26 ~ createTransaction: ~ arrayTicket:",
        arrayTicket
      );
      await individualTickets.bulkCreate(arrayTicket);
    } catch (error) {
      console.log(error);
    }
  },
};
