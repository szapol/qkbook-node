export default function(app) {

    var controller = require('../controllers/recipeController');

    app.route('/recipe')
        .get(controller.index)
        .post(controller.store);

    app.route('/recipe/:id')
        .get(controller.show)
  }
  