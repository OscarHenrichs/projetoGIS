
const express = require('express');
const dotenv  = require('dotenv');
const colors  = require('colors');
const morgan  = require('morgan');
require('./src/database');
dotenv.config({ path: './config/config.env'});

const transactionsUser = require('./src/routes/transactionsUser');


const app =  express();

//app.get('/', (req, res) => res.send('Hello'))
app.use('/api/v1/users', transactionsUser);

app.use('/api/v1/usersNew', transactionsUser);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

