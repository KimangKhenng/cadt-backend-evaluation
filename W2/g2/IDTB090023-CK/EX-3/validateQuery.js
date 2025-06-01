// validateQuery.js
const validateQuery = (req, res, next) => {
  const { minCredits, maxCredits } = req.query;

  const min = parseInt(minCredits);
  const max = parseInt(maxCredits);

  if ((minCredits && isNaN(min)) || (maxCredits && isNaN(max))) {
    return res.status(400).json({ error: "minCredits and maxCredits must be valid integers" });
  }

  if (!isNaN(min) && !isNaN(max) && min > max) {
    return res.status(400).json({ error: "minCredits cannot be greater than maxCredits" });
  }

  next();
};

export default validateQuery;
