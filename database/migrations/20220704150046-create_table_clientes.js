'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('clientes',
     { 
       id: {
         type: Sequelize.DataTypes.INTEGER(10),
         primaryKey: true,
         autoIncrement: true,
         allowNull: false, 
       },

       CPF: {
         type: Sequelize.DataTypes.STRING(11),
         allowNull: false,
       },
       nome: {
         type: Sequelize.DataTypes.STRING(200),
         allowNull: false
       },
       email: {
         type: Sequelize.DataTypes.STRING(200),
         allowNull: false
       },
       senha: {
         type: Sequelize.DataTypes.STRING(200),
         allowNull: false
       },
       
       createdAt: Sequelize.DataTypes.DATE,
       updatedAt: Sequelize.DataTypes.DATE
      //  createdAt: (new Date()).toJSON().substring(0,19),
      //  updatedAt: (new Date()).toJSON().substring(0,19)
     });
     
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('clientes');
     
  }
};
