'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    let clientes = [];
    
    for(let i=1; i<=5; i++){
      clientes.push(
        {
          id: i,
          nome: `Cliente ${i}`,
          CPF: `1234567891${i}`,
          email: `cliente${i}@teste.com`,
          senha: bcrypt.hashSync('123456', 10),
          
          createdAt: (new Date()).toJSON().substring(0,19)
        }   
      )
    }

    await queryInterface.bulkInsert('clientes', clientes, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};