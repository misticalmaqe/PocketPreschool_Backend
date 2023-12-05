const express = require('express');
const router = express.Router();

class ChatRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes = () => {
    //-------------Chat Rooms-------------//
    router.get('/', this.controller.getAll);
    router.get('/teacher/:id', this.controller.getRoomsForTeacher);
    router.get('/child/:id', this.controller.getRoomsForStudent);
    return router;
  };
}

module.exports = ChatRouter;
