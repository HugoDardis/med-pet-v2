'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    let pets = [{
        id: 1,
        RGA: "1234561",
        nome: "Meg",
        raca: "SRD",
        tipoAnimal: "cachorro",
        cliente_id: 1,
        createdAt: (new Date()).toJSON().substring(0,19),
      },
      {
        id: 2,
        RGA: "1234562",
        nome: "Rex",
        raca: "SRD",
        tipoAnimal: "cachorro",
        cliente_id: 4,
        createdAt: (new Date()).toJSON().substring(0,19),
      },
      {
        id: 3,
        RGA: "1234563",
        nome: "Vintem",        
        raca: "SRD",
        tipoAnimal: "cachorro",
        cliente_id: 3,
        createdAt: (new Date()).toJSON().substring(0,19),
      },
      {
        id: 4,
        RGA: "1234564",
        nome: "Dexter",       
        raca: "gato de pelo curto brasileiro",
        tipoAnimal: "gato",
        cliente_id: 1,
        createdAt: (new Date()).toJSON().substring(0,19),
      },
      {
        id: 5,
        RGA: "1234565",
        nome: "Mel",
        raca: "Siames",
        tipoAnimal: "Gato",
        cliente_id: 5,
        createdAt: (new Date()).toJSON().substring(0,19),
      },
      {
        id: 6,
        RGA: "1234566",
        nome: "Bicudo",
        raca: "Marreco",
        tipoAnimal: "pato",
        cliente_id: 2,
        createdAt: (new Date()).toJSON().substring(0,19),
      },
    ];

    await queryInterface.bulkInsert('pet', pets, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pet', null, {});
  }
};