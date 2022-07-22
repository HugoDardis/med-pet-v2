const bcrypt = require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    let consultorios = [];
    
    for(let i=1; i<=7; i++){
      consultorios.push(
        {
          id: i,
          email: `consultorio${i}@teste.com`,
          nome: `Consultório ${i}`,
          cep: `0888888${i}`,
          uf: `RJ`,
          endereco: `Rua Das Flores`,
          numero: `1${i}`,
          telefone: `21 98888-888${i}`,
          complemento: `Lote ${i}`,
          senha: bcrypt.hashSync('123456', 10),
          createdAt: (new Date()).toJSON().substring(0,19)
        },       
      )
    }

    await queryInterface.bulkInsert('consultorios', consultorios, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('consultorios', null, {});
  }
};