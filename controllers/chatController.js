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
        where: { userId: id },
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
        where: { childId: childIds },
      });
      return res.json(chatRooms);
    } catch (err) {
      return res.status(400).json({ error: 'failed to fetch rooms', msg: err });
    }
  };
}

module.exports = ChatController;
