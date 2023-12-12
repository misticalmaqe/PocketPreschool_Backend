'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Child.belongsTo(models.user, { foreignKey: 'usersId' });
      Child.hasMany(models.chatRooms, { foreignKey: 'childrenId' });
    }
  }
  Child.init(
    {
      usersId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      fullName: DataTypes.STRING,
      grade: DataTypes.STRING,
      allergies: DataTypes.STRING,
      medicalHistory: DataTypes.STRING,
      DateOfBirth: DataTypes.DATEONLY,
      displayPhoto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'child',
      timestamps: true,
      underscored: true,
    }
  );

  return Child;
};
