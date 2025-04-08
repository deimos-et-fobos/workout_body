const User = require('../models/userModel');
const mongoose = require('mongoose');

// login user
const loginUser = async (req, res) => {
  // const user = await User.find().sort({createdAt: -1});
  res.status(200).json({msg: 'login user'})
}

// signup user
const signupUser = async (req, res) => {
  res.status(200).json({msg: 'signup user'})
}

module.exports = {
  loginUser,
  signupUser
}