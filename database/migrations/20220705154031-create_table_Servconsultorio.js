'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'servicos_do_consultorio',
      {
        consultorios_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model:{
              tableName:'consultorios'
            },
            key:"id"
          }
        },
        servicos_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull:false,
          references: {
            model: {
              tableName: 'servicos'
            },
            key:"id"
          }

        },
      }
    )
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('servicos_do_consultorio')
  }
};
