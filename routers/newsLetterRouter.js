const express = require('express');
const router = express.Router();

class NewsLetterRouter {
  constructor(controller, jwtAuth) {
    this.controller = controller;
    this.jwtAuth = jwtAuth;
  }
  routes = () => {
    //-----------News Letter-----------//
    router.get('/', this.jwtAuth, this.controller.getAll);
    router.post('/', this.jwtAuth, this.controller.createPost);
    //-----------News Letter Imgs-----------//
    router.get('/imgs', this.jwtAuth, this.controller.getAllImgs);
    router.get('/imgs/:newsLetterIds', this.jwtAuth, this.controller.findImgs);
    router.post('/imgs', this.jwtAuth, this.controller.createImgs);
    return router;
  };
}

module.exports = NewsLetterRouter;
