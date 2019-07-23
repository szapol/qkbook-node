export default function(app) {

    var controller = require('../controllers/recipeController');

    app.route('/recipe')
        .get(controller.getAll);

    app.route('/recipe/:id')
        .get(controller.get);
  }
  