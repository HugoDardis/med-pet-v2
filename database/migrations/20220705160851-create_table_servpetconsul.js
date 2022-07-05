'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'servpetconsul',
      {
        pet_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:"pet"
            },
            key:"id"
          }
        },
        consultorio_id:{
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references:{
            model: {
              tableName:"consultorios"
            },
            key:"id"
          }
        },
        servico_id:{
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:"servicos"
            },
            key:"id"
          }
        },
        agentamento:{
          type: Sequelize.DataTypes.DATE,
          allowNull:false,
        },
        horamarcada:{
          type: Sequelize.DataTypes.DATE,
          allowNull:false
        },
        horarealizada:{
          type:Sequelize.DataTypes.DATE,
          allowNull:false
        },
        horacancelada:{
          type: Sequelize.DataTypes.DATE,
          allowNull:false
        },
        createdAt:Sequelize.DataTypes.DATE,
        updatedAt:Sequelize.DataTypes.DATE,

      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("servpetconsul")
  }
};
