const express = require('express');
const clientesControler = require('../controllers/clientesControler');

const routes = express.Router();

// @user routes
// @access public
routes.get('/clientes', clientesControler.index);
routes.get('/clientesLast', clientesControler.indexLast);
routes.get('/clientes/:clientes_id', clientesControler.indexId);
routes.get('/clientesPK/:clientes_id', clientesControler.indexPK);
routes.post('/clientes', clientesControler.store);
routes.put('/clientes/:clientes_id', clientesControler.update);
routes.delete('/clientes/:clientes_id', clientesControler.delete);

module.exports = routes;

