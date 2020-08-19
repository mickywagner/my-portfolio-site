var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({message: 'hello'});
});

router.get('/resume', function(req, res, next) {
  res.redirect('/static/resume.pdf')
})

module.exports = router;
