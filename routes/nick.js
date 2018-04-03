var express = require('express');
var _ = require('underscore');
var router = express.Router();
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(evens);
});

module.exports = router;