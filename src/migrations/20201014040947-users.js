'use strict';

const { DataTypes } = require('sequelize');
const val = 8;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('users', 
      {
        id: { 
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
        },
        cliente_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        sobrenome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        telefone: {
          type: DataTypes.STRING(11),
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
        },        
      }
    )
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('users');
 
  }
};
