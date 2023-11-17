const { templateResponse } = require("../helper/utils");
const { categories } = require("../models")

module.exports = {
    getCategories: async (req, res) => {
        try {
            const result = await categories.findAll()
            return res.status(200).send(result)
        } catch (error) {
            console.log(error);
            next(templateResponse(error.rc || 500, "Error getting categories.", error.message))
        }
    }
}