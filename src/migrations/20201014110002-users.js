'use strict';

const { DataTypes } = require('sequelize');
const val = 8;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.addColumn('users', 'isLogged', DataTypes.BOOLEAN)
    
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('users');
 
  }
};
