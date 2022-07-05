'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'servicos do consultorio',
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
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE
      }
    )
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('servicos do consultorio')
  }
};
