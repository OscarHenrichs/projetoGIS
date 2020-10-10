const { Sequelize, ConnectionError } = require('sequelize');
const dbConfig = require("../config/database.js");
const { connect } = require('../routes/transactionsUser.js');


const connection = new Sequelize(dbConfig);

run().catch(error => console.log(error.stack));

// async function run() {
// try {
//      await connection.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

module.exports = connection;