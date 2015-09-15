var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'main.html'));
});
router.get('/flashcards', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public', 'flashcards.html'));
});

module.exports = router;
