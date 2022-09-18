'use strict';


const books = [];
for(let i=1; i <10; i++){
  books.push({
        title: `Book ${i}`,
        genre_id: 47 + Math.trunc(Math.random()*10),
        shelf_id: 81 + Math.trunc(Math.random()*20),
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