const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

require('dotenv').config();

const PORT = process.env.PORT

const app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));
app.use('/api/employees', require('./routes/emloyees'));


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });

module.exports = app;
