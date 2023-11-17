const { auths } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  forgotPassword: async (req, res, next) => {
    try {
      const result = await auths.findOne({
        where: { email: req.body.email },
        raw: true,
      });
      if (!result) {
        return res
          .status(401)
          .send({ success: false, message: "email is not found" });
      }
      console.log(result);
      console.log(result.id);
      const token = await jwt.sign({ id: result.id },process.env.SCRT_TOKEN,{expiresIn:"6h"});
      return res
        .status(200)
        .send({ success: true, message: "here is your token", token });
    } catch (error) {
      console.log(error);
    }
  },
};
