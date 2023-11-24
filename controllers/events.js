const { events } = require("../models");
const db = require("../models");
const fs = require("fs");

module.exports = {
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
