'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'servicos',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        tipo: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false
        },
      
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
      }
    );
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('servicos');
  }
};
