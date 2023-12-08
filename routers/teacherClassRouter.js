const express = require('express');
const router = express.Router();

class TeacherClassRouter {
  constructor(controller, jwtAuth) {
    this.controller = controller;
    this.jwtAuth = jwtAuth;
  }
  routes = () => {
    //-----------Teacher to class routes-----------//
    router.get('/:id', this.controller.getByGrade);
    router.post('/', this.controller.assigningTeacherClass);

    return router;
  };
}

module.exports = TeacherClassRouter;
