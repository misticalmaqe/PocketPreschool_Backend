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

    //-------------Chats-------------//
    router.get('/rooms/:chatroomId', this.controller.getChat);
    router.post('/rooms', this.controller.createChat);
    return router;
  };
}

module.exports = ChatRouter;
