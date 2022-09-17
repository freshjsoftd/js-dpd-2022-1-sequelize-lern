'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('Customers', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    });
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.removeColumn('Customers', 'password');
     
  }
};
