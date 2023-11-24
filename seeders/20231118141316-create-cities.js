'use strict';

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
    await queryInterface.bulkInsert('cities', [
      { name: 'Jakarta Utara' },
      { name: 'Jakarta Pusat' },
      { name: 'Jakarta Timur' },
      { name: 'Jakarta Selatan' },
      { name: 'Jakarta Barat' },
      { name: 'Surabaya' },
      { name: 'Bekasi' },
      { name: 'Bandung' },
      { name: 'Medan' },
      { name: 'Depok' },
      { name: 'Tangerang' },
      { name: 'Palembang' },
      { name: 'Semarang' },
      { name: 'Makassar' },
      { name: 'Tangerang Selatan' },
      { name: 'Batam' },
      { name: 'Bandar Lampung' },
      { name: 'Bogor' },
      { name: 'Pekanbaru' },
      { name: 'Padang' },
      { name: 'Malang' },
      { name: 'Samarinda' },
      { name: 'Denpasar' },
      { name: 'Tasikmalaya' },
      { name: 'Serang' },
      { name: 'Balikpapan' },
      { name: 'Pontianak' },
      { name: 'Banjarmasin' },
      { name: 'Jambi' },
      { name: 'Cimahi' },
      { name: 'Surakarta' },
      { name: 'Manado' },
      { name: 'Kupang' },
      { name: 'Yogyakarta' },
      { name: 'Online' },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
