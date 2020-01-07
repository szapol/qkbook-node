     import express from 'express';

    var app = express();
    var port = process.env.PORT || 3000;
    
    import mongoose from 'mongoose';
    import bodyParser from 'body-parser';
    
    import Recipe from './api/models/recipeModel';
    import User from './api/models/userModel';

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/qkbookdb', { useNewUrlParser: true }); 
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    import recipeRoutes from './api/routes/recipeRoutes';
    import userRoutes from './api/routes/userRoutes';

    recipeRoutes(app);
    userRoutes(app);
    
    app.listen(port, () => {
     console.log('API server started on port ' + port);
    });

    