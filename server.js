const express = require('express');
const dotenv  = require('dotenv');
const morgan  = require('morgan');

dotenv.config({ path: './config/config.env'});

const transactionsUser = require('./routes/transactionsUser');

const app =  express();

//app.get('/', (req, res) => res.send('Hello'))
app.use('/api/v1/users', transactionsUser);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

