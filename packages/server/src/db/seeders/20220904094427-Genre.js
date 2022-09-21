'use strict';
const { genres } = require('../../constants/library-db-constants')

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Genres', genres, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Genres', null, {});
  }
};
