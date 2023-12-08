'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TeacherClass.belongsTo(models.user, { foreignKey: 'usersId' });
    }
  }
  TeacherClass.init(
    {
      grade: DataTypes.STRING,
      usersId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'teacherClass',
      timestamps: true,
      underscored: true,
    }
  );

  return TeacherClass;
};
