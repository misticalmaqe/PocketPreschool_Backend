'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chat.belongsTo(models.chatRooms, { foreignKey: 'chatRoomsId' });
    }
  }
  Chat.init(
    {
      text: DataTypes.STRING,
      photoUrl: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      chatRoomsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'chatRooms',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'chat',
      timestamps: true,
      underscored: true,
    }
  );

  return Chat;
};
