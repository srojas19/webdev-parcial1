var express = require('express');
var router = express.Router();
var githubApi = require('github');
var mongodb = require('mongodb');

var github = new githubApi({});
var url = 'mongodb://admin:admin@ds147274.mlab.com:47274/parcial1'


router.get('/getFollowers/:user', function(req, res, next){
  github.users.getFollowingForUser({
    username: req.params.user
  }, function(err, data){
    res.json(data);
  })
});

router.get('/getUser/:user', function(req, res, next){
  github.users.getForUser({
    username: req.params.user
  }, function(err, data){
    res.json(data);
  })
});

function reference(user, callback) {
  mongodb.connect(url, (err, db) => {
    if(err) throw err;
    var collection = db.collection('users');
   
    collection.findAndModify(
      { login: user }, 
      { timesReferenced: 1 },
      { $inc: {timesReferenced: 1 }},
      { upsert: true, new: true },
      ((err, data) => callback(data)));
  });
}

router.post('/reference/:user', function(req, res, next){
  reference(req.params.user, (data)=> res.json(data.value));
})

module.exports = router;
