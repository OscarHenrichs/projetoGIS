const express = require('express');
const transactionUser = require('../controllers/transactionUser');

const routes = express.Router();

routes.post('/users', transactionUser.newUser);

// router
//     .route('/')
//     .post(getUsers);
module.exports = routes;

