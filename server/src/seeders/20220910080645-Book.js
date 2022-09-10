'use strict';


const books = [];
for(let i=0; i <20; i++){
  books.push({
        title: `Book ${i}`,
        genreId: 13 + Math.trunc(Math.random()*9),
        shelfId: Math.trunc(Math.random()*20),
        createdAt: new Date(),
        updatedAt: new Date(),
    })
}
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Books', books, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Books', null, {});
  }
};
