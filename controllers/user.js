const User = require('../models/user')

const loginUser = async (req, res) => {
  res.json({mess: 'login user'})
}



const signupUser = async (req, res) => {
  res.json({mess: 'signup user'})
}


module.exports = {
  loginUser,
  signupUser
}