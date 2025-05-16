const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

  const token = req.header('x-auth-token');


  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }


  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    /*** Check if email ends with admin.nyc.schools.gov ***/
    if (!decoded.email.endsWith('@admin.nyc.schools.gov')) {
      return res.status(401).json({ message: 'Not an admin email' });
    }

    req.admin = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};