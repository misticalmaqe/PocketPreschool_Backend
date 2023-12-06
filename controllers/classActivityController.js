const BaseController = require('./baseController');

class ClassActivityController extends BaseController {
  constructor(model, classActImgs) {
    super(model);
    this.classActImgs = classActImgs;
  }

  //-----------For Class Activities---------//
  //create class activity post
  createPost = async (req, res) => {
    const classActivity = req.body;
    try {
      const classActivityId = await this.model.create(classActivity);
      res.json(classActivityId.id);
    } catch (err) {
      return res.status(400).json({ error: 'failed to create post', msg: err });
    }
  };

  //get by grade
  getByGrade = async (req, res) => {
    const { grade } = req.params;
    try {
      const gradeArray = grade.split(',');
      const classActivities = await this.model.findAll({
        where: { grade: gradeArray },
      });
      return res.json(classActivities);
    } catch (err) {
      return res
        .status(400)
        .json({ error: 'failed to get classActs', msg: err });
    }
  };

  //-----------For Class Act Imgs---------//
  //search imgs from class activities Id
  findImgs = async (req, res) => {
    const { classActIds } = req.params;
    try {
      const allClassActIds = classActIds.split(',');
      const allClassActImgs = await this.classActImgs.findAll({
        where: { classActivityId: allClassActIds },
      });
      return res.json(allClassActImgs);
    } catch (err) {
      return res
        .status(400)
        .json({ error: 'failed to get classActs', msg: err });
    }
  };
  //create class activity imgs post
  createImgs = async (req, res) => {
    const { urls, classActivityId } = req.body;
    try {
      const createdImages = await Promise.all(
        urls.map(async (url) => {
          const classActImg = await this.classActImgs.create({
            url,
            classActivityId,
          });
          return classActImg;
        })
      );

      return res.json(createdImages);
    } catch (err) {
      return res.status(400).json({ error: 'failed to create post', msg: err });
    }
  };
}

module.exports = ClassActivityController;
