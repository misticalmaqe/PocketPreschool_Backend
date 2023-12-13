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
    router.put(
      '/jwtNewAuthTokenValidation',
      this.jwtAuth,
      this.controller.jwtNewAuthTokenValidation
    );

    //-----------Users Route-----------//
    router.get('/', this.jwtAuth, this.controller.getAll);
    router.get('/:usersId', this.jwtAuth, this.controller.getOne);
    router.get(
      '/multiple/:multipleEmails',
      this.jwtAuth,
      this.controller.getMultipleIds
    );
    router.post('/', this.jwtAuth, this.controller.add);
    router.put('/:id', this.jwtAuth, this.controller.edit);
    router.delete('/:id', this.jwtAuth, this.controller.delete);

    //-----------Change Password Route-----------//
    router.put(
      '/change/changePassword',
      this.jwtAuth,
      this.controller.updatePassword
    );

    //-----------Child Route-----------//
    router.get('/child/:id', this.jwtAuth, this.controller.getAllChildOfParent);
    router.get(
      '/childg/:grade',
      this.jwtAuth,
      this.controller.getChildrenByGrade
    );

    //-----------Session Route-----------//
    router.delete('/session/:id', this.jwtAuth, this.controller.deleteByUserId);

    return router;
  };
}

module.exports = UsersRouter;
