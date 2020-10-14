const { Sequelize, ConnectionError } = require('sequelize');
const dbConfig = require("../../config/database");
const connection = new Sequelize(dbConfig);

const User = require('../models/user');
//const Company = require('../models/Company');


User.init(connection);
// Company.init(connection);
run().catch(error => console.log(error.stack));

async function run() {
try {
     await connection.authenticate();
    console.log('Connection has been established successfully.'.green.bold);
  } catch (error) {
    console.error('Unable to connect to the database:'.red.bold, error);
  }
}

module.exports = connection;