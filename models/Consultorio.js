const Consultorio = (sequelize, DataTypes) => {

    let consultorio = sequelize.define(
        'Consultorio',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(120),
                allowNull: false
            },
            cep: {
                type: DataTypes.STRING(8),
                allowNull: false
            },
            uf: {
                type: DataTypes.STRING(2),
                allowNull: false
            },
            endereco: {
                type: DataTypes.STRING(600),
                allowNull: false
            },
            numero: {
                type: DataTypes.STRING(6),
                allowNull: true
            },
            email: {
                type: DataTypes.STRING(45),
                allowNull: false,
                unique: true
            },
            telefone: {
                type: DataTypes.STRING(15),
                allowNull: false
            },
            complemento: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            senha: {
                type: DataTypes.STRING(64),
                allowNull: false
            }

        }, {
        tableName: "Consultorios"
    }
    );

    Consultorio.associate = (models) => { }

    return consultorio;
}

module.exports = Consultorio;