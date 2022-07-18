let Cliente = (sequelize, DataTypes) => {
    return sequelize.define(
        'Cliente', 
        {
            id: {
                type: DataTypes.INTEGER(10),
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            CPF: {
                type: DataTypes.STRING(11),
                allowNull: false,
            },
            nome: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING(200),
                allowNull: false
            }
        }, {
            tableName: "clientes",
            timestamps: false
        }

    );
}

module.exports = Cliente;