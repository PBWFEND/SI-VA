const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth');

router.get('/profile', verifyToken, (req, res) => {
    res.json({
        message: "Berhasil akses protected route",
        userId: req.userId
    });
});

module.exports = router;
