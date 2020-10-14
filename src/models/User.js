const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection){
    super.init({
      cliente_id: DataTypes.INTEGER,
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING
    }, {
      sequelize: connection,
      modelName: 'user',
    })
  }
};

module.exports = User;