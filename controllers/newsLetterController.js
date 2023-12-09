const BaseController = require('./baseController');

class ClassActivitesController extends BaseController {
  constructor(model, newsImgs) {
    super(model);
    this.newsImgs = newsImgs;
  }

  //-----------For News Letters---------//
  //create class activity post
  createPost = async (req, res) => {
    const newPost = req.body;
    try {
      const newsLetterId = await this.model.create(newPost);
      res.json(newsLetterId);
    } catch (err) {
      return res.status(400).json({ error: 'failed to create post', msg: err });
    }
  };

  //-----------For News Letter Imgs---------//
  //get all imgs
  getAllImgs = async (req, res) => {
    try {
      const output = await this.newsImgs.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  //search imgs from news Letter Id
  findImgs = async (req, res) => {
    const { newsLetterIds } = req.params;
    try {
      const allNewsLetterIds = newsLetterIds.split(',');
      const allNewsLetterImgs = await this.newsImgs.findAll({
        where: { newsLettersId: allNewsLetterIds },
      });
      return res.json(allNewsLetterImgs);
    } catch (err) {
      return res
        .status(400)
        .json({ error: 'failed to get news letters', msg: err });
    }
  };
  //create class activity imgs post
  createImgs = async (req, res) => {
    const { urls, newsLetterId } = req.body;
    console.log(req.body);
    try {
      const createdImages = await Promise.all(
        urls.map(async (url) => {
          const newsLetterImg = await this.newsImgs.create({
            url: url,
            newsLettersId: newsLetterId,
          });
          return newsLetterImg;
        })
      );

      return res.json(createdImages);
    } catch (err) {
      return res.status(400).json({ error: 'failed to create post', msg: err });
    }
  };
}

module.exports = ClassActivitesController;
