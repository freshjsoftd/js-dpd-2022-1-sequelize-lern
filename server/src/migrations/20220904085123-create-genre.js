'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const t = await Sequelize.sequelize.transaction()
    await queryInterface.createTable('Genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    { transaction: t });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Genres');
  }
};