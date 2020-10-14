const express = require('express');
const userControler = require('../controllers/userControler');

const routes = express.Router();

routes.get('/users', userControler.index);


module.exports = routes;

