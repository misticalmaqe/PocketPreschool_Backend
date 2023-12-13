const express = require('express');
const router = express.Router();

class ClassActivityRouter {
  constructor(controller, jwtAuth) {
    this.controller = controller;
    this.jwtAuth = jwtAuth;
  }
  routes = () => {
    //-------------Class Activity-------------//
    router.get('/', this.jwtAuth, this.controller.getAll);
    router.post('/', this.jwtAuth, this.controller.createPost);
    router.get('/:grade', this.jwtAuth, this.controller.getByGrade);

    //-----------Class Activity Imgs-----------//
    router.get('/imgs/:classActIds', this.jwtAuth, this.controller.findImgs);
    router.post('/imgs', this.jwtAuth, this.controller.createImgs);

    return router;
  };
}

module.exports = ClassActivityRouter;
