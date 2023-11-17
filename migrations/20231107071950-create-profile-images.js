"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("profileImages", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        postId: {
          type: Sequelize.INTEGER,
        },
        images: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() =>
        queryInterface.addConstraint("profileImages", {
          type: "FOREIGN KEY",
          name: "FK_auths_images",
          fields: ["postId"],
          references: { table: "posters", field: "id" },
          onDelete: "no action",
          onUpdate: "no action",
        })
      );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("profileImages");
  },
};
