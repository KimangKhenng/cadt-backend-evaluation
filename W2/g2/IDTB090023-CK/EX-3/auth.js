// auth.js
const auth = (req, res, next) => {
  const token = req.query.token;

  if (!token || token !== 'xyz123') {
    return res.status(401).json({ error: 'Unauthorized: invalid or missing token' });
  }

  next();
};

export default auth;
