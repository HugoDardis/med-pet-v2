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
      nome: {
        type: Sequelize.DataTypes.STRING(120),
        allowNull: false
      },
      cep:{
        type: Sequelize.DataTypes.STRING(8),
        allowNull: false
      },
      uf:{
        type: Sequelize.DataTypes.STRING(2),
        allowNull: false
      },
      endereco: {
        type: Sequelize.DataTypes.STRING(600),
        allowNull: false
      },
      numero: {
        type: Sequelize.DataTypes.STRING(6),
        allowNull: true
      },
      email: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false,
        unique:true
      },
      telefone: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: false
      },
      complemento: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: true
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
