'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassActImgs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ClassActImgs.belongsTo(models.classActivity, {
        foreignKey: 'classActivityId',
      });
    }
  }
  ClassActImgs.init(
    {
      url: DataTypes.STRING,
      classActivityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'classActivity',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'classActImgs',
      timestamps: true,
      underscored: true,
    }
  );

  return ClassActImgs;
};
