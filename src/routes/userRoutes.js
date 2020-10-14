const express = require('express');
const userControler = require('../controllers/userControler');

const routes = express.Router();

// @user routes
// @access public
routes.get('/users', userControler.index);
routes.get('/users/:usuario_id&:cliente_id', userControler.indexId);
routes.post('/users', userControler.store);
routes.put('/users/:usuario_id', userControler.update);
routes.delete('/users/:usuario_id', userControler.delete);

module.exports = routes;

