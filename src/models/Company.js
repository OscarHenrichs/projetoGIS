const { Model, DataTypes } = require('sequelize');
class Company extends Model {
  static init(connection){
    super.init({
      nome_fantasia: DataTypes.STRING,
      razao_social: DataTypes.STRING,
      cep: DataTypes.STRING,
      endereco: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      cnpj: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      uf: DataTypes.STRING
    }, {
      sequelize: connection
    });
  }

};

module.exports = Company;