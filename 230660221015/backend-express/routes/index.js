// import express
const express = require('express');

// init express router
const router = express.Router();

// import verifyToken middleware
const verifyToken = require('../middlewares/auth');

// import controllers
const registerController = require('../controllers/RegisterController');
const loginController = require('../controllers/LoginController');
const userController = require('../controllers/UserController');

// import validators
const { validateRegister, validateLogin } = require('../utils/validators/auth');
const { validateUser, validateUpdateUser } = require('../utils/validators/user');

// =================== AUTH ROUTES ===================
router.post('/register', validateRegister, registerController.register);
router.post('/login', validateLogin, loginController.login);

// =================== USER ROUTES (ADMIN) ===================

// get all users
router.get('/admin/users', verifyToken, userController.findUsers);

// get user by id ✅ (INI YANG DITAMBAHKAN)
router.get('/admin/users/:id', verifyToken, userController.findUserById);

// create user
router.post('/admin/users', verifyToken, validateUser, userController.createUser);

// update user
router.put(
    '/admin/users/:id',
    verifyToken,
    validateUpdateUser,
    userController.updateUser
);

// delete user
router.delete('/admin/users/:id', verifyToken, userController.deleteUser);

// export router
module.exports = router;
