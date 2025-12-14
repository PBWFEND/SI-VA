const { body } = require('express-validator');

const validateUser = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
    
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format'),
    
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
        .optional()
];

const validateUpdateUser = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters')
        .optional(),
    
    body('email')
        .isEmail().withMessage('Invalid email format')
        .optional(),
    
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
        .optional()
];

module.exports = { validateUser, validateUpdateUser };