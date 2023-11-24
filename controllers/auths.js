const { auths } = require("../models");
const { usersProperties } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const transporter = require("../helper/mailer");
const fs = require("fs");
const db = require("../models");
const {
  templateRes,
  templateResSuccess,
  templateResError,
  referralCodeyo,
} = require("../helper/utilities");
const { FRONT_URL } = require("../helper/frontInfo");

// const { clientRedis } = require("../helper/redis");

module.exports = {
  register: async (req, res, next) => {
    const transaction = await db.sequelize.transaction();
    try {
      console.log(req.body);
      const { passwordConfirm, ...restObj } = req.body;
      const { firstName, lastName, ...authObj } = restObj;

      const resGET = await auths.findOne({
        where: { username: req.body.username, email: req.body.email },
      });
      if (!resGET) {
        const salt = await bcrypt.genSalt(10);
        console.log(authObj);
        const hashPassword = await bcrypt.hash(authObj.password, salt);
        console.log(hashPassword);
        const hashedObj = { ...authObj, password: hashPassword };
        delete restObj.authObj;
        await usersProperties.create(
          {
            ...restObj,
            referralCode: referralCodeyo(req.body.username),
            auth: hashedObj,
          },
          {
            transaction,
            include: [auths],
          }
        );
        await transaction.commit();
        const response = await auths.findOne({
          where: { username: req.body.username },
          raw: true,
        });
        const token = jwt.sign(
          {
            id: response.id,
            role: response.role,
            email: response.email,
          },
          process.env.SCRT_TOKEN,
          {
            expiresIn: "6h",
          }
        );
        //Send Email registration
        //sementara dimatiin, long send time
        await transporter.sendMail({
          from: "FINDTIX Admin",
          to: req.body.email,
          subject: "Registration Info",
          html: `<h1>Hello,${req.body.username} Welcome to FINDTIX</h1>
          <a href="${FRONT_URL}/auth/verifyemail?token=${token}">Click Link</a>`,
        });
        return res.status(200).send({
          success: true,
          message: "register and login success",
          result: {
            username: response.username,
            email: response.email,
            role: response.role,
            token,
          },
        });
      } else {
        return res.status(400).send({
          success: false,
          message: "Either username or email have been used",
        });
      }
    } catch (error) {
      console.log(error);
      await transaction.rollback();
      next(
        templateResError(500, false, "Error Registering", error.message, null)
      );
    }
  },
  login: async (req, res, next) => {
    try {
      const usernameBody = req.body.username;
      console.log(usernameBody);
      const response = await auths.findOne({
        where: { username: usernameBody },
      });
      if (!response) {
        return res.status(401).send({
          success: false,
          message: "Account not found, please input username correctly.",
        });
      }
      const passChecker = await bcrypt.compare(
        req.body.password,
        response.password
      );
      console.log("passcheck", passChecker);
      if (!passChecker) {
        return res.status(401).send({
          success: false,
          message: "password is incorrect\nCheck your inputted password",
        });
      }
      console.log("res loginer", response.dataValues);
      const { username, email, role } = response.dataValues;
      delete response.dataValues.password;
      console.log(response.dataValues);
      let payload = {
        id: response.dataValues.id,
        role: response.dataValues.role,
      };
      const token = jwt.sign(payload, process.env.SCRT_TOKEN, {
        expiresIn: "6h",
      });
      console.log("🚀 ~ file: auths.js:129 ~ login: ~ token:", token);
      return res.status(200).send(
        templateResSuccess(true, "login success", {
          username,
          email,
          role,
          token,
        })
      );
    } catch (error) {
      return res.status(error.statusCode || 500).send({
        message: error.message,
      });
    }
  },
  keepLogin: async (req, res, next) => {
    try {
      const result = await auths.findOne({
        where: { id: req.userData.id },
        raw: true,
        include: {
          model: usersProperties,
          attributes: ['profileImage']
        }
      });
      console.log("INI RESULT", result);
      const { id, username, email, role } = result;
      const token = jwt.sign({ id, role }, process.env.SCRT_TOKEN, {
        expiresIn: "6h",
      });
      return res
        .status(200)
        .send({ success: true, result: { username, email, role, token } });
    } catch (error) {
      console.log(error);
    }
  },
  changePass: async (req, res, next) => {
    try {
      if (req.userData) {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        await auths.update(
          { password: hashPassword },
          { where: { id: req.userData.id } }
        );
        return res
          .status(200)
          .send({ success: true, message: "password change success" });
      }
    } catch (error) {
      console.log(error);
      next(
        templateResError(
          error.rc,
          false,
          "password change failed",
          error.message,
          null
        )
      );
    }
  },
  changeRole: async (req, res, next) => {
    try {
      console.log(req.userData);
      const response = await auths.findOne({
        where: { email: req.userData.email },
        attributes: { exclude: ["password"] },
      });
      if (!response) {
        return res.status(401).send({
          success: false,
          message: "Account not found, please input username correctly.",
        });
      }
      await auths.update(
        { role: `verified${req.userData.role}` },
        { where: { id: req.userData.id } }
      );
      return res
        .status(200)
        .send({ success: true, message: "role has been verified" });
    } catch (error) {
      console.log(error);
    }
  },
  changeVerified: async (req, res, next) => {
    try {
      console.log(req.userData);
      const response = await auths.findOne({
        where: { email: req.userData.email },
        attributes: { exclude: ["password"] },
      });
      if (!response) {
        return res.status(401).send({
          success: false,
          message: "Account not found, please input username correctly.",
        });
      }
      await auths.update(
        { isVerified: true },
        { where: { id: req.userData.id } }
      );
      return res
        .status(200)
        .send({ success: true, message: "status has been verified" });
    } catch (error) {
      console.log(error);
    }
  },
  getUserProps: async (req, res, next) => {
    try {
      const resultAuths = await auths.findOne({
        where: { id: req.userData.id },
        attributes: { exclude: ["id", "password", "createdAt", "updatedAt"] },
        raw: true,
      });
      if (!resultAuths) {
        return res.status(401).send({
          success: false,
          message: "Account not found, please check again.",
        });
      }
      const resultUserProps = await usersProperties.findOne({
        where: { userId: req.userData.id },
        attributes: { exclude: ["id", "userId", "updatedAt"] },
        raw: true,
      });
      const resultAll = { ...resultAuths, ...resultUserProps };
      console.log(resultAll);
      return res.status(200).send({
        success: true,
        message: "this is data from both auths and user",
        result: resultAll,
      });
    } catch (error) {
      console.log(error);
    }
  },
  //edit Auths Username and Email only
  editAuths: async (req, res, next) => {
    try {
      await auths.update(req.body, { where: { userId: req.userData.id } });
      return res
        .status(200)
        .send({ success: true, message: "user properties has been updated" });
    } catch (error) {
      console.log(error);
    }
  },
  editUserProps: async (req, res, next) => {
    try {
      console.log(
        "🚀 ~ file: auths.js:271 ~ editUserProps: ~ req.body:",
        req.body
      );
      await usersProperties.update(req.body, {
        where: { userId: req.userData.id },
      });
      return res
        .status(200)
        .send({ success: true, message: "user properties has been updated" });
    } catch (error) {
      console.log(error);
    }
  },
  getAllUserProps: async (req, res, next) => {
    try {
      // await clientRedis.connect();
      //check data redis ada atau nggak
      const redisData = await clientRedis.get("getAllUser");
      if (redisData) {
        //jika ada kirim sebagai response
        return res.status(200).send(redisData);
      } else {
        //jika data tidak ada ambil dari DB
        const result = await usersProperties.findAll({
          include: [
            {
              model: auths,
              attributes: ["username", "email", "role"],
              required: true,
            },
          ],
        });
        //store data di redis, expires in 120 sec
        await clientRedis.setEx("getAllUser", 180, JSON.stringify(result));
        //send Response
        return res.status(200).send(result);
      }
      // return await clientRedis.quit();
    } catch (error) {
      console.log(error);
    }
  },
};
