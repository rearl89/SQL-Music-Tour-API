'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stages', [{
      stage_id: 1,
      stage_name: 'Petco Park, San Diego' 
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stages', null, {})
  }
};
