const User = require('../models/userModels')

// let user = [];
let users;

const signUp = async(req, res) =>{
  try{
    const user = new User({
      password: req.body.password,
      email: req.body.email
    })
    let savedUser = await user.save();
    res.send(savedUser)
  } catch (e){
    res.status(400).send(e)
  }
}

const getAllUsers = async (req, res) =>{
  let allUsers = await User.find()
  res.send(allUsers)
}

const signIn = (req, res) =>{
  let email = req.body.email;
  let password = req.body.pass;

  if ( (password === users.pass) && (email === users.email) ) {
    res.send({
      message: 'good'
    })
  }else {
    res.send({
      message: 'bad'
    })
  }
}

const currentUser = (req, res) =>{
  res.send(user)
}

const logOut = (req, res) =>{
  user = null;
  res.send({
    message: "log out"
  })
}

module.exports = {
  signUp,
  signIn,
  currentUser,
  logOut,
  getAllUsers
}
