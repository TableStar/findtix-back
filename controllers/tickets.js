const { events, ticketTypes } = require("../models");
const { Op } = require("sequelize");
const db = require("../models");
const fs = require("fs");

module.exports = {
    postTicket: async (req, res) => {
        try {
            const { eventId, name, price, maxAmount } = req.body;
            const event = await events.findOne({
                where: { id: eventId },
            });

            if (!event) {
                return res.status(404).send({ error: "Event not found" });
            }

            const newTicketType = await ticketTypes.create({
                eventId,
                name,
                price,
                maxAmount,
            });

            res.status(201).send({ ticketType: newTicketType });
        } catch (error) {
            console.log("Error creating ticket type:", error);
            res.status(500).send({ error: "Internal Server Error" });
        }
    }
};
