"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("categories", [
      {
        name: "Music",
        imgUrl:
          "https://www.dk-mba.com/u/images/blog/how-to-promote-a-concert/_f1500/xhow-to-promote-a-band-concert.jpg.pagespeed.ic.x96DJ8BcOM.jpg",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nightlife",
        imgUrl:
          "https://www.bettaeventhire.com.au/wp-content/uploads/2020/01/shutterstock_1527035324.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Performing & Visual Arts",
        imgUrl:
          "https://s3-us-west-2.amazonaws.com/courses-images-archive-read-only/wp-content/uploads/sites/950/2015/08/26003237/2839965900_c23f818c97_b.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Holidays",
        imgUrl:
          "https://assets.hvmag.com/2023/05/enGzzZpz-Halloween-Events.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Health",
        imgUrl:
          "https://res.cloudinary.com/dk0z4ums3/image/upload/v1608543180/attached_image/mengenal-hatha-yoga-dasar-dari-segala-jenis-yoga.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hobbies",
        imgUrl:
          "https://mymodernmet.com/wp/wp-content/uploads/2018/05/painting-ideas-2-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Business",
        imgUrl:
          "https://website2021-live-e3e78fbbd3cc41f2847799-7c49c59.divio-media.com/filer_public/eb/7f/eb7fa02f-e613-486b-98cf-9e034052610e/how_to_run_an_effective_business_meeting_-_a_step-by-step_guide-min.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Food & Drink",
        imgUrl:
          "https://www.allrecipes.com/thmb/jc6_Rv1V-OMEA4vykngh_YnUBAE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-868935172-2000-3286886566bf43819512f3fd495bb1e7.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
