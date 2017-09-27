var express = require('express');
var router = express.Router();

const q = require('./../backend/questions-and-answers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(q)
});

module.exports = router;
