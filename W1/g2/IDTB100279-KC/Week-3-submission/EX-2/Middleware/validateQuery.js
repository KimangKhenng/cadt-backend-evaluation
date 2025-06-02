export const validateQuery = (req, res, next) => {
    const { minCredits, maxCredits } = req.query;

    if (minCredits && isNaN(parseInt(minCredits))) {
        return res.status(400).json({ error: "400 Bad Request" });
    }

    if (maxCredits && isNaN(parseInt(maxCredits))) {
        return res.status(400).json({ error: "400 Bad Request" });
    }

    if (minCredits && maxCredits && parseInt(minCredits) > parseInt(maxCredits)) {
        return res.status(400).json({ error: "400 Bad Request" });
    }

    next();
};
