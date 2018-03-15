const express = require('express');
const bodyParser = require('body-parser');
const router = require('./BE/routers/router');
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
const app = express();
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static('./BE/public'))
const PORT = require('./BE/config').PORT[process.env.NODE_ENV] || process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`))

