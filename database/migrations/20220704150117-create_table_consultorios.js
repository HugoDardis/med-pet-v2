'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('consultorios',
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      CNPJ: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false,
        unique:true
      },
      senha:{
        type: Sequelize.DataTypes.STRING(64),
        allowNull: false
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('consultorios')
  }
};
