// src/services/authService.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateAuthToken = (user) => {
  return jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { generateAuthToken };
    