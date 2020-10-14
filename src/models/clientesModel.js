const { Model , DataTypes } = require ('sequelize');

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            nome_fantasia:DataTypes.STRING,     
            razao_social: DataTypes.STRING,
            cnpj:DataTypes.STRING,    
            cep:DataTypes.STRING,     
            endereco: DataTypes.STRING,
            numero: DataTypes.STRING,
            complemento: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            uf: DataTypes.STRING,
            }, { sequelize })
    }
}

module.exports = Cliente;