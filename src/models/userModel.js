const { Model , DataTypes } = require ('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            cliente_id:DataTypes.INTEGER,     
            nome: DataTypes.STRING,
            sobrenome:DataTypes.STRING,    
            telefone:DataTypes.STRING,     
            email: DataTypes.STRING,
            }, { sequelize })
    }
}

module.exports = User;