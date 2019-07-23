import express from 'express';

var app = express();
var port = process.env.PORT || 3000;

import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import Recipe from './api/models/recipeModel';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/qkbookdb', { useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

import routes from './api/routes/recipeRoutes';
routes(app);

app.listen(port);

console.log('API server started on port ' + port);