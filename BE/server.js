const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./routers/router');

app.use(bodyParser.json());
app.use('/api', router);
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
module.exports = app