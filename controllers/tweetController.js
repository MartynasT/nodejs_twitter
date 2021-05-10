const Tweet = require('../models/tweetModels')

let tweetsArr = []

const getTweets = async(req, res) =>{
  let allTweets = await Tweet.find()
  res.send(allTweets)
}

const createTweet = async(req, res) =>{
  try {
    const tweet = new Tweet({
      content: req.body.content
    })
    let savedTweet = await tweet.save();
    res.send(savedTweet)

  } catch (e) {
    res.status(400).send(e)
  }
}

const likeTweet = async(req, res) =>{
  try{
    let id = await req.body.id;
    Tweet.findOneAndUpdate(
      { _id: id },
      { $inc: { likesCount: 1 } },
      {new: true},
      function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
  } catch (e) {
    res.status(400).send(e);
  }

}

const trendingTweets = async(req, res) =>{
  try {
    let trending = await Tweet.find().sort({ likesCount: 'desc'}).limit(5);
    res.send(trending)
  } catch (e) {
    res.status(400).send(e);
  }
}

module.exports = {
  createTweet,
  getTweets,
  likeTweet,
  trendingTweets
}
