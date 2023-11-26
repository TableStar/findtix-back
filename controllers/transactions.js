const {
  ticketCodeNamer,
  templateResSuccess,
  invoiceNamer,
} = require("../helper/utilities");
const {
  events,
  categories,
  ticketTypes,
  individualTickets,
  transactions,
  transactionDetails,
} = require("../models");
const crypto = require("crypto");
const midtransClient = require("midtrans-client");

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
      await transactions.create({
        userId: req.userData.id,
        eventId: req.body.eventId,
        transactionInvoice: invoiceNamer(req.body.eventId),
        ticketCount: req.body.ticketCount,
        totalPayment: req.body.totalPayment,
      });
      const resultCreate = await transactions.findOne({
        order: [["id", "DESC"]],
        raw: true,
      });
      console.log(
        "🚀 ~ file: transactions.js:41 ~ createTransaction: ~ resultCreate:",
        resultCreate
      );
      const promisesTickets = req.body.totalTickets.map(async (val, idx) => {
        const ticketsOneType = [];
        for (let i = 0; i < val.amount; i++) {
          ticketsOneType.push({
            userId: req.userData.id,
            ticketTypeId: val.ticketTypeId,
            ticketCode: ticketCodeNamer(result.name),
            details: {
              transactionId: resultCreate.id,
              buyerEmail: req.body.buyerEmail,
              buyerFirstName: req.body.buyerFirstName,
              buyerLastName: req.body.buyerLastName,
            },
          });
        }
        return await individualTickets.bulkCreate(ticketsOneType, {
          include: [{ model: transactionDetails, as: "details" }],
        });
      });
      const promiseReduceMax = req.body.totalTickets.map(async (val, idx) => {
        return await ticketTypes.decrement(
          { maxAmount: -Math.abs(val.amount) },
          { where: { id: val.ticketTypeId } }
        );
      });

      Promise.all(promisesTickets);
      Promise.all(promiseReduceMax);
      const resultTrans = await transactions.findOne({
        order: [["id", "DESC"]],
        // raw: true,
        // nest: true,
        include: [
          // { model: transactionDetails },
          { model: individualTickets },
        ],
      });
      req.transactionData = resultTrans;
      next();
      // await transactions.create({ x }, { include: [transactionDetails] });
    } catch (error) {
      console.log(error);
    }
  },
  getAllTransaction: async (req, res, next) => {
    try {
      const resultTrans = await transactions.findAll({
        order: [["id", "DESC"]],
        // raw: true,
        // nest: true,
        include: [
          // { model: transactionDetails },
          { model: individualTickets },
        ],
      });
      console.log(
        "🚀 ~ file: transactions.js:95 ~ createTransaction: ~ resultTrans:",
        resultTrans
      );
      return res
        .status(200)
        .send(
          templateResSuccess(true, "fetching transaction success", resultTrans)
        );
    } catch (error) {
      console.log(error);
    }
  },
  midTransSample: async (req, res, next) => {
    // Create Snap API instance
    let snap = new midtransClient.Snap({
      // Set to true if you want Production Environment (accept real transaction).
      isProduction: false,
      serverKey: "SB-Mid-server-4eE1Wks6qZNDzlwaHW6oKu6u",
    });

    let parameter = {
      transaction_details: {
        order_id: req.transactionData.dataValues?.transactionInvoice,
        gross_amount: req.transactionData.dataValues?.totalPayment,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: req.body.buyerFirstName,
        last_name: req.body.buyerLastName,
        email: req.body.buyerEmail,
        phone: "08111222333",
      },
    };

    snap.createTransaction(parameter).then((transaction) => {
      // transaction token

      console.log(
        "🚀 ~ file: transactions.js:145 ~ snap.createTransaction ~ transaction:",
        transaction
      );
      return res
        .status(200)
        .send(templateResSuccess(true, "SNAP Midtrans Success", transaction));
    });
  },
};
