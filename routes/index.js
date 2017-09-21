var express = require('express');
var router = express.Router();
var githubApi = require('github');

var github = new githubApi({});
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/getFollowers/:user', function(req, res, next){
  github.users.getFollowingForUser({
    username: req.params.user
  }, function(err, data){
    res.json(data);
  })
});

module.exports = router;
