const express = require('express');
const router = express.Router();

class ChatRouter {
  constructor(controller, jwtAuth) {
    this.controller = controller;
    this.jwtAuth = jwtAuth;
  }
  routes = () => {
    //-------------Chat Rooms-------------//
    router.get('/', this.jwtAuth, this.controller.getAll);
    router.get(
      '/teacher/:id',
      this.jwtAuth,
      this.controller.getRoomsForTeacher
    );
    router.get('/child/:id', this.jwtAuth, this.controller.getRoomsForStudent);

    //-------------Chats-------------//
    router.get('/rooms/:chatroomId', this.jwtAuth, this.controller.getChat);
    router.post('/rooms', this.jwtAuth, this.controller.createChat);
    return router;
  };
}

module.exports = ChatRouter;
