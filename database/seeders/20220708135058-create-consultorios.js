const bcrypt = require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    let consultorios = [];
    
    for(let i=1; i<=7; i++){
      consultorios.push(
        {
          id: i,
          CNPJ:`12345678912322${i}`,
          email: `consultorio1${i}@teste.com`,
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