const { events, categories, ticketTypes, cities } = require("../models")
const { Op } = require("sequelize");
const db = require("../models");
const fs = require("fs");


module.exports = {
    getUpcomingEvents: async (req, res) => {
        try {
            const { name, limit, price, startDate, endDate, category, city, ...others } = req.query
            const result = await events.findAll({
                where: {
                    status: "Upcoming",
                    name: name ? { [Op.like]: `%${name}%` } : { [Op.ne]: null },
                    startDate: startDate ? { [Op.between]: [startDate, endDate] } : { [Op.ne]: null },
                    ...others
                },
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                include: [
                    {
                        model: categories,
                        attributes: ['name'],
                        where: { name: category ? category : { [Op.ne]: null } }
                    },
                    {
                        model: ticketTypes,
                        where: { price: price ? price : { [Op.or]: [{ [Op.ne]: null }, { [Op.is]: null }] } }
                    },
                    {
                        model: cities,
                        attributes: ['name'],
                        where: { name: city === "Online" ? "Online" : city ? { [Op.or]: [{ [Op.like]: `%${city}%` }, "Online" ] } : { [Op.ne]: null } }
                    }
                ],
                limit: parseInt(limit) || 8,
            })
            // result.forEach(value => value.ticketTypes.sort((a, b) => a.price - b.price))
            return res.status(200).send(result)
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
          category,
          title,
          maxAttendees,
          tags,
          caption,
          city,
          address,
          startDate,
          endDate,
          description,
        } = req.body;

        const result = await events.create(
          {
            creatorId,
            category,
            title,
            maxAttendees,
            tags,
            caption,
            city,
            address,
            startDate,
            endDate,
            img: req.file.filename,
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
}