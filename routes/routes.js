const router = require('express').Router();
const {checkApi, checkPostApi} = require('../controllers/apiCheckController')
//
const {testMiddleware ,contentToUppercase} = require('../middleware/testMiddleware');
const authenticateMiddleware = require('../middleware/authenticate')

router.route('/apicheck')
  .get(testMiddleware, checkApi)
  .post(checkPostApi)



const {getTweets, createTweet, likeTweet, trendingTweets} = require('../controllers/tweetController')

const userControler = require('../controllers/userController');

router.route('/tweet')
  .get(getTweets)
  .post(authenticateMiddleware.authenticate, createTweet)

router.route('/likeTweet')
  .post(likeTweet)

router.route('/trendingTweets')
  .get(trendingTweets)


router.route('/signUp')
  .post(userControler.signUp)

router.route('/signIn')
  .post(userControler.signIn)

router.route('/logOut')
  .get(userControler.logOut)

router.route('/current')
  .get(userControler.currentUser)

router.route('/allUsers')
  .get(userControler.getAllUsers)



module.exports = router;