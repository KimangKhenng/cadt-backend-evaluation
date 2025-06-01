// logger.js
const logger = (req, res, next) => {
  const method = req.method;
  const path = req.originalUrl;
  const query = req.query;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${method} ${path} | Query: ${JSON.stringify(query)}`);
  next();
};

export default logger;
