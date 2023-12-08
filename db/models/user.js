'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.child, { foreignKey: 'usersId' });
      User.hasMany(models.classActivity, { foreignKey: 'usersId' });
      User.hasMany(models.newsLetter, { foreignKey: 'usersId' });
      User.hasMany(models.chatRooms, { foreignKey: 'usersId' });
      User.hasMany(models.sessionTable, { foreignKey: 'usersId' });
      User.hasMany(models.teacherClass, { foreignKey: 'usersId' });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      fullName: DataTypes.STRING,
      phoneNumber: DataTypes.INTEGER,
      isAdmin: DataTypes.BOOLEAN,
      displayPhoto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'user',
      timestamps: true,
      underscored: true,
    }
  );

  return User;
};
