const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};



//
// const jwt = require('jsonwebtoken');
// const role=require('./role');
// module.exports = function (req, res, next) {
//     const token = req.header('x-auth-header');
//     if (!token)
//         return res.status(401).send('Access Denied: No Token Provided!');
//     try {
//         const decoded = jwt.verify(token, "secretkey");
//         if(role[decoded.role].find(function(url)
//         {
//             return url==req.baseUrl})){req.user=decoded
//             next();
//         }
//         else
//             return res.status(401).send('Access Denied: You dont have correct privilege to perform this operation');}
//     catch (ex) {
//         res.status(401).send('Invalid Token')
//     }}
