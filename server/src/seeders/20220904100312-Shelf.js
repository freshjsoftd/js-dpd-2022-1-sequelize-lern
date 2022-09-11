'use strict';


const shelves = [];
for(let i=0; i <20; i++){
  shelves.push({
        code: `Code # ${i+1}`,
    })
} 
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Shelves', shelves, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Shelves', null, {});
  }
};
