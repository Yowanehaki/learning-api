const validateFeedback = (req, res, next) => {
    try {
        const { ratings } = req.body;

        if (!ratings || typeof ratings !== 'object') {
            return res.status(400).json({
                message: 'Ratings object is required'
            });
        }

        // Debug log
        console.log('Validating ratings:', ratings);

        // Validate each rating value
        for (const label in ratings) {
            const value = parseInt(ratings[label]);
            if (isNaN(value) || value < 1 || value > 5) {
                return res.status(400).json({
                    message: `Invalid rating value for ${label}. Must be a number between 1 and 5`,
                    received: ratings[label]
                });
            }
        }

        next();
    } catch (error) {
        console.error('Validation error:', error);
        next(error);
    }
};

module.exports = {
    validateFeedback
};
