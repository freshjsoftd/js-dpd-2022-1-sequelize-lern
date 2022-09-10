'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('Customers', 'birthday', {
      type: Sequelize.DATEONLY,
     });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('Customers', 'birthday');
  }
};
