module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,},

    RGA: DataTypes.STRING,
    nome: DataTypes.STRING,
    raca: DataTypes.STRING,
    tipoAnimal: DataTypes.STRING,
    cliente_id: DataTypes.STRING
  }
  , 
  {
    tableName: 'pet',
    timestamps: true
  }
  );

  Pet.associate = (models) => {
    
  }

  return Pet;
}