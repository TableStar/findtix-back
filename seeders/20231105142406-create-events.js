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
    await queryInterface.bulkInsert("events", [
      {
        creatorId: 1,
        name: "Yoga Meditation",
        categoryId: 5,
        img: "https://www.constantcontact.com/blog/wp-content/uploads/2021/06/Social-4.jpg",
        startDate: "2023-11-13T18:30",
        endDate: "2023-11-13T20:30",
        cityId: 35,
        caption: "Enhance your physical body and spiritual mind, and find peace through Yoga Meditation, join us online for an exciting adventure.",
        description: "With the current trend of a fast-paced life, a lot of people forget that it is okay to slow down and you do not have to be the first and the best. Our yoga session aims to help people find inner peace, with acceptance with inner self. Join us for an exciting adventure to deepen your understanding about yourself, and be at peace with your life.",
        status: "Upcoming"
      },
      {
        creatorId: 2,
        name: "International Business Conference",
        categoryId: 7,
        img: "https://marketplace.canva.com/EAFK7akFOyw/1/0/1600w/canva-green-modern-business-conference-poster-landscape-MO8kYv4ziEM.jpg",
        startDate: "2023-11-17T16:30",
        endDate: "2023-11-17T20:00",
        location: "Grand City",
        cityId: 6,
        caption: "Join our International Business Conference, with 3 experienced business coach & mentors that will guide you how to stay productive at home.",
        description: "A lot of jobs are now able to be done remotely, you can easily get an online side-job. This conference will help you and train you to get a remote side-job so you can get an extra income even when you are at your own home.",
        status: "Upcoming"
      },
      {
        creatorId: 3,
        name: "Weekend Party With Special Guests",
        categoryId: 2,
        img: "https://www.bettaeventhire.com.au/wp-content/uploads/2019/10/shutterstock_139152893.jpg",
        startDate: "2023-11-09T22:00",
        endDate: "2023-11-10T04:00",
        location: "Shelter",
        cityId: 6,
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Tristique magna sit amet purus gravida. At risus viverra adipiscing at in tellus integer. Varius duis at consectetur lorem donec massa sapien faucibus. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Libero justo laoreet sit amet cursus sit amet dictum sit. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tincidunt lobortis feugiat vivamus at augue eget. Adipiscing elit pellentesque habitant morbi tristique. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.",
        status: "Upcoming"
      },
      {
        creatorId: 4,
        name: "Orchestra Event",
        categoryId: 3,
        img: "https://www.kennedy-center.org/globalassets/education/resources-for-educators/classroom-resources/artsedge/media/guide-to-the-orchestra/2022_11_03_nso_group_photo-169.png",
        startDate: "2023-11-13T19:00",
        endDate: "2023-11-13T22:00",
        location: "Grand Empire Palace",
        cityId: 6,
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Tristique magna sit amet purus gravida. At risus viverra adipiscing at in tellus integer. Varius duis at consectetur lorem donec massa sapien faucibus. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Libero justo laoreet sit amet cursus sit amet dictum sit. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tincidunt lobortis feugiat vivamus at augue eget. Adipiscing elit pellentesque habitant morbi tristique. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.",
        status: "Upcoming"
      },
      {
        creatorId: 5,
        name: "Christmas Event",
        categoryId: 4,
        img: "https://assets3.thrillist.com/v1/image/3123761/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70",
        startDate: "2023-12-24T18:00",
        endDate: "2023-12-25T00:00",
        location: "Tunjungan Plaza 6",
        cityId: 6,
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Tristique magna sit amet purus gravida. At risus viverra adipiscing at in tellus integer. Varius duis at consectetur lorem donec massa sapien faucibus. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Libero justo laoreet sit amet cursus sit amet dictum sit. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tincidunt lobortis feugiat vivamus at augue eget. Adipiscing elit pellentesque habitant morbi tristique. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.",
        status: "Upcoming"
      },
      {
        creatorId: 6,
        name: "PES Soccer Tournament",
        categoryId: 6,
        img: "https://assets.skor.id/crop/0x0:0x0/x/photo/2020/05/10/497952301.jpg",
        startDate: "2023-11-06T18:00",
        endDate: "2023-11-06T21:00",
        location: null,
        cityId: 35,
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Tristique magna sit amet purus gravida. At risus viverra adipiscing at in tellus integer. Varius duis at consectetur lorem donec massa sapien faucibus. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Libero justo laoreet sit amet cursus sit amet dictum sit. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tincidunt lobortis feugiat vivamus at augue eget. Adipiscing elit pellentesque habitant morbi tristique. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.",
        status: "Upcoming"
      },
      {
        creatorId: 7,
        name: "Wine Tasting at Shangri-La Surabaya",
        categoryId: 8,
        img: "https://cellaraiders.com/cdn/shop/articles/wine-tasting-013120_2048x.jpg?v=1580495941",
        startDate: "2023-11-09T19:30",
        endDate: "2023-11-09T23:00",
        location: "Shangri-La Hotel",
        cityId: 6,
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Tristique magna sit amet purus gravida. At risus viverra adipiscing at in tellus integer. Varius duis at consectetur lorem donec massa sapien faucibus. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Libero justo laoreet sit amet cursus sit amet dictum sit. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tincidunt lobortis feugiat vivamus at augue eget. Adipiscing elit pellentesque habitant morbi tristique. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.",
        status: "Upcoming"
      },
      {
        creatorId: 8,
        name: "Coldplay: Music of the Spheres",
        categoryId: 1,
        img: "https://awsimages.detik.net.id/community/media/visual/2023/05/10/konser-coldplay-2023-music-of-the-spheres-world-tour_169.jpeg?w=600&q=90",
        startDate: "2023-11-22T18:15",
        endDate: "2023-11-22T22:45",
        location: "Gelora Bung Karno Stadium",
        cityId: 2,
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Tristique magna sit amet purus gravida. At risus viverra adipiscing at in tellus integer. Varius duis at consectetur lorem donec massa sapien faucibus. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Libero justo laoreet sit amet cursus sit amet dictum sit. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tincidunt lobortis feugiat vivamus at augue eget. Adipiscing elit pellentesque habitant morbi tristique. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.",
        status: "Upcoming"
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
