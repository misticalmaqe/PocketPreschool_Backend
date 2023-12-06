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
      ChatRoom.belongsTo(models.user, { foreignKey: 'usersId' });
      ChatRoom.belongsTo(models.child, { foreignKey: 'childrenId' });
      ChatRoom.hasMany(models.chat, { foreignKey: 'chatRoomsId' });
    }
  }
  ChatRoom.init(
    {
      usersId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      childrenId: {
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
