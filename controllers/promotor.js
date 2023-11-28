const { Op } = require("sequelize");
const { templateResponse } = require("../helper/utils")
const { usersProperties, auths } = require("../models")
module.exports = {
    getPromotors: async (req, res, next) => {
        try {
            const result = await auths.findAll({
                where: { id: req.params.id ? req.params.id : { [Op.ne]: null } },
                attributes: ["username", "id"],
                include: { model: usersProperties, attributes: ["profileImage"] },
                limit: 4
            })
            return res.status(200).send(result)
        } catch (error) {
            next(templateResponse(500, "Error getting promotors", error.message))
        }
    }
}