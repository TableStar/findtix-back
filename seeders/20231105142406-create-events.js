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
        creatorId: 1,
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
        creatorId: 2,
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
        creatorId: 3,
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
        creatorId: 1,
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
        creatorId: 2,
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
      {
        creatorId: 3,
        name: "Begin Edu Fair Surabaya (Indonesia)",
        categoryId: 7,
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F543007329%2F143238831910%2F1%2Foriginal.20230626-143409?w=940&auto=format%2Ccompress&q=75&sharp=10&s=9bbf219cc43ad28c9d93e4cf0344d538",
        startDate: "2023-12-02T13:00",
        endDate: "2023-12-02T17:00",
        location: "JW Marriot Hotel Surabaya",
        cityId: 6,
        caption: "Taking part in our edu fairs is the best way to start recruitment of students in a rapidly growing market of international education",
        description: "Begin Edu Fair - Surabaya is a platform for schoolchildren and their parents as well as university students looking at international study programs, including prep courses, Bachelor's, Master's, MBA, as well as language and summer programs. Don't miss the opportunity to meet candidates and their parents interested in the programs of your institution. You will receive the list of contacts who showed their interest in your institution.",
        status: "Upcoming"
      },
      {
        creatorId: 3,
        name: "JVM Meetup #61 : Tech Talk with Couchbase",
        categoryId: 7,
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F647082109%2F213757731803%2F1%2Foriginal.20231123-075048?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C127%2C5282%2C2641&s=a35aaa63868ae33757d7406ec6e943f8",
        startDate: "2023-12-06T18:00",
        endDate: "2023-12-06T21:00",
        location: "CGV FX Sudirman",
        cityId: 2,
        caption: "JVM Meetup #61 : Tech Talk with Couchbase",
        description: "JVM Meetup #61 : Tech Talk with Couchbase NoSQL refers to a newer type of database (called a non-relational database) that doesn't require you to use SQL. While relational databases (sometimes called SQL databases) have been the primary model for data management over the past decade, non-relational databases are gaining popularity as an alternative model for managing data. They are particularly well suited for companies that need to store and maintain large amounts of unstructured data. Join our JVM Indonesia upcoming meetup with these speakers 1.Audi Agung Pratama - Software Engineer 2.Benjamin Then - Solutions Engineer at Couchbase",
        status: "Upcoming"
      },
      {
        creatorId: 2,
        name: "Sandbox: Strategi Bisnis untuk Gim",
        categoryId: 7,
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F641216249%2F314838640630%2F1%2Foriginal.20231114-045139?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=2bc9458c16b9ef5fa39a7677e68c6ae8",
        startDate: "2023-12-02T13:00",
        endDate: "2023-12-02T16:00",
        location: "Goethe-Institut Jakarta",
        cityId: 2,
        caption: "Lokakarya Gim dan Sesi Pitching",
        description: "Apa strategi bisnis terbaik untuk gim mobile? Apakah strategi tersebut berbeda dengan gim PC? Bagaimana memanfaatkan kekayaan intelektual untuk menghasilkan pendapatan? Berawal dari podcast PRESS START di mana kami menginspirasimu untuk memulai karir di dunia pengembangan gim, kini kami mengajakmu menjelajahi tingkat berikutnya dalam Sandbox. Sandbox adalah sesi lokakarya interaktif di mana kamu dapat belajar secara mendalam dengan ahlinya, menguji ide-idemu, dan menerima masukan secara langsung. Ajang ini sekaligus merupakan kesempatan untuk membangun jejaring dengan sesama pengembang gim. Bersama Shafiq Husein (CEO Gambir Studio), kita akan bersama-sama mendalami bisnis gim. Kita akan mempelajari secara spesifik cara menyusun strategi bisnis yang efektif untuk berbagai platform, seperti mobile dan PC. Di luar platform, kita juga akan menggali cara-cara mengembangkan kekayaan intelektual sehingga menciptakan sumber pendapatan tambahan.",
        status: "Upcoming"
      },
      {
        creatorId: 1,
        name: "I'm Dreaming of a Noir Christmas: Classic Crime Thrillers of the 1960s",
        categoryId: 6,
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F643598209%2F443192820252%2F1%2Foriginal.20231117-043326?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=f4960f71bc060ce5f0b271db872128be",
        startDate: "2023-11-29T06:00",
        endDate: "2023-11-29T07:00",
        cityId: 35,
        caption: "With Geoffrey O'Brien, Sarah Weinman, Gene Seymour, and David Lehman",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Tristique magna sit amet purus gravida. At risus viverra adipiscing at in tellus integer. Varius duis at consectetur lorem donec massa sapien faucibus. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Libero justo laoreet sit amet cursus sit amet dictum sit. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tincidunt lobortis feugiat vivamus at augue eget. Adipiscing elit pellentesque habitant morbi tristique. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.",
        status: "Upcoming"
      },
      {
        creatorId: 3,
        name: "Mindfulness Meditation: Wednesday Pause - Indonesia",
        categoryId: 5,
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F158528249%2F262434237776%2F1%2Foriginal.20210929-232843?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C106%2C960%2C480&s=6fed306793240cc5f19ae891063a0413",
        startDate: "2023-11-30T20:00",
        endDate: "2023-11-30T20:20",
        cityId: 35,
        caption: "“The quieter you become, the more you are able to hear.” Rumi, Persian poet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Tristique magna sit amet purus gravida. At risus viverra adipiscing at in tellus integer. Varius duis at consectetur lorem donec massa sapien faucibus. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Libero justo laoreet sit amet cursus sit amet dictum sit. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tincidunt lobortis feugiat vivamus at augue eget. Adipiscing elit pellentesque habitant morbi tristique. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.",
        status: "Upcoming"
      },
      {
        creatorId: 2,
        name: "Jakarta: Muso-Method Masterclass Series",
        categoryId: 1,
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F640407909%2F528404091825%2F1%2Foriginal.20231113-055110?w=940&auto=format%2Ccompress&q=75&sharp=10&s=d5a98473867a60121ed6840cd3ca9035",
        startDate: "2023-12-03T10:00",
        endDate: "2023-12-03T12:00",
        cityId: 11,
        location: "Universitas Pelita Harapan (UPH) Grace Hall",
        caption: "Join our December 2023 Muso-Method Masterclass Series",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Tristique magna sit amet purus gravida. At risus viverra adipiscing at in tellus integer. Varius duis at consectetur lorem donec massa sapien faucibus. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Libero justo laoreet sit amet cursus sit amet dictum sit. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tincidunt lobortis feugiat vivamus at augue eget. Adipiscing elit pellentesque habitant morbi tristique. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.",
        status: "Upcoming"
      },
      {
        creatorId: 1,
        name: "One Pot, One Sheet, One Pan: Three Meals with Rosemary Gill and April Dodd",
        categoryId: 8,
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F590840769%2F170584695321%2F1%2Foriginal.20230905-205307?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C3456%2C1728&s=ca2687f4f9a76d667b038f7c8b057904",
        startDate: "2023-11-30T06:00",
        endDate: "2023-11-30T07:15",
        cityId: 35,
        caption: "Delicious food and not a full sink of dishes. Join Milk Street's Rosemary Gill and April Dodd to learn three one-vessel meals.",
        description: "Do fewer dishes. Eat great food. Join Milk Street's Rosemary Gill and April Dodd to learn three one-vessel meals that deliver on both promises. We'll use one pot, one sheet, one pan and a handful of smart cooking techniques to make Garlicky White Bean Soup with Broccoli Rabe and Parmesan (the pot), Sausage, Potato and Sweet Pepper Traybake (the sheet) and Spicy Korean-Style Shrimp with Zucchini and Scallions (the pan). Each dish has protein, veggies and lots of flavor and can be used as a template. So if you don't feel like peppers in your tray bake or shrimp in your stir-fry, you can swap things around. If you're not confident in how to make these substitutions, you'll get there in class. We'll explain how to modify cooking times, ingredient order and flavor combination to make winning dinners. Each recipe also includes helpful lessons you can apply far beyond these three templates.",
        status: "Upcoming"
      },
      {
        creatorId: 2,
        name: "12 Days of Giveaways",
        categoryId: 4,
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F641022879%2F218303075032%2F1%2Foriginal.20231113-223518?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=277%2C0%2C660%2C330&s=698239d707811550005bd34dc3ba3a08",
        startDate: "2023-12-12T06:00",
        endDate: "2023-12-12T10:00",
        cityId: 35,
        caption: "Win BIG this Holiday!",
        description: "Outlets at Castle Rock is giving away amazing prizes & gift cards every day December 1st-12th. Follow our socials to enter & win BIG!",
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
