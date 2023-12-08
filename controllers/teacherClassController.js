const BaseController = require('./baseController');

class ClassActivityController extends BaseController {
  constructor(model) {
    super(model);
  }

  //-----------Teacher in charge of class---------//
  //get grade for teacher
  getByGrade = async (req, res) => {
    const { id } = req.params;
    try {
      const classActivities = await this.model.findAll({
        where: { usersId: id },
      });
      const grade = classActivities[0].grade;
      return res.json(grade);
    } catch (err) {
      return res.status(400).json({ error: 'failed to get grade', msg: err });
    }
  };

  //assigning teacher to a class
  assigningTeacherClass = async (req, res) => {
    const teacherGrade = req.body;
    try {
      const newAssignment = await this.model.create(teacherGrade);
      res.json(newAssignment);
    } catch (err) {
      return res
        .status(400)
        .json({ error: 'failed to assign teacher', msg: err });
    }
  };
}

module.exports = ClassActivityController;
