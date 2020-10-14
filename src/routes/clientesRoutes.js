const express = require('express');
const clientesControler = require('../controllers/clientesControler');

const routes = express.Router();

// @user routes
// @access public
routes.get('/clientes', clientesControler.index);
routes.get('/clientes/:clientes_id', clientesControler.indexId);
routes.post('/clientes', clientesControler.store);
routes.put('/users/:clientes_id', clientesControler.update);
routes.delete('/users/:clientes_id', clientesControler.delete);

module.exports = routes;

