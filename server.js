import express from 'express';

var app = express();
var port = process.env.PORT || 3000;

import routes from './api/routes/recipeRoutes';
routes(app);

app.listen(port);

console.log('API server started on port ' + port);