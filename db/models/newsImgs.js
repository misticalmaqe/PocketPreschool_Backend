'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsImgs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NewsImgs.belongsTo(models.newsLetter, {
        foreignKey: 'newsLettersId',
      });
    }
  }
  NewsImgs.init(
    {
      url: DataTypes.STRING,
      newsLettersId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'newsLetter',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'newsImgs',
      timestamps: true,
      underscored: true,
    }
  );

  return NewsImgs;
};
