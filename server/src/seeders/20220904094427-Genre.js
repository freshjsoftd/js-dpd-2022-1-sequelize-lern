'use strict';


const genres = [];
for(let i=0; i <10; i++){
  genres.push({
        title: `Genre ${i}`,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
} 
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Genres', genres, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Genres', null, {});
  }
};
