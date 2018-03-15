const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routers/router');

const app = express();
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static('public'))

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
module.exports = app