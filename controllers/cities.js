const { Op } = require("sequelize");
const { templateResponse } = require("../helper/utils");
const { cities } = require("../models");

module.exports = {
    getCities: async (req, res, next) => {
        try {
            const { name } = req.query
            const result = await cities.findAll({
                where: {
                    name: name ? { [Op.like]: `%${name}%` } : { [Op.or]: ["Jakarta Pusat", "Surabaya", "Bandung"] }
                },
                attributes: ["name"],
                raw: true,
                limit: 3
            })
            return res.status(200).send({ success: true, result })
        } catch (error) {
            console.log(error);
            next(templateResponse(error.rc || 500, "Error getting cities", error.message))
        }
    }
}