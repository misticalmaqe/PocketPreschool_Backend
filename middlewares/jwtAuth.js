const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const SECRETKEYAUTH = process.env.DB_SECRETKEYAUTH;

const jwtAuth = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const verifiedToken = jwt.verify(token, SECRETKEYAUTH);
    req.userId = verifiedToken.id;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, msg: 'invalid token' });
  }
};

module.exports = jwtAuth;
