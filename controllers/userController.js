const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/userModels')
const Session = require('../models/sessionModel')

// let user = [];
// let users;

const signUp = async(req, res) =>{
  try{
    // let hash = bcrypt.hashSync(req.body.password, 10)

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

const signIn = async (req, res) =>{
  try{
    let user = await User.findOne({email: req.body.email})
    if (!user) throw {message: "Wrong email"}

    let passwordMatch  = bcrypt.compareSync(req.body.password, user.password)
    if (!passwordMatch) throw {message: "Wrong password"}

    let token = jwt.sign({
      id: user._id,
      role: 'user'
    }, process.env.JWT_PASSWORD)

    let session = new Session({
      sessionToken: token,
      expires: new Date().setMonth(new Date().getMonth() + 1)
    })

    await session.save();

    res.header('twitterauth', token).send(user)

  }catch (e){
    res.status(400).send(e)
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
