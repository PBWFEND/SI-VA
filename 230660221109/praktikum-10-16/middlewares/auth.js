// Import jwt
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Ambil token dari header Authorization (format: Bearer token)
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthenticated.' });
    }

    // Pisahkan "Bearer" dan token
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token not provided.' });
    }

    // Verifikasi token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });

        // Simpan user id ke request
        req.userId = decoded.id;

        next();
    });
};

module.exports = verifyToken;
