'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SessionTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SessionTable.belongsTo(models.user, { foreignKey: 'usersId' });
    }
  }
  SessionTable.init(
    {
      usersId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      refreshAuth: DataTypes.STRING,
      jwtAuth: DataTypes.STRING,
      isValid: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'sessionTable',
      timestamps: true,
      underscored: true,
    }
  );

  return SessionTable;
};
