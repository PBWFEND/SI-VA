const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthenticated.' });
    }

    // Remove "Bearer " if exists
    if (token.startsWith('Bearer ')) {
        token = token.slice(7); // hapus "Bearer "
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;
