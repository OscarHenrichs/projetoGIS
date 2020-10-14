
const express = require('express');
const dotenv  = require('dotenv').config({ path: './config/config.env'});
const colors  = require('colors');
const morgan  = require('morgan');
const userControler = require('./src/routes/userRoutes');
const clientesRoutes = require('./src/routes/clientesRoutes');
require('./src/database');


const app =  express();

app.use(express.json());
app.use(userControler);
app.use(clientesRoutes);


//app.get('/', (req, res) => res.send('Hello'))
// app.use('/api/v1/users', userControler);

// app.use('/api/v1/usersNew', userControler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in mode:${process.env.NODE_ENV} mode on port:${PORT}`.yellow.bold));

