'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    let servicos_do_consultorio = [
      {
        consultorios_id: 1,
        servicos_id: 1,
      },
      {
        consultorios_id: 1,
        servicos_id: 2,
      },
      {
        consultorios_id: 1,
        servicos_id: 3,
      },
      {
        consultorios_id: 1,
        servicos_id: 4,
      },
      {
        consultorios_id: 1,
        servicos_id: 5,
      },
      {
        consultorios_id: 1,
        servicos_id: 6,
      },
      {
        consultorios_id: 1,
        servicos_id: 7,
      },
      {
        consultorios_id: 2,
        servicos_id: 2,
      },
      {
        consultorios_id: 2,
        servicos_id: 4,
      },
      {
        consultorios_id: 2,
        servicos_id: 6,
      },
      {
        consultorios_id: 3,
        servicos_id: 3,
      },
      {
        consultorios_id: 3,
        servicos_id: 5,
      },
      {
        consultorios_id: 4,
        servicos_id: 7,
      },
      {
        consultorios_id: 5,
        servicos_id: 2,
      },
      {
        consultorios_id: 5,
        servicos_id: 6,
      },
      {
        consultorios_id: 6,
        servicos_id: 3,
      },
      {
        consultorios_id: 6,
        servicos_id: 6,
      },
      {
        consultorios_id: 7,
        servicos_id: 1,
      },
      {
        consultorios_id: 7,
        servicos_id: 2,
      },
      {
        consultorios_id: 7,
        servicos_id: 3,
      },
      {
        consultorios_id: 7,
        servicos_id: 4,
      },
      {
        consultorios_id: 7,
        servicos_id: 5,
      },
      {
        consultorios_id: 7,
        servicos_id: 6,
      },
      {
        consultorios_id: 7,
        servicos_id: 7,
      },  
    ];

    await queryInterface.bulkInsert('servicos_do_consultorio', servicos_do_consultorio, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicos_do_consultorio', null, {});
  }
};
