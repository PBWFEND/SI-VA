//import express validator
const { body } = require('express-validator');

//import prisma
const prisma = require('../../prisma/client');

// Validasi Register
const validateRegister = [
    body('name')
        .notEmpty().withMessage('Name is required'),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email is invalid')
        .custom(async (value) => {
            const user = await prisma.user.findUnique({
                where: { email: value }
            });
            if (user) {
                throw new Error('Email already exists');
            }
            return true;
        }),

    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
];

// Validasi Login
const validateLogin = [
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email is invalid'),

    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
];

module.exports = { validateRegister, validateLogin };
