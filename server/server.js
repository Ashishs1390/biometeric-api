import express from 'express';
const app = express();
import api from './api/api';
import config from './config/index';

console.log(config);
// require('mongoose').connect(`mongodb://localhost/nodeblog`);
require('mongoose').connect(`${config.dbUrl}`);

require('./middleware/appMiddleware')(app);

app.use('/api/',api);

 module.exports = app;