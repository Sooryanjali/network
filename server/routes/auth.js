const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// @route POST /api/auth/register

router.post('/register', registerUser);
const { loginUser } = require('../controllers/authController');

// Login route
router.post('/login', loginUser);

module.exports = router;

