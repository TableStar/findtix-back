const jwt = require("jsonwebtoken");
const { auths } = require("../models");
const { templateResSuccess, templateResError } = require("../helper/utilities");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

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
      console.log(req.body);
      const response = await auths.findOne({
        where: { id: req.userData.id },
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
    console.log(req.body.passwordConfirm);
    if (req.body?.passwordConfirm?.length > 0) {
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
    } else if (req.body.password?.length < 8) {
      return res
        .status(400)
        .send({ success: false, message: "Your password is invalid" });
    } else {
      console.log(req.body);
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
      return res
        .status(401)
        .send({ success: false, message: "Unauthorized. For Attendee only" });
    } else {
      next();
    }
  },
  validateUsername: async (req, res, next) => {
    try {
      console.log(
        "🚀 ~ file: validations.js:119 ~ validateUsername: ~ req.body.username:",
        req.body.username
      );
      const result = await auths.findOne({
        where: {
          username: req.body.username,
          id: { [Op.not]: req.userData.id },
        },
      });
      console.log(
        "🚀 ~ file: validations.js:119 ~ validateUsername: ~ result:",
        result
      );
      if (result) {
        return res
          .status(401)
          .send(
            templateResError(
              401,
              false,
              "username is already used",
              "error",
              null
            )
          );
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
    }
  },
  validateCurrPass: async (req, res, next) => {
    try {
      const response = await auths.findOne({
        where: { id: req.userData.id },
      });
      console.log(
        "🚀 ~ file: validations.js:156 ~ validateCurrPass: ~ response:",
        response
      );
      const passChecker = await bcrypt.compare(
        req.body.password,
        response.password
      );
      console.log(
        "🚀 ~ file: validations.js:138 ~ validateCurrPass: ~ passChecker:",
        passChecker
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
  vaidateEmail: async (req, res, next) => {
    try {
      const result = await auths.findOne({
        where: { username: req.body.email, id: { [Op.not]: req.userData.id } },
      });
      if (result) {
        return res
          .status(401)
          .send(
            templateResError(401, false, "email is already used", "error", null)
          );
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
    }
  },
};
