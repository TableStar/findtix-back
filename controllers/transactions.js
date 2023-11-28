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
const { Op } = require("sequelize");
const db = require("../models");

module.exports = {
  createTransaction: async (req, res, next) => {
    try {
      console.log("kiriman", req.body);
      const result = await events.findOne({
        where: { status: "Upcoming", id: req.body.eventId },
        attributes: { exclude: ["createdAt", "deletedAt", "updatedAt"] },
        include: [{ model: categories, attributes: ["name"] }, ticketTypes],
        raw: true,
        nest: true,
      });
      console.log(
        "🚀 ~ file: transactions.js:9 ~ createTransaction: ~ result:",
        result.ticketTypes.ticketTypeId
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
        for (let i = 0; i < val.quantity; i++) {
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
          { maxAmount: Math.abs(val.quantity) },
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
      console.log(req.userData);
      const resultTrans = await transactions.findAll({
        where: req.userData.id
          ? { userId: req.userData.id }
          : { [Op.ne]: null },
        attributes: {
          exclude: ["userId"],
        },
        // include: [individualTickets],
        order: [["id", req.query.order ? req.query.order : "DESC"]],
        raw: true,
        // nest: true,
      });
      // console.log(
      //   "🚀 ~ file: transactions.js:95 ~ createTransaction: ~ resultTrans:",
      //   resultTrans[0].dataValues.individualTickets[0].dataValues.ticketTypeId
      // );
      // const tickets = resultTrans[0].dataValues.individualTickets.map(
      //   (val, idx) => {
      //     return { ticketTypeId: val.dataValues.ticketTypeId };
      //   }
      // );
      // const transMap = resultTrans.map(async (val, idx) => {
      //   const tickets = val.dataValues.individualTickets.map(
      //     async (val, idx) => {
      //       return await ticketTypes.findOne({
      //         where: { id: val.dataValues.ticketTypeId },
      //         attributes: ["name"],
      //       });

      //     }
      //   );
      //   return Promise.all(tickets);
      // });
      // const promised = await Promise.all(transMap);
      // console.log("🚀 ~ file: transactions.js:137 ~ getAllTransaction: ~ promised:", promised)
      // // const resName = promised.map((val,idx) => {
      // //   return {ticketName:val.ticke}
      // // })
      const eventName = await Promise.all(
        resultTrans.map(async (val, idx) => {
          return events.findOne({
            where: { id: val.eventId },
            attributes: ["name"],
            raw: true,
          });
        })
      );
      const finalResult = resultTrans.map((val, idx) => {
        return { ...val, ...eventName[idx] };
      });

      console.log(
        "🚀 ~ file: transactions.js:149 ~ getAllTransaction: ~ namer:",
        eventName
      );
      return res
        .status(200)
        .send(
          templateResSuccess(true, "fetching transaction success", finalResult)
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
      serverKey: process.env.MIDTRANS_KEY,
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
        phone: req.body.buyerPhone,
      },
      item_details: req.body.totalTickets.map((val, idx) => {
        return {
          id: val.ticketTypeId,
          price: val.ticketPrice,
          quantity: val.quantity,
          name: val.ticketName,
        };
      }),
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
  editStatus: async (req, res, next) => {
    const t = await db.sequelize.transaction();
    try {
      await transactions.update(
        { paymentStatus: req.body.paymentStatus },
        { where: { transactionInvoice: req.params.inv }, transaction: t }
      );
      await t.commit();
      return res
        .status(200)
        .send(templateResSuccess(true, "status update success", null));
    } catch (error) {
      console.log(error);
      await t.rollback();
    }
  },
};
