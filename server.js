import express from 'express';

var app = express();
var port = process.env.PORT || 3000;

app.listen(port);

console.log('API server started on port ' + port);