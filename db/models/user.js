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
      User.hasMany(models.child, { foreignKey: 'userId' });
      User.hasMany(models.classActivity, { foreignKey: 'userId' });
      User.hasMany(models.newsLetter, { foreignKey: 'userId' });
      User.hasMany(models.chatRooms, { foreignKey: 'userId' });
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
