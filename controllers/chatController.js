const BaseController = require('./baseController');

class ChatController extends BaseController {
  constructor(model, chat, child) {
    super(model);
    this.chat = chat;
    this.child = child;
  }

  //finding chatrooms for teachers
  getRoomsForTeacher = async (req, res) => {
    const { id } = req.params;
    try {
      const chatRooms = await this.model.findAll({
        where: { usersId: id },
      });
      return res.json(chatRooms);
    } catch (err) {
      return res.status(400).json({ error: 'failed to fetch rooms', msg: err });
    }
  };

  //finding chatrooms for students
  getRoomsForStudent = async (req, res) => {
    const { id } = req.params;
    const childIds = id.split(',');
    try {
      const chatRooms = await this.model.findAll({
        where: { childrenId: childIds },
      });
      return res.json(chatRooms);
    } catch (err) {
      return res.status(400).json({ error: 'failed to fetch rooms', msg: err });
    }
  };

  //get chats by chatId
  getChat = async (req, res) => {
    //chatroomId
    const { chatroomId } = req.params;
    try {
      const chat = await this.chat.findAll({
        where: { chatRoomsId: chatroomId },
      });
      return res.json(chat);
    } catch (err) {
      return res.status(400).json({ error: 'failed to fetch chat', msg: err });
    }
  };

  //create chat
  createChat = async (req, res) => {
    const { text, photoUrl, isAdmin, chatRoomsId } = req.body;
    try {
      const message = await this.chat.create({
        text: text,
        photoUrl: photoUrl,
        isAdmin: isAdmin,
        chatRoomsId: chatRoomsId,
      });
      return res.json(message);
    } catch (err) {
      return res
        .status(400)
        .json({ error: 'failed to send message', msg: err });
    }
  };
}

module.exports = ChatController;
