export default function(app) {

    var controller = require('../controllers/userController');

    app.route('/user')
        .get(controller.index)
        .post(controller.store);

    app.route('/user/:id')
        .get(controller.show)
        .put(controller.update)
  }
  