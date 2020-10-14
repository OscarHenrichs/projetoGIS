const { Sequelize, ConnectionError } = require('sequelize');
const dotenv  = require('dotenv').config({ path: '../../config/config.env'});
const dbConfig = require("../../config/database");
const User = require('../models/userModel');
const Cliente = require('../models/clientesModel');

let connection = {}
switch (process.env.NODE_ENV) {
  case 'development':
    connection = new Sequelize(dbConfig.development);
    break;
  case 'test':
    connection = new Sequelize(dbConfig.test);
    break;

  case 'production':
    connection = new Sequelize(dbConfig.production);
    break;

  default:
    break;
}

User.init(connection);
Cliente.init(connection);

run().catch(error => console.log(error.stack));

async function run() {
try {
    await connection.authenticate();
    console.log('Connection has been established successfully.'.green.bold);
    console.log(`Server running in mode:${process.env.NODE_ENV} dialect:${dbConfig.development.dialect}`.blue);
  } catch (error) {
    console.error('Unable to connect to the database:'.red.bold, error);
  }
}

module.exports = connection;