const jwt = require('jsonwebtoken');
const config = require('config');

exports.authMiddleware = function (req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
        return res.status(401).json({msg: 'No token, authorization denied'});
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        //added by me
        req.admin = decoded.admin;
        next();
    } catch (err) {
        res.status(401).json({msg: 'Token is not valid'});
    }
};


exports.adminMiddleware = (req, res, next) => {
    if (!req.user || !req.user.admin) return res.status(401).json({
        error: 'Unauthorized'
    });

    next();
};
