const express = require('express');
const bodyParser = require('body-parser');
const route = require('./controller/task.controller');

const app = express();

app.use(bodyParser.json());
app.use('/task', route);
app.use((error, req, res, _next)=> res.send(error.message));

module.exports = app;