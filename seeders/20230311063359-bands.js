'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      band_id: 1,
      name: 'The Cure',
      genre: 'Rock',
      available_start_time: new Date('March 10, 2023 13:00:00'),
      end_time: new Date('March 10, 2023 23:00:00')
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bands', null, {})
  }
};
