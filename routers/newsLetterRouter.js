const express = require('express');
const router = express.Router();

class NewsLetterRouter {
  constructor(controller, jwtAuth) {
    this.controller = controller;
    this.jwtAuth = jwtAuth;
  }
  routes = () => {
    //-----------News Letter-----------//
    router.get('/', this.controller.getAll);
    router.post('/', this.controller.createPost);
    //-----------News Letter Imgs-----------//
    router.get('/imgs/:newsLetterIds', this.controller.findImgs);
    router.post('/imgs', this.controller.createImgs);
    return router;
  };
}

module.exports = NewsLetterRouter;
