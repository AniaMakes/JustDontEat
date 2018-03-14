const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./routers/router');
const cors = require('cors');

app.use(bodyParser.json());
app.use('/api', router);
app.use(cors());
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
module.exports = app