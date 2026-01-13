// routes/auth.js
const express = require('express');
const router = express.Router();
const { validateRegister, validateLogin } = require('../utils/validators/auth');
const { validationResult } = require('express-validator');
const prisma = require('../prisma/client');

router.post('/register', validateRegister, async (req, res) => {
    const errors = validationResult(req);  
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const { name, email, password } = req.body;

    const user = await prisma.user.create({
        data: { name, email, password }
    });

    res.json({ message: "Register berhasil", user });
});

router.post('/login', validateLogin, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    res.json({ message: "Login berhasil" });
});

module.exports = router;
