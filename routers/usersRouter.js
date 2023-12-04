const express = require('express');
const router = express.Router();

class UsersRouter {
  constructor(controller, jwtAuth) {
    this.controller = controller;
    this.jwtAuth = jwtAuth;
  }
  routes = () => {
    //-----------JWT Route-----------//
    router.post('/jwtsignup', this.controller.jwtSignUp);
    router.post('/jwtsignin', this.controller.jwtSignIn);

    //-----------Users Route-----------//
    router.get('/', this.controller.getAll);
    router.get('/:usersId', this.controller.getOne);
    router.post('/', this.controller.add);
    router.put('/:id', this.controller.edit);
    router.delete('/:id', this.controller.delete);
    router.get('/multiple/:multipleEmails', this.controller.getMultipleIds);

    //-----------Change Password Route-----------//
    router.put('/changePassword/:userid', this.controller.changePassword);

    return router;
  };
}

module.exports = UsersRouter;
