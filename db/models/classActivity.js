'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassActivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ClassActivity.belongsTo(models.user, { foreignKey: 'userId' });
      ClassActivity.hasMany(models.classActImgs, {
        foreignKey: 'classActivityId',
      });
    }
  }
  ClassActivity.init(
    {
      title: DataTypes.STRING,
      dateTime: DataTypes.DATE,
      description: DataTypes.STRING,
      grade: DataTypes.STRING,
      userId: {
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
      modelName: 'classActivity',
      timestamps: true,
      underscored: true,
    }
  );

  return ClassActivity;
};
