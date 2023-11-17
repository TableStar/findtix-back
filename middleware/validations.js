const jwt = require("jsonwebtoken");
const { auths } = require("../models");
const { templateResSuccess } = require("../helper/utilities");

module.exports = {
  validateReg: async (req, res, next) => {
    if (
      req.body.password.length < 8 ||
      req.body.password !== req.body.passwordConfirm
    ) {
      return res
        .status(400)
        .send({ success: false, message: "Your Spassword is invalid" });
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)
    ) {
      return res
        .status(400)
        .send({ success: false, message: "Your email is invalid" });
    } else {
      next();
    }
  },
  validateOldPass: async (req, res, next) => {
    try {
      const response = await auths.findOne({
        where: { id: userData.id },
      });
      const passChecker = await bcrypt.compare(
        req.body.oldPassword,
        response.password
      );
      if (!passChecker) {
        return res.status(401).send({
          success: false,
          message: "password is incorrect\nCheck your inputted password",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
    }
  },
  validatePass: async (req, res, next) => {
    if (
      req.body.password.length < 8 ||
      req.body.password !== req.body.passwordConfirm
    ) {
      return res
        .status(400)
        .send({ success: false, message: "Your password is invalid" });
    } else {
      next();
    }
  },
  validateToken: (req, res, next) => {
    try {
      console.log(process.env.SCRT_TOKEN);
      console.log("token", req.token);
      if (req.token) {
        const verifyData = jwt.verify(req.token, process.env.SCRT_TOKEN);
        if (!verifyData) {
          return res
            .status(401)
            .send({ success: false, message: "unauthorized Request" });
        }
        req.userData = verifyData;
        next();
      } else {
        return res
          .status(400)
          .send({ success: false, message: "your token is empty" });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send({ success: false, message: "Invalid token" });
    }
  },
  tokenAffirmation: (req, res, next) => {
    if (req.userData) {
      return res
        .status(200)
        .send(templateResSuccess(true, "Token is valid", null));
    }
  },
  validateAttendee: (req, res, next) => {
    console.log(req.userData);
    if (req.userData.role !== "attendee") {
      res
        .status(401)
        .send({ success: false, message: "Unauthorized. For Attendee only" });
    } else {
      next();
    }
  },
  validateCreator: (req, res, next) => {
    console.log(req.userData);
    if (req.userData.role !== "creator") {
      res
        .status(401)
        .send({ success: false, message: "Unauthorized. For Attendee only" });
    } else {
      next();
    }
  },
};
