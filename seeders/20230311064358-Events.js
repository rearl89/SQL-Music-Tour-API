'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [{
      event_id: 1,
      name: 'EuphoRock',
      date: 'August 1, 2023',
      start_time: new Date('August 1, 2023 16:00:00'),
      end_time: new Date('August 1, 2023 20:30:00')
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stages', null, {})
  }
};
