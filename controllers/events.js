const { events, categories, ticketTypes, cities, auths } = require("../models")
const { Op } = require("sequelize");
const db = require("../models");
const fs = require("fs");
const { filterDate } = require("../helper/filterDate");

module.exports = {
  getUpcomingEvents: async (req, res) => {
    try {
      const { name, limit, price, startDate, endDate, category, city, date, page, creatorId, status, ...others } = req.query
      const resDate = date ? filterDate(date) : null
      const option = {
        where: {
          status: status === "all" ? {[Op.ne]: null} : status || "Upcoming",
          name: name ? { [Op.like]: `%${name}%` } : { [Op.ne]: null },
          startDate: resDate ? { [Op.between]: [resDate.startDate, resDate.endDate] } : startDate ? { [Op.between]: [startDate, endDate] } : { [Op.ne]: null },
          ...others
        },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: categories,
            attributes: ['name'],
            where: { name: category ? category.replaceAll("and", "&") : { [Op.ne]: null } }
          },
          {
            model: ticketTypes,
            where: { price: price === "free" ? 0 : price === "paid" ? { [Op.gt]: 0 } : price ? price : { [Op.or]: [{ [Op.ne]: null }, { [Op.is]: null }] } }
          },
          {
            model: cities,
            attributes: ['name'],
            where: { name: city === "Online" ? "Online" : city ? { [Op.or]: [{ [Op.like]: `%${city}%` }, "Online"] } : { [Op.ne]: null } }
          },
          {
            model: auths,
            attributes: ['username'],
            where: { id: creatorId ? creatorId : { [Op.ne]: null } }
          }
        ],
        limit: parseInt(limit) || 8,
        offset: (parseInt(page) - 1) * 8 || 0
      }
      const result = await events.findAll(option)
      result.forEach(value => value.ticketTypes.sort((a, b) => a.price - b.price))
      const template = { success: true, result }
      if (page) {
        const totalResult = await events.count({ ...option, group: 'events.id' })
        template.totalResult = totalResult.length
      }
      return res.status(200).send(template)
    } catch (error) {
      console.log(error);
      return res.status(500).send(error)
    }
  },
  getFreeEvents: async (req, res) => {
    try {
      const result = await events.findAll({
        where: { status: "upcoming" },
        include: [
          { model: categories },
          {
            model: ticketTypes,
            where: { price: 0 }
          }
        ],
        limit: 8,
      })
      return res.status(200).send(result)
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  postEvent: async (req, res, next) => {
    try {
      // Pengecekan apakah ada file yang diunggah
      if (!req.file) {
        return res.status(400).send({
          success: false,
          message: "No file uploaded",
        });
      }

      const t = await db.sequelize.transaction();
      try {
        const {
          creatorId,
          categoryId,
          name,
          caption,
          cityId,
          location,
          startDate,
          endDate,
          description,
        } = req.body;

        const result = await events.create(
          {
            creatorId,
            categoryId,
            name,
            caption,
            cityId,
            location,
            startDate,
            endDate,
            img: req.file.filename,
            status: "Upcoming",
            description,
          },
          {
            transaction: t,
          }
        );

        await t.commit();
        return res.status(201).send({
          success: true,
          result,
          message: "Your event has been created"
        });
      } catch (error) {
        await t.rollback();
        console.log("masuk error");
        console.error(error);
        fs.unlinkSync(`./public/${req.file.filename}`);
        return res.status(500).send({
          success: false,
          message: "Error creating event",
          error: error.message,
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
};