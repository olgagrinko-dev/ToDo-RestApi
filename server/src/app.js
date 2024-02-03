const express = require('express');
const bodyParser = require('body-parser');
const route = require('./controller/task.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/task', route);
app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;