'use strict';

module.exports = {  

  async up (queryInterface, Sequelize) {

    let agendamentos = [
      {
        pet_id: 1,
        consultorio_id: 1,
        servico_id: 1,
        agendamento: new Date('2022-07-08T15:00:00.000Z'),
        horamarcada: new Date('2022-07-08T15:00:00.000Z'),
        horacancelada: null,
        createdAt: new Date(),
        updatedAt: null
      },
      {
        pet_id: 1,
        consultorio_id: 1,
        servico_id: 2,
        agendamento: new Date('2022-07-08T15:00:00.000Z'),
        horamarcada: new Date('2022-07-08T15:00:00.000Z'),
        horacancelada: null,
        createdAt: new Date(),
        updatedAt: null
      },
      {
        pet_id: 2,
        consultorio_id: 1,
        servico_id: 2,
        agendamento: new Date('2022-07-09T16:00:00.000Z'),
        horamarcada: new Date('2022-07-09T16:00:00.000Z'),
        horacancelada: new Date('2022-07-09T16:30:00.000Z'),
        createdAt: new Date(),
        updatedAt: null
      },
      {
        pet_id: 2,
        consultorio_id: 1,
        servico_id: 3,
        agendamento: new Date('2022-07-08T16:00:00.000Z'),
        horamarcada: new Date('2022-07-08T16:00:00.000Z'),
        horacancelada: null,
        createdAt: new Date(),
        updatedAt: null
      },
      {
        pet_id: 3,
        consultorio_id: 2,
        servico_id: 2,
        agendamento: new Date('2022-07-08T15:00:00.000Z'),
        horamarcada: new Date('2022-07-08T15:00:00.000Z'),
        horacancelada: null,
        createdAt: new Date(),
        updatedAt: null
      },
      {
        pet_id: 4,
        consultorio_id: 4,
        servico_id: 7,
        agendamento: new Date('2022-07-08T15:00:00.000Z'),
        horamarcada: new Date('2022-07-08T15:00:00.000Z'),
        horacancelada: null,
        createdAt: new Date(),
        updatedAt: null
      },
      {
        pet_id: 6,
        consultorio_id: 7,
        servico_id: 3,
        agendamento: new Date('2022-07-10T10:00:00.000Z'),
        horamarcada: new Date('2022-07-10T10:00:00.000Z'),
        horacancelada: null,
        createdAt: new Date(),
        updatedAt: null
      },
      {
        pet_id: 1,
        consultorio_id: 1,
        servico_id: 1,
        agendamento: new Date('2022-07-15T15:00:00.000Z'),
        horamarcada: new Date('2022-07-15T15:00:00.000Z'),
        horacancelada: null,
        createdAt: new Date(),
        updatedAt: null
      },
      {
        pet_id: 1,
        consultorio_id: 1,
        servico_id: 2,
        agendamento: new Date('2022-07-15T15:00:00.000Z'),
        horamarcada: new Date('2022-07-15T15:00:00.000Z'),
        horacancelada: null,
        createdAt: new Date(),
        updatedAt: null
      }
    ];

    await queryInterface.bulkInsert('servpetconsul', agendamentos, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servpetconsul', null, {});
  }
};
