const express = require('express');
const clientesControler = require('../controllers/clientesControler');

const routes = express.Router();

// @user routes
// @access public
routes.get('/clientes', clientesControler.index);
routes.get('/clientesOne/:clientes_id', clientesControler.indexId);
routes.post('/clientes', clientesControler.store);
routes.put('/clientes/:clientes_id', clientesControler.update);
routes.delete('/clientes/:clientes_id', clientesControler.delete);

module.exports = routes;

