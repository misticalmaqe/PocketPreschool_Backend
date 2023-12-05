const express = require('express');
const router = express.Router();

class ClassActivityRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes = () => {
    //-------------Class Activity-------------//
    router.get('/', this.controller.getAll);
    router.post('/', this.controller.createPost);
    router.get('/:grade', this.controller.getByGrade);

    //-----------Class Activity Imgs-----------//
    router.get('/imgs/:classActIds', this.controller.findImgs);
    router.post('/imgs', this.controller.createImgs);

    return router;
  };
}

module.exports = ClassActivityRouter;
