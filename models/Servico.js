let Servico = (sequelize, DataTypes) => {
  return sequelize.define(
      'Servico', 
      {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          tipo: {
            type: DataTypes.STRING(100),
            allowNull: false
          }

      }, 
      {
          tableName: "servicos",
          timestamps: false
      }

  );
}

module.exports = Servico;