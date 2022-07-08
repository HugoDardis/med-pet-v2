const bcrypt = require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    let consultorios = [];
    
    for(let i=1; i<=20; i++){
      consultorios.push(
        {
          id: 1,
          nome: `consultorio ${i}`,
          email: `consultorio1${i}@teste.com`,
          senha: bcrypt.hashSync('123456', 10),
          CNPJ:`12345678912322${i}`,
          createdAt: (new Date()).toJSON().substring(0,19)
        },
        {
            id: 2,
            nome: `consultorio ${i}`,
            email: `consultorio2${i}@teste.com`,
            senha: bcrypt.hashSync('123456', 10),
            CNPJ:`12345678912311${i}`,
            createdAt:(new Date()).toJSON().substring(0,19)
          },
          {
            id: 3,
            nome: `consultorio ${i}`,
            email: `consultorio3${i}@teste.com`,
            senha: bcrypt.hashSync('123456', 10),
            CNPJ:`12345678912395${i}`,
            createdAt: (new Date()).toJSON().substring(0,19)
          },
          {
            id: 4,
            nome: `consultorio ${i}`,
            email: `consultorio4${i}@teste.com`,
            senha: bcrypt.hashSync('123456', 10),
            CNPJ:`12345678912345${i}`,
            createdAt: (new Date()).toJSON().substring(0,19)
          },
          {
            id: 5,
            nome: `consultorio ${i}`,
            email: `consultorio5${i}@teste.com`,
            senha: bcrypt.hashSync('123456', 10),
            CNPJ:`123456789123554${i}`,
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