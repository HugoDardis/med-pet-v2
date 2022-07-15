
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    CPF: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
  });

  Usuario.associate = (models) => {
    
  }

  return Usuario;
}