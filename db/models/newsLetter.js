'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsLetter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NewsLetter.belongsTo(models.user, { foreignKey: 'userId' });
      NewsLetter.hasMany(models.newsImgs, {
        foreignKey: 'newsLetterId',
      });
    }
  }
  NewsLetter.init(
    {
      title: DataTypes.STRING,
      dateTime: DataTypes.DATE,
      description: DataTypes.STRING,
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
      modelName: 'newsLetter',
      timestamps: true,
      underscored: true,
    }
  );

  return NewsLetter;
};
