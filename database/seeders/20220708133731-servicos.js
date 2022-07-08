// Seeder de Serviços

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('servicos',
    [
      {
        id: 1,
        tipo: "Consulta",
        createdAt: new Date(),
        updatedAt: null 
      },
      {
        id: 2,
        tipo: "Banho",
        createdAt: new Date(),
        updatedAt: null 
      },
      {
        id: 3,
        tipo: "Tosa",
        createdAt: new Date(),
        updatedAt: null 
      },
      {
        id: 4,
        tipo: "Vacina",
        createdAt: new Date(),
        updatedAt: null 
      },
      {
        id: 5,
        tipo: "Castração",
        createdAt: new Date(),
        updatedAt: null 
      },
      {
        id: 6,
        tipo: "Corte de Unha",
        createdAt: new Date(),
        updatedAt: null 
      },
      {
        id: 7,
        tipo: "Escovação Dentária",
        createdAt: new Date(),
        updatedAt: null 
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicos', null, {});
  }
};
