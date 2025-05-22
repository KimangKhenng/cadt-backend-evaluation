export const logger = (req, res, next) => {
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.originalUrl}`);
    console.log('Query Parameters:', req.query);
    next();
};
