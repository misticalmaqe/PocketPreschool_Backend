'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ChatRoom.belongsTo(models.user, { foreignKey: 'userId' });
      ChatRoom.belongsTo(models.child, { foreignKey: 'childId' });
      ChatRoom.hasMany(models.chat, { foreignKey: 'chatRoomId' });
    }
  }
  ChatRoom.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      childId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'child',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'chatRooms',
      timestamps: true,
      underscored: true,
    }
  );

  return ChatRoom;
};
