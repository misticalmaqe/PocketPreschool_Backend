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
    router.get('/jwtnewauthtoken', this.controller.jwtNewAuthToken);

    //-----------Users Route-----------//
    router.get('/', this.controller.getAll);
    router.get('/:usersId', this.controller.getOne);
    router.get('/multiple/:multipleEmails', this.controller.getMultipleIds);
    router.post('/', this.controller.add);
    router.put('/:id', this.controller.edit);
    router.delete('/:id', this.controller.delete);

    //-----------Change Password Route-----------//
    router.put('/changePassword', this.controller.updatePassword);

    //-----------Child Route-----------//
    router.get('/child/:id', this.controller.getAllChildOfParent);
    router.get('/childg/:grade', this.controller.getChildrenByGrade);

    //-----------Session Route-----------//
    router.delete('/session/:id', this.controller.deleteByUserId);

    return router;
  };
}

module.exports = UsersRouter;
