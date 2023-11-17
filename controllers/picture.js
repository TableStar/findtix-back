const { templateResSuccess, templateResError } = require("../helper/utilities");
const db = require("../models");
const { usersProperties } = require("../models");
const fs = require("fs");

module.exports = {
  getProfilePic: async (req, res, next) => {
    try {
      const result = await usersProperties.findOne({
        where: { userId: req.userData.id },
        raw: true,
      });
      return res
        .status(200)
        .send(
          templateResSuccess(
            true,
            "get pic profile success",
            `/public/profilepic/${result.profileImage}`
          )
        );
    } catch (error) {
      console.log(error);
    }
  },
  uploadProfilePic: async (req, res, next) => {
    try {
      console.log(req.file);
      const result = await usersProperties.findOne({
        where: { userId: req.userData.id },
        raw: true,
      });
      await usersProperties.update(
        { profileImage: req.file?.filename },
        { where: { userId: req.userData.id } }
      );
      if (fs.existsSync(`./public/profilepic/${result.profileImage}`)) {
        fs.unlinkSync(`./public/profilepic/${result.profileImage}`, (error) => {
          if (error) {
            console.log(error);
          }
        });
      }
      const resultAfterEdit = await usersProperties.findOne({
        where: { userId: req.userData.id },
        raw: true,
      });
      return res
        .status(200)
        .send(
          templateResSuccess(
            true,
            "upload picture success",
            `/public/profilepic/${resultAfterEdit.profileImage}`
          )
        );
    } catch (error) {
      if (fs.existsSync(`./public/profilepic/${req.file.filename}`)) {
        fs.unlinkSync(req.file.path, (error) => {
          if (error) {
            console.log(error);
          }
        });
        console.log(error);
        return res.status(500).send({
          success: false,
          message: "error changing in Database,deleting Pic",
        });
      }
    }
  },
  deletePic: async (req, res, next) => {
    const transaction = await db.sequelize.transaction();
    try {
      const result = await usersProperties.findOne({
        where: { userId: req.userData.id },
        raw: true,
      });
      if (!result) {
        throw new Error("user not found");
      }
      await usersProperties.update(
        { profileImage: null },
        { where: { userId: req.userData.id } }
      );
      await transaction.commit();
      if (fs.existsSync(`./public/profilepic/${result.profileImage}`)) {
        fs.unlinkSync(`./public/profilepic/${result.profileImage}`, (error) => {
          if (error) {
            console.log(error);
          }
        });
      }
      return res
        .status(200)
        .send(templateResSuccess(true, "profile pic deletion success", null));
    } catch (error) {
      console.log(error);
      await transaction.rollback();
      next(
        templateResError(
          500,
          false,
          "delete profile pic failed",
          error.message,
          null
        )
      );
    }
  },
};
