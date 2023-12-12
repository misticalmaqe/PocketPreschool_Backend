// Importing necessary modules and libraries
const BaseController = require('./baseController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

// Retrieve environment variables

const SECRETKEYAUTH = process.env.DB_SECRETKEYAUTH;
const SECRETKEYREFRESH = process.env.DB_SECRETKEYREFRESH;

// Define UsersController class extending BaseController
class UsersController extends BaseController {
  // Constructor to initialize the UsersController with a model and groupAccount
  constructor(model, child, sessionTable) {
    // Call the constructor of the base class (BaseController)
    super(model);
    this.child = child;
    this.sessionTable = sessionTable;
  }

  //---------------JWT---------------//
  // JWT SIGN UP
  // does not need auth and refresh token as you can't sign up on your own...
  jwtSignUp = async (req, res) => {
    const { email, password, fullName, phoneNumber, isAdmin, displayPhoto } =
      req.body;

    // Data validation to confirm
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: true, msg: 'Missing basic information' });
    }

    try {
      // Check if the email already exists
      const existingUser = await this.model.findOne({ where: { email } });

      if (existingUser) {
        return res.status(409).json({
          error: true,
          msg: 'Email already in use. Please use a different email address.',
        });
      }

      // Hash password
      const saltRounds = parseInt(process.env.DB_SALT);
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create a new user
      const newUser = await this.model.create({
        email,
        password: hashedPassword,
        fullName: fullName,
        phoneNumber: phoneNumber,
        isAdmin: isAdmin,
        displayPhoto: displayPhoto,
      });

      return res.json({ success: true, newUser });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: true, msg: 'Error creating user' });
    }
  };

  // JWT SIGN IN
  jwtSignIn = async (req, res) => {
    const { email, password } = req.body;

    // Data validation to confirm
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: true, msg: 'Missing basic information' });
    }

    const user = await this.model.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: true, msg: 'User not found' });
    }

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) {
      return res.status(403).json({ error: true, msg: 'Invalid password' });
    }

    const payload = {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    };

    const authToken = jwt.sign(payload, SECRETKEYAUTH, {
      expiresIn: '999999hours',
    });

    const refreshToken = jwt.sign(payload, SECRETKEYREFRESH, {
      expiresIn: '999999hours',
    });

    await this.sessionTable.create({
      usersId: user.id,
      refreshAuth: refreshToken,
      jwtAuth: authToken,
      isValid: true,
    });

    return res.json({ success: true, authToken, refreshToken });
  };
  //JWT generate new AuthToken
  jwtNewAuthTokenValidation = async (req, res) => {
    const { authTokenLocal, refreshTokenLocal } = req.body;
    try {
      //more try catches
      //verify auth and refresh token
      const verifiedAuthToken = jwt.verify(authTokenLocal, SECRETKEYAUTH);
      req.userId = verifiedAuthToken.id;
      const verifiedRefreshToken = jwt.verify(
        refreshTokenLocal,
        SECRETKEYREFRESH
      );
      req.userId = verifiedRefreshToken.id;
      //

      //find session Id where authToken and refreshToken
      const findSessionTable = await this.model.findOne({
        where: { jwtAuth: authTokenLocal, refreshAuth: refreshTokenLocal },
      });
      if (findSessionTable.isValid === true) {
        //create new token
        const user = await this.model.findOne({ where: { id: userId } });
        const payload = {
          id: user.id,
          email: user.email,
          isAdmin: user.isAdmin,
        };

        const authToken = jwt.sign(payload, SECRETKEYAUTH, {
          expiresIn: '10mins',
        });

        // update session tables with new token with useId
        const sessionTableToEdit = await this.sessionTable.findByPk({
          where: { usersId: userId },
        });
        // Update the user's properties using Sequelize's update method
        await sessionTableToEdit.update({ jwtAuth: authToken });
        return res.json({ success: true, newAuthToken });
      } else {
        await this.sessionTable.destroy;
        return res.json({ msg: 'session deleted' });
      }
    } catch (err) {
      return res.status(404).json({ message: 'validation function failed' });
    }
  };
  //JWT generate new AuthToken
  jwtNewAuthTokenValidation = async (req, res) => {
    const { authToken, refreshToken } = req.body;
    try {
      //create new token
      const user = await this.model.findOne({ where: { id: userId } });
      const payload = {
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
      };

      const authToken = jwt.sign(payload, SECRETKEYAUTH, {
        expiresIn: '10mins',
      });

      // update session tables with new token with useId
      const sessionTableToEdit = await this.sessionTable.findByPk({
        where: { usersId: userId },
      });
      // Update the user's properties using Sequelize's update method
      await sessionTableToEdit.update({ jwtAuth: authToken });
      return res.json({ authToken });
    } catch (err) {
      return res
        .status(404)
        .json({ message: 'did not manage to generate new token' });
    }
  };

  //---------------USER---------------//
  // Get User Info by Id
  getOne = async (req, res) => {
    const { usersId } = req.params;
    try {
      // Find a user by ID using Sequelize's findByPk method
      const user = await this.model.findByPk(usersId);
      // Respond with JSON containing the found user
      return res.json({
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        phoneNumber: user.phoneNumber,
        displayPhoto: user.displayPhoto,
      });
    } catch (err) {
      // Handle errors and respond with an error JSON
      return res.status(400).json({ error: true, msg: err });
    }
  };

  // Get multiple Ids through emails
  getMultipleIds = async (req, res) => {
    const { multipleEmails } = req.params;

    try {
      // Split the comma-separated string of groupAccountIds into an array
      const idsArray = multipleEmails.split(',');

      // Assuming your model has a field named 'id' for comparison
      const userIds = await this.model.findAll({
        where: {
          email: idsArray,
        },
      });

      return res.status(200).json({ userIds });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  };

  // Method to add a new user
  add = async (req, res) => {
    const newUser = req.body;
    try {
      // Create a new user using Sequelize's create method
      await this.model.create(newUser);
      // Retrieve all users from the database
      const data = await this.model.findAll();
      // Respond with JSON containing the list of users and a success message
      res.json({ user: data, message: 'success' });
    } catch (err) {
      // Handle errors and respond with an error JSON
      return res.status(400).json({ error: true, msg: err });
    }
  };

  // Method to edit an existing user
  edit = async (req, res) => {
    const userToAdd = req.body;
    const userToReplace = req.params.id;
    try {
      // Find the user to edit by ID
      const userToEdit = await this.model.findByPk(userToReplace);
      // Update the user's properties using Sequelize's update method
      await userToEdit.update(userToAdd);
      // Retrieve all users from the database
      const data = await this.model.findAll();
      // Respond with JSON containing the list of users and a success message
      res.json({ user: data, message: 'success' });
    } catch (err) {
      // Handle errors and respond with an error JSON
      return res.status(400).json({ error: true, msg: err });
    }
  };

  // Method to delete a user by ID
  delete = async (req, res) => {
    let userIdToDelete = req.params.id;
    try {
      // Find the user to delete by ID
      const userToDelete = await this.model.findByPk(userIdToDelete);

      // Check if the user exists
      if (!userToDelete) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Delete the user from the database
      await userToDelete.destroy();
      // Retrieve all users from the database
      const data = await this.model.findAll();
      // Respond with JSON containing the list of users and a success message
      res.json({ users: data, message: 'success' });
    } catch (err) {
      // Log the error and respond with an error JSON
      console.error(err);
      res.status(400).json({ message: 'Error deleting user' });
    }
  };

  // Method to update a user's password
  updatePassword = async (req, res) => {
    const { userId, currentPassword, newPassword } = req.body;
    console.log(userId);
    console.log(currentPassword);
    console.log(newPassword);
    try {
      // Find the user by ID
      const userToUpdate = await this.model.findByPk(userId);

      const saltRounds = parseInt(process.env.DB_SALT);

      // Verify the current password
      const compare = await bcrypt.compare(
        currentPassword,
        userToUpdate.password
      );

      if (!compare) {
        return res
          .status(403)
          .json({ error: true, msg: 'Current password is incorrect' });
      }

      // Hash the new password
      const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

      // Update the user's password in the database
      await userToUpdate.update({ password: hashedNewPassword });

      console.log('Password updated successfully');

      return res.json({ success: true, msg: 'Password updated successfully' });
    } catch (err) {
      console.error('Error updating password:', err);
      return res
        .status(400)
        .json({ error: true, msg: 'Error updating password' });
    }
  };

  //---------------CHILDREN---------------//
  getAllChildOfParent = async (req, res) => {
    const { id } = req.params;
    try {
      const child = await this.child.findAll({
        where: { usersId: id },
      });
      return res.json(child);
    } catch (err) {
      return res.status(400).json({ error: true, msg: 'children not found' });
    }
  };

  getChildrenByGrade = async (req, res) => {
    const { grade } = req.params;
    try {
      const allChildren = await this.child.findAll({
        where: { grade: grade },
      });
      return res.json(allChildren);
    } catch (err) {
      return res.status(400).json({ error: true, msg: 'children not found' });
    }
  };

  //---------------SessionTable---------------//
  deleteByUserId = async (req, res) => {
    const { id } = req.params;
    try {
      // Find the user to delete by ID
      const sessionToDelete = await this.sessionTable.destroy({
        where: { usersId: id },
      });

      return res.json({ msg: 'session deleted' });
    } catch (err) {
      return res.status(400).json({ error: true, msg: 'failed to delete' });
    }
  };
}

// Export the UsersController class
module.exports = UsersController;
