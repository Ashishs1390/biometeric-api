import express from 'express';
const app = express();
import api from './api/api';
// require('mongoose').connect(`mongodb://localhost/nodeblog`);
require('mongoose').connect(`mongodb://admin:admin123@ds261155.mlab.com:61155/nodeblog`);

require('./middleware/appMiddleware')(app);

app.use('/api/',api);

 module.exports = app;