const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const SECRETKEY = process.env.DB_SECRETKEY;

const jwtAuth = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const verifiedToken = jwt.verify(token, SECRETKEY);
    req.userId = verifiedToken.id;
  } catch (err) {
    return res.status(403).json({ success: false, msg: 'invalid token' });
  }
};

module.exports = jwtAuth;
