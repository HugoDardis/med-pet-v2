const Consultorio = (sequelize, DataTypes) => {

    let consultorio = sequelize.define(
        'Consultorio',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            CNPJ: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(45),
                allowNull: false,
                unique:true
              },
              senha:{
                type: DataTypes.STRING(64),
                allowNull: false
              }
            
        },{
            tableName: "Consultorios"
        }
    );

    Consultorio.associate = (models) => {}

    return consultorio;
}

module.exports = Consultorio;