const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
   content: {
     type: String,
     required: true
   },
  created: {
     type: Date,
     default: Date.now
  },
  likesCount: {
     type: Number,
    default: 0
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
})

const Tweet = mongoose.model('Tweets', tweetSchema)

module.exports = Tweet;